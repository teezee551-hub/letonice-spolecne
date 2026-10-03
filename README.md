# LETONICE SPOLEČNĚ · volební web 2026

Statický web sdružení nezávislých kandidátů LETONICE SPOLEČNĚ pro komunální volby 9.–10. 10. 2026.
Běží na **https://letonicespolecne.cz/** (Cloudflare Workers se statickými soubory, nástupce Cloudflare Pages).
Žádný framework, žádný build krok, žádné cookies, analytika ani externí fonty.

## Struktura
- `public/` – celý web, který se nasazuje (`index.html`, `program.html` pro tisk, `404.html`, `styles.css`, `script.js`, `assets/`, `_headers`, `robots.txt`, `sitemap.xml`, `og.jpg`, `favicon.ico`).
- `public/_headers` – bezpečnostní hlavičky (CSP, X-Frame-Options, Referrer-Policy, Permissions-Policy, HSTS) a cachování.
- `worker/index.js` – jediná logika: přesměrování `www` → holá doména a `http` → `https` (301). Ostatní obsluhují statické soubory.
- `wrangler.jsonc` – konfigurace nasazení včetně vlastních domén letonicespolecne.cz a www.letonicespolecne.cz.
- `archiv-podkladu/` – nepoužité fotky, nenasazují se.
- `index.html` v kořeni repa – jen přesměrování ze staré adresy na GitHub Pages.

## Aktualizace webu jedním příkazem
Upravte soubory v `public/` a spusťte v kořeni repa:

```
npm run deploy
```

Poprvé na novém počítači: `npm install` a `npx wrangler login` (otevře prohlížeč s přihlášením do Cloudflaru).
Bez prohlížeče lze místo přihlášení nastavit proměnnou prostředí `CLOUDFLARE_API_TOKEN` s tokenem z dashboardu
(My Profile → API Tokens → šablona „Edit Cloudflare Workers“). Token nikdy neukládejte do repa.

Po změně `styles.css` nebo `script.js` zvyšte v `public/index.html` parametr `?v=…`, ať se nová verze načte i lidem s cache.
Lokální náhled se stejnými hlavičkami: `npm run dev` → http://127.0.0.1:8787

Tiskové PDF programu (`public/assets/program.pdf`) se generuje z `public/program.html` přes headless Chrome:

```
chrome --headless=new --no-pdf-header-footer --print-to-pdf=public/assets/program.pdf public/program.html
```

## Volitelně: e-mail info@letonicespolecne.cz (Cloudflare Email Routing, zdarma)
1. Dashboard Cloudflare → doména letonicespolecne.cz → **Email** → **Email Routing** → **Get started / Enable**.
2. Cloudflare nabídne přidání MX a TXT (SPF) záznamů → **Add records and enable**.
3. **Destination addresses** → přidat svůj osobní e-mail → potvrdit odkaz, který na něj přijde.
4. **Routing rules** → **Create address** → `info` → akce *Send to an email* → vybrat ověřenou adresu → **Save**.
5. Otestovat: poslat e-mail na info@letonicespolecne.cz. Odpovídá se ze svého osobního e-mailu.

# Historie změn

## Změny 3. 10. 2026 – přechod na vlastní doménu
- Web přesunut do `public/` a nasazen na Cloudflare (letonicespolecne.cz, www přesměrovává). Fonty hostované lokálně, obrázky ve WebP s rozměry, doplněny canonical, Open Graph, Twitter Card, og.jpg 1200×630, favicon.ico, 404, robots.txt, sitemap.xml a `_headers`.
- Sekce Koupaliště označena jako „Podrobněji k bodu 6 programu“ s odkazem zpět na bod 6.
- Bod 1 programu má fotku pohledu na Letonice z letáku. Z mapy odstraněni lodní modeláři.

## Změny 1. 10. 2026 (podklady od Jana Ježorka + aktuální letáky)
- Z mapy odstraněni lodní modeláři (Midway Mini Navy Club už neexistuje).
- Sekce Koupaliště podle návrhu „Opravit3“: galerie „Jak to bylo“ = 8 nových fotek ve dvou řadách po čtyřech, **bez popisek** (ilustrační). Inspirace odjinud = Mokrák, Bystřice, Uhřice, Vsetín (bez popisek), starší vizualizace odstraněna; doplněna věta „Z takových a jim podobných variant chceme vycházet.“ Nahrazené staré fotky z repa smazány.
- Přepínač u plánku: „Preferovaná varianta“ + „Areál kolem roku 1970“ (letecký snímek z doby dokončování).
- Jméno Jana Ježorka odstraněno z popisků pod plánkem (v samotném plánku zůstává). U jeho citátu jen „Jan Ježorek · kandidát č. 5“.
- Jak volit: neutrální výklad bez veřejného doporučování „celé kandidátky“ (přání zadavatele); ukázka lístku bez křížku. Stejně upravena titulní strana PDF.
- Bod 3 programu podle nové grafiky (podbody i citát). PDF přegenerováno (4 strany).
- Kandidát č. 12 Jaroslav Lučan – fotografie; motta všech kandidátů podle letáku kandidátky (na webu, v PDF jen původní).
- Hero a kostel nahrazeny čistšími verzemi stejných záběrů; leták „Naše priority“ nahrazen aktuální verzí. Verze CSS/JS `?v=20261001`.
## Změny 11. 9. 2026 (podklady od Jana Ježorka)
- Bod 6 programu přepsán podle dokumentu „Koupaliště web upravit.doc“ (červený text = nová verze): nový podtitul, tři podbody i citát. Stejně upraven `program.html` a přegenerováno `assets/program.pdf` (headless Edge, `--print-to-pdf`).
- Sekce Koupaliště: nový úvod; přepínač má jen dvě karty – **Preferovaná varianta** (výchozí, nová vizualizace „Sportovně rekreační areál Letonice – konceptní návrh“, `assets/img/koupaliste-studie-2030.jpg` 1600 px pro zobrazení, `…-full.jpg` 2200 px pro lightbox) a **Ze vzpomínek**. Karta „Studie 2021“ odstraněna, vizualizace DIMENSE zůstává v galerii Inspirace odjinud. Bod 6 v programu má jako obrázek novou vizualizaci.
- Nápady z návrhu doplněny o „skluzavka a jiné atrakce“ a „badminton“; „Jak k tomu chceme přistoupit“ nahrazeno třemi kroky „Naše cesta k cíli“ (údržba, studie proveditelnosti, dotace – Národní sportovní agentura, krajské programy).
- Motto Jana Ježorka („Vraťme Letonicím její bývalou pýchu…“) u jeho karty kandidáta a pod kroky v sekci Koupaliště.
- Nová fotografie lídra Petra Skokana (`01-petr-skokan.jpg`, odkaz s `?v=20260911` proti cache) a doplněná fotografie č. 15 Pavla Selingera (`15-pavel-selinger.jpg`); obě zmenšeny na 600×800 px. Verze CSS/JS zvýšena na `?v=20260911`.

## Změny 7. 9. 2026
- Velké logo v hlavičce (120 px, na mobilu 80/68 px) s dvouřádkovým názvem LETONICE / SPOLEČNĚ jako na letáku; po odscrollování o více než 80 px se hlavička zmenší (třída `.nav.compact`, logo 60 px), aby nezabírala místo. Větší logo i v patičce, větší základní písmo webu. Odkazy na CSS/JS mají `?v=…` proti staré cache prohlížeče (po další úpravě verzi změnit; `build.cjs` query ignoruje).
- Body programu obsahují **pouze to, co je na letácích**: název, podbody s krátkým popisem a citát (žádné další odstavce). Odkazy na územní plán a na sekci Koupaliště jsou jen v popiscích fotek.
- Hero: karta „Zachováme, co funguje“ přesunuta pod text do levého sloupce, fotka Letonic vpravo už není překrytá; hero fotky zostřeny a odmlženy (originály v `assets/img/_orig/`).
- Mapa přes celou šířku sekce Program. Barevné body programu: 1 hnědá (obecní úřad), 2 červená (spolky: Orel/Orlovna, SDH/zbrojnice, TJ/hřiště, myslivci/chata, rybáři/Šmolesy, zahrádkáři, ČČK), 3 žlutá (ZŠ, MŠ), 5 fialová (plochy bydlení B1–B14 a B101 z územního plánu jako polygony), 6 modrá (areál koupaliště, obchodní dům, tři dětská hřiště), 7 zelená (NPR Větrníky s hranicí, náves, hřbitov).
- Všechna data mapy jsou v `assets/data/mapa-letonice.js` (`approx:true` = orientační poloha, značka má čárkovaný okraj). Polygony ploch bydlení jsou přeneseny z výkresů ÚP (koordinační výkres O3 1:2000 a hlavní výkres 1:5000), přesnost cca ±15 m.
- Podbody programu sjednoceny s grafikami 1, 2, 4, 5 a 7 z podkladů „VOLBY 2026“. Bod 6 zůstává podle programu v DOCX – grafika 6.png má omylem podbody bodu 5. Bod 3 nemá grafiku, zůstal podle DOCX. Rozvržení každého bodu 50 % text / 50 % obrázek; bod 5 má jako obrázek výřez z územního plánu (`assets/img/uzemni-plan-vyrez.jpg`).
- `program.html` a `assets/program.pdf` přegenerovány se stejnými podbody.

## Změny 11. 9. 2026 večer – hlavička
- Zrušeno zmenšování hlavičky po odscrollování (třída `.nav.compact` a její JS odstraněny). Logo je trvale 150 px (tablet 96 px, mobil 80 px) s vínovým a bílým prstencem a stínem, název vedle loga větší. `scroll-margin-top` kotev zvýšen na 180/120/104 px. Verze CSS/JS `?v=20260911c` (po upřesnění polohy hřiště v Mezírce).

## K ověření zadavatelem (orientační polohy)
- Dětská hřiště „na Nové“ a „za fotbalovým hřištěm“ – web obce uvádí hřiště v ulicích Nová, U Zbrojnice a 9. května; přesné souřadnice upravte v `assets/data/mapa-letonice.js` (pole `lat`, `lon`, poté smazat `approx: true`). Hřiště „v Mezírce“ je od 11. 9. 2026 umístěno přesně: střed pěšiny mezi domy č. 610 a 440 (OSM way 170697300, spojuje Novou a 9. května) podle upřesnění zadavatele.
- Zahrádkáři a Český červený kříž nemají veřejně uvedenou vlastní budovu, značky jsou u obecního domu.
- Plocha bydlení B5 nebyla ve výkresech ÚP nalezena (ve výřezu ani v hlavním výkrese).


## Úpravy
- Skutečná mapa OpenStreetMap s ověřenými polohami úřadu, fotbalového hřiště, ZŠ a volejbalových kurtů u koupaliště. Bod bydlení nezobrazuje neověřené pozemky.
- Koupaliště: přepínání archivní fotografie, pracovního návrhu Jana Ježorka (2026) a architektonické studie DIMENSE (květen 2021). Návrhy jsou výslovně označené jako neschválené.
- Galerie podporuje předchozí/další obrázek, šipky na klávesnici, Escape a návrat fokusu.
- Nefunkční demo formulář nahrazen osobním kontaktem na kandidáty podle přání zadavatele.
- Mobilní navigace, přímé odkazy do programu, omezení animací a čitelnost bez JavaScriptu.
- Původní tiskové PDF a dodané fotografie zachovány. Původní neplatné content*.json nejsou součástí webu ani publikace.

## Zdroje
Program: dodaný Náš program pro Letonice_Zdena(1).docx. Kandidáti a fotografie z původního webu a dodaných podkladů.
Mapa: https://www.openstreetmap.org/copyright (ověřeno 5. 9. 2026)
Úřad: https://www.openstreetmap.org/way/166913349
Fotbalové hřiště: https://www.openstreetmap.org/way/163805917
ZŠ: https://www.openstreetmap.org/node/13970694587
Kurty: https://www.openstreetmap.org/way/167297697
Termín voleb: https://mv.gov.cz/volby/clanek/volby-do-zastupitelstev-obci-a-senatu-2026.aspx
Leaflet 1.9.4: https://leafletjs.com (BSD-2-Clause, licence v assets/vendor/leaflet/LICENSE)

## K doplnění zadavatelem
Ověřený e-mail/telefon; vlastní doména; Přesná volební místnost je odkázána na oznámení obce. Historická datace fotografií převzata z původních dodaných názvů, autorství a publikační oprávnění eviduje zadavatel.

Mapové dlaždice se načítají z OpenStreetMap, písma z Google Fonts. Web nemá analytiku ani sledovací cookies.
