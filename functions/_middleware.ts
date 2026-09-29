/**
 * Global Cloudflare Pages middleware.
 *
 * The retired test hostname has been indexed with copies of production pages.
 * Redirect every request to the same path and query on the canonical hostname
 * so search engines consolidate those signals instead of treating it as a
 * second site.
 */
const TEST_HOSTNAME = "test.joesvintageguitarsaz.com";
const PRODUCTION_HOSTNAME = "www.joesvintageguitarsaz.com";

interface PagesContext {
  request: Request;
  next(): Promise<Response>;
}

export async function onRequest(context: PagesContext): Promise<Response> {
  const url = new URL(context.request.url);

  if (url.hostname.toLowerCase() === TEST_HOSTNAME) {
    url.protocol = "https:";
    url.hostname = PRODUCTION_HOSTNAME;
    url.port = "";
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
