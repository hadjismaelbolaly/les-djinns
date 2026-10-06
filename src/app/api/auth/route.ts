import { NextResponse, type NextRequest } from "next/server";
import { randomBytes } from "node:crypto";

// Étape 1 de la connexion GitHub pour Decap CMS (/admin)
export function GET(req: NextRequest) {
  const clientId = process.env.GITHUB_CLIENT_ID;
  if (!clientId) return new NextResponse("GITHUB_CLIENT_ID manquant dans les variables d'environnement Vercel.", { status: 500 });
  const state = randomBytes(16).toString("hex");
  const url = new URL("https://github.com/login/oauth/authorize");
  url.searchParams.set("client_id", clientId);
  url.searchParams.set("scope", "repo,user");
  url.searchParams.set("state", state);
  url.searchParams.set("redirect_uri", `${req.nextUrl.origin}/api/callback`);
  const res = NextResponse.redirect(url);
  res.cookies.set("decap_oauth_state", state, { httpOnly: true, secure: true, sameSite: "lax", maxAge: 600, path: "/api" });
  return res;
}
