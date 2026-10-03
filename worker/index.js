// Jediná logika: www.letonicespolecne.cz -> https://letonicespolecne.cz (301).
// Všechno ostatní obslouží statické soubory ze složky public/ (včetně _headers a 404.html).
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const isWww = url.hostname.startsWith("www.");
    const isLocal = url.hostname === "localhost" || url.hostname === "127.0.0.1";
    if (isWww || (url.protocol === "http:" && !isLocal)) {
      if (isWww) url.hostname = url.hostname.slice(4);
      url.protocol = "https:";
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
