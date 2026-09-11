# LETONICE SPOLEČNĚ · web 2026

Aktualizace 11. září 2026. Statický web bez formuláře a bez ukládání osobních údajů.

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
- Mapa přes celou šířku sekce Program. Barevné body programu: 1 hnědá (obecní úřad), 2 červená (spolky: Orel/Orlovna, SDH/zbrojnice, TJ/hřiště, myslivci/chata, rybáři a lodní modeláři/Šmolesy, zahrádkáři, ČČK), 3 žlutá (ZŠ, MŠ), 5 fialová (plochy bydlení B1–B14 a B101 z územního plánu jako polygony), 6 modrá (areál koupaliště, obchodní dům, tři dětská hřiště), 7 zelená (NPR Větrníky s hranicí, náves, hřbitov).
- Všechna data mapy jsou v `assets/data/mapa-letonice.js` (`approx:true` = orientační poloha, značka má čárkovaný okraj). Polygony ploch bydlení jsou přeneseny z výkresů ÚP (koordinační výkres O3 1:2000 a hlavní výkres 1:5000), přesnost cca ±15 m.
- Podbody programu sjednoceny s grafikami 1, 2, 4, 5 a 7 z podkladů „VOLBY 2026“. Bod 6 zůstává podle programu v DOCX – grafika 6.png má omylem podbody bodu 5. Bod 3 nemá grafiku, zůstal podle DOCX. Rozvržení každého bodu 50 % text / 50 % obrázek; bod 5 má jako obrázek výřez z územního plánu (`assets/img/uzemni-plan-vyrez.jpg`).
- `program.html` a `assets/program.pdf` přegenerovány se stejnými podbody.

## Změny 11. 9. 2026 večer – hlavička
- Zrušeno zmenšování hlavičky po odscrollování (třída `.nav.compact` a její JS odstraněny). Logo je trvale 150 px (tablet 96 px, mobil 80 px) s vínovým a bílým prstencem a stínem, název vedle loga větší. `scroll-margin-top` kotev zvýšen na 180/120/104 px. Verze CSS/JS `?v=20260911c` (po upřesnění polohy hřiště v Mezírce).

## K ověření zadavatelem (orientační polohy)
- Dětská hřiště „na Nové“ a „za fotbalovým hřištěm“ – web obce uvádí hřiště v ulicích Nová, U Zbrojnice a 9. května; přesné souřadnice upravte v `assets/data/mapa-letonice.js` (pole `lat`, `lon`, poté smazat `approx: true`). Hřiště „v Mezírce“ je od 11. 9. 2026 umístěno přesně: střed pěšiny mezi domy č. 610 a 440 (OSM way 170697300, spojuje Novou a 9. května) podle upřesnění zadavatele.
- Zahrádkáři a Český červený kříž nemají veřejně uvedenou vlastní budovu, značky jsou u obecního domu.
- Plocha bydlení B5 nebyla ve výkresech ÚP nalezena (ve výřezu ani v hlavním výkrese).

## Spuštění
`npm run dev` – náhled na http://127.0.0.1:8080
`npm run build` – kontrola obou stránek, odkazů, kotev a syntaxe JS; vytvoření veřejného výstupu dist.

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
Ověřený e-mail/telefon; vlastní doména; fotografie kandidáta č. 12 (Jaroslav Lučan). Přesná volební místnost je odkázána na oznámení obce. Historická datace fotografií převzata z původních dodaných názvů, autorství a publikační oprávnění eviduje zadavatel.

Mapové dlaždice se načítají z OpenStreetMap, písma z Google Fonts. Web nemá analytiku ani sledovací cookies.
