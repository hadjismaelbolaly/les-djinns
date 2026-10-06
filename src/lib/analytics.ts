type Gtag = (command: "event", name: string, params?: Record<string, string>) => void;

export function trackEvent(name: string, params: Record<string, string> = {}) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  if (gtag) gtag("event", name, params);
}
