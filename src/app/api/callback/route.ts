import { NextResponse, type NextRequest } from "next/server";

// Étape 2 : GitHub renvoie un code, échangé côté serveur contre un jeton (le secret ne quitte jamais le serveur)
export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code");
  const state = req.nextUrl.searchParams.get("state");
  const saved = req.cookies.get("decap_oauth_state")?.value;
  const origin = req.nextUrl.origin;

  const reply = (status: "success" | "error", content: object) => {
    const payload = JSON.stringify(content).replace(/</g, "\\u003c");
    const html = `<!doctype html><html><body><script>
      (function(){
        function receive(e){
          if (e.origin !== ${JSON.stringify(origin)}) return;
          window.opener.postMessage('authorization:github:${status}:' + ${JSON.stringify(payload)}, e.origin);
          window.removeEventListener('message', receive, false);
        }
        window.addEventListener('message', receive, false);
        window.opener.postMessage('authorizing:github', ${JSON.stringify(origin)});
      })();
    </script></body></html>`;
    const res = new NextResponse(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
    res.cookies.delete("decap_oauth_state");
    return res;
  };

  if (!code || !state || state !== saved) return reply("error", { message: "Requête de connexion invalide." });

  const r = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({ client_id: process.env.GITHUB_CLIENT_ID, client_secret: process.env.GITHUB_CLIENT_SECRET, code }),
  });
  const data = (await r.json()) as { access_token?: string; error_description?: string };
  if (!data.access_token) return reply("error", { message: data.error_description || "Échec de la connexion GitHub." });
  return reply("success", { token: data.access_token, provider: "github" });
}
