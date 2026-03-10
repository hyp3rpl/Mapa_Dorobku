import { useState } from "react";

const epochs = [
  {
    id: "antyk", name: "Antyk",
    period: "IX w.p.n.e. – 476 r. n.e.", duration: "ok. 1300 lat",
    type: "racjonalistyczna",
    color: "#8B5E0A", bg: "#FEF7E8", accent: "#D4900F",
    icon: "☉",
    shift: "Upadek Cesarstwa Zachodniorzymskiego",
    shiftNote: "chaos i teocentryzm zastąpiły antyczny porządek",
    description: "Epoka starożytna to fundament całej kultury europejskiej. Grecja stworzyła filozofię, teatr, demokrację i kanony piękna — Rzym przejął i rozprzestrzenił te wzorce na cały kontynent. W literaturze dominowały eposy Homera (Iliada, Odyseja), tragedie Sofoklesa i Ajschylosa, liryka Safony i Horacego. Filozofia Platona i Arystotelesa kształtuje myśl zachodnią do dziś. Ideał kalokagathii — piękna i dobra w jedności — wyznaczał wzorzec człowieczeństwa.",
    keywords: ["Logos", "Kalokagathia", "Arete", "Mimesis", "Katharsis", "Carpe diem"],
    authors: ["Homer", "Sofokles", "Platon", "Wergiliusz", "Horacy", "Owidiusz"],
  },
  {
    id: "sredniowiecze", name: "Średniowiecze",
    period: "476 – XV/XVI w.", duration: "Europa: ~1100 lat · Polska: ~500 lat",
    type: "irracjonalistyczna",
    color: "#1E3A6E", bg: "#EEF3FB", accent: "#2E5FA8",
    icon: "✝",
    shift: "Renesans włoski, odkrycia geograficzne, druk Gutenberga",
    shiftNote: "człowiek na nowo odkrywa samego siebie",
    description: "Epoka zdominowana przez teocentryzm — Bóg stał w centrum wszelkiej refleksji i twórczości. Kościół był jedyną instytucją scalającą Europę po upadku Cesarstwa. Literatura miała charakter anonimowy i służebny wobec religii: kroniki, hagiografie, pieśni maryjne. W Polsce: Bogurodzica, Kronika Galla Anonima, Kazania świętokrzyskie. Dante Alighieri Boską Komedią stworzył syntezę średniowiecznego myślenia o zaświatach.",
    keywords: ["Teocentryzm", "Danse macabre", "Scholastyka", "Asceza", "Memento mori", "Anonimowość"],
    authors: ["Gall Anonim", "Wincenty Kadłubek", "Dante Alighieri", "François Villon", "Jan Długosz"],
  },
  {
    id: "renesans", name: "Renesans",
    period: "XV – koniec XVI w.", duration: "Europa: ~100 lat · Polska: ~150 lat",
    type: "racjonalistyczna",
    color: "#8B5E0A", bg: "#FEF7E8", accent: "#D4900F",
    icon: "⊙",
    shift: "Reformacja Lutra, kryzysy religijne, wojny wyznaniowe",
    shiftNote: "zwątpienie, przepych i vanitas zastąpiły renesansowy optymizm",
    description: "Odrodzenie przyniosło radykalne odwrócenie perspektywy — z teocentryzmu ku antropocentryzmowi. Człowiek stał się miarą wszechrzeczy. W Polsce złoty wiek literatury: Jan Kochanowski stworzył arcydzieła (Fraszki, Treny, Pieśni), Mikołaj Rej jako pierwszy pisał po polsku z dumą. Humanizm, carpe diem i stoicka zgoda na los przenikały wszystkie dziedziny sztuki. Erazm z Rotterdamu sławił mądrość, Szekspir dał literaturze najdoskonalsze dramaty wszech czasów.",
    keywords: ["Humanizm", "Carpe diem", "Antropocentryzm", "Horacjanizm", "Reformacja", "Fortuna"],
    authors: ["Jan Kochanowski", "Mikołaj Rej", "A. Frycz Modrzewski", "Szekspir", "Erazm z Rotterdamu"],
  },
  {
    id: "barok", name: "Barok",
    period: "koniec XVI – koniec XVII w.", duration: "ok. 150 lat",
    type: "irracjonalistyczna",
    color: "#1E3A6E", bg: "#EEF3FB", accent: "#2E5FA8",
    icon: "☽",
    shift: "Rewolucja naukowa, filozofia Locke'a i Newtona",
    shiftNote: "rozum i nauka zwyciężają nad dogmatem i emocją",
    description: "Epoka paradoksów i kontrastów — między przepychem a nicością, wiarą a zwątpieniem. Vanitas vanitatum — wszystko jest marnością. Kontrreformacja przywróciła potęgę Kościoła, lecz religijność stała się pełna dramatyzmu. W Polsce: Jan Andrzej Morsztyn (mistrz konceptu), Wacław Potocki (Transakcja wojny chocimskiej), Daniel Naborowski. Sarmatyzm kształtował polską szlachecką tożsamość.",
    keywords: ["Vanitas", "Theatrum mundi", "Koncept", "Kontrreformacja", "Sarmatyzm", "Marinizm"],
    authors: ["Jan Andrzej Morsztyn", "Wacław Potocki", "Daniel Naborowski", "Calderon", "Molier"],
  },
  {
    id: "oswiecenie", name: "Oświecenie",
    period: "koniec XVII – koniec XVIII w.", duration: "Europa: ~80 lat · Polska: ~60 lat",
    type: "racjonalistyczna",
    color: "#8B5E0A", bg: "#FEF7E8", accent: "#D4900F",
    icon: "△",
    shift: "Rewolucja Francuska, rozbiory Polski, romantyczne przebudzenie narodów",
    shiftNote: "uczucie i naród zastępują rozum i kosmopolityzm",
    description: "Wiek rozumu, encyklopedystów i rewolucji. Wolter, Rousseau, Monteskiusz kwestionowali autorytet Kościoła i gloryfikowali naukę. W Polsce czasy stanisławowskie: Teatr Narodowy, reformy Kołłątaja. Ignacy Krasicki pisał zjadliwe satyry i bajki. Konstytucja 3 Maja (1791) — najpiękniejszy owoc oświeceniowych idei — i początkiem końca niepodległości.",
    keywords: ["Ratio", "Empiryzm", "Deizm", "Encyklopedyzm", "Klasycyzm", "Utylitaryzm"],
    authors: ["Ignacy Krasicki", "Julian U. Niemcewicz", "Stanisław Staszic", "Wolter", "Jean-Jacques Rousseau"],
  },
  {
    id: "romantyzm", name: "Romantyzm",
    period: "koniec XVIII – poł. XIX w.", duration: "Europa: ~70 lat · Polska: 1822–1863",
    type: "irracjonalistyczna",
    color: "#1E3A6E", bg: "#EEF3FB", accent: "#2E5FA8",
    icon: "★",
    shift: "Klęska Powstania Styczniowego (1863)",
    shiftNote: "zrywy zbrojne zastąpiono pracą organiczną i scjentyzmem",
    description: "Bunt przeciwko rozumowi — romantyzm gloryfikował uczucie, wyobraźnię i wolność. W Polsce epoka mesjanizmu: trzej wieszcze — Mickiewicz, Słowacki, Krasiński — stali się duchowymi przywódcami narodu pod zaborami. Dziady, Kordian i Nie-Boska komedia to arcydzieła niezrównanej siły. Norwid wyprzedził epokę o sto lat. Romantyczny bajroniczny bohater to indywidualista w konflikcie z losem i historią.",
    keywords: ["Mesjanizm", "Irracjonalizm", "Prometeizm", "Werteryzm", "Ludowość", "Walka za wolność"],
    authors: ["Adam Mickiewicz", "Juliusz Słowacki", "Zygmunt Krasiński", "Cyprian K. Norwid", "George Byron"],
  },
  {
    id: "pozytywizm", name: "Pozytywizm",
    period: "ok. 1850–1900", duration: "Europa: ~50 lat · Polska: 1864–1890",
    type: "racjonalistyczna",
    color: "#8B5E0A", bg: "#FEF7E8", accent: "#D4900F",
    icon: "⊞",
    shift: "Kryzys wiary w postęp, dekadentyzm fin de siècle",
    shiftNote: "sztuka dla sztuki zastępuje sztukę użyteczną",
    description: "Po klęsce powstania styczniowego pozytywiści odrzucili zbrojne zrywy na rzecz pracy organicznej i pracy u podstaw. Hasła: emancypacja kobiet, edukacja ludu, solidaryzm społeczny. Bolesław Prus (Lalka, Faraon), Eliza Orzeszkowa (Nad Niemnem), Henryk Sienkiewicz (Trylogia, Quo vadis — Nobel 1905) stworzyli wielką powieść realistyczną.",
    keywords: ["Praca organiczna", "Scjentyzm", "Realizm", "Utylitaryzm", "Emancypacja", "Ewolucjonizm"],
    authors: ["Bolesław Prus", "Eliza Orzeszkowa", "H. Sienkiewicz", "Maria Konopnicka", "A. Dygasiński"],
  },
  {
    id: "mlodapolska", name: "Młoda Polska",
    period: "ok. 1890–1918", duration: "Polska: 1891–1918 (~30 lat)",
    type: "irracjonalistyczna",
    color: "#1E3A6E", bg: "#EEF3FB", accent: "#2E5FA8",
    icon: "❋",
    shift: "I Wojna Światowa, odzyskanie niepodległości (1918)",
    shiftNote: "wolna Polska rodzi nową, entuzjastyczną literaturę",
    description: "Fin de siècle przyniósł dekadentyzm i kryzys wartości. Młodopolanie odrzucili kult nauki na rzecz hasła sztuka dla sztuki. Wyspiański w Weselu rozrachował się z polskim charakterem narodowym. Żeromski piętnował niesprawiedliwość, Reymont uwiecznił wieś polską w Chłopach (Nobel 1924). Tetmajer opiewał Tatry, Staff szukał siły witalnej. Secesja, symbolizm i impresjonizm zdominowały estetykę.",
    keywords: ["Dekadentyzm", "Symbolizm", "Fin de siècle", "L'art pour l'art", "Secesja", "Nietzscheanizm"],
    authors: ["Stanisław Wyspiański", "K. Przerwa-Tetmajer", "Leopold Staff", "Stefan Żeromski", "W. Reymont"],
  },
  {
    id: "miedzywojenne", name: "20-lecie międzywojenne",
    period: "1918–1939", duration: "ok. 20 lat",
    type: "racjonalistyczna",
    color: "#8B5E0A", bg: "#FEF7E8", accent: "#D4900F",
    icon: "◈",
    shift: "II Wojna Światowa, Holocaust, totalitaryzmy",
    shiftNote: "literatura staje się świadectwem i oskarżeniem",
    description: "Niepodległa Polska po 123 latach zaborów — eksplozja kulturalna. Skamandryci (Tuwim, Lechoń, Wierzyński) postawili na radość życia. Bruno Schulz w Sklepach cynamonowych stworzył poetykę mitologizacji prowincji; Gombrowicz w Ferdydurke badał formę i niedojrzałość; Leśmian budował oniryczny świat neologizmów. Katastrofizm (Witkacy, Miłosz) przepowiadał nadchodzącą zagładę — trafnie.",
    keywords: ["Awangarda", "Skamander", "Futuryzm", "Katastrofizm", "Ekspresjonizm", "Surrealizm"],
    authors: ["Julian Tuwim", "Bruno Schulz", "Witold Gombrowicz", "Bolesław Leśmian", "Witkacy"],
  },
  {
    id: "wwii", name: "Literatura II Wojny Światowej",
    period: "1939–1945", duration: "6 lat",
    type: "irracjonalistyczna",
    color: "#1E3A6E", bg: "#EEF3FB", accent: "#2E5FA8",
    icon: "◌",
    shift: "Koniec wojny, system komunistyczny w Polsce",
    shiftNote: "literatura walczy z cenzurą i totalitaryzmem",
    description: "Druga wojna światowa stworzyła literaturę o skali cierpienia nieznanej w historii. Baczyński zginął w Powstaniu Warszawskim mając 23 lata. Borowski w Proszę państwa do gazu dał wstrząsające świadectwo Auschwitz — pisane zimnym stylem, co czyni je jeszcze straszliwszym. Herling-Grudziński opisał łagry w Innym świecie. Nałkowska w Medalionach zapisała relacje ocalałych.",
    keywords: ["Pokolenie Kolumbów", "Holokaust", "Świadectwo", "Lagrowa proza", "Apokalipsa", "Konspiracja"],
    authors: ["K.K. Baczyński", "Tadeusz Borowski", "G. Herling-Grudziński", "Zofia Nałkowska", "Cz. Miłosz"],
  },
  {
    id: "prl", name: "Literatura PRL",
    period: "1945–1989", duration: "ok. 44 lata",
    type: "irracjonalistyczna",
    color: "#1E3A6E", bg: "#EEF3FB", accent: "#2E5FA8",
    icon: "⊘",
    shift: "Upadek komunizmu, transformacja ustrojowa 1989",
    shiftNote: "pluralizm i wolność słowa otwierają nową epokę",
    description: "Powojenna literatura rozwijała się pod komunistyczną cenzurą i socrealistyczną doktryną. Mimo represji powstawały arcydzieła: Herbert w wierszach o Panu Cogito stawiał opór złu przez godność; Mrożek w Tangu i Emigrantach demaskował absurdy systemu; Białoszewski rewolucjonizował język codzienności w Pamiętniku z Powstania Warszawskiego. Szymborska obserwowała świat z filozoficzną ironią. Miłosz w Zniewolonym umyśle analizował mechanizm totalitaryzmu (Nobel 1980).",
    keywords: ["Socrealizm", "Cenzura", "Emigracja", "Ezopowy język", "Nowa Fala", "Opór"],
    authors: ["Zbigniew Herbert", "Wisława Szymborska", "Sławomir Mrożek", "Tadeusz Różewicz", "M. Białoszewski"],
  },
  {
    id: "wspolczesna", name: "Literatura współczesna",
    period: "1989 – dziś", duration: "trwa",
    type: "racjonalistyczna",
    color: "#8B5E0A", bg: "#FEF7E8", accent: "#D4900F",
    icon: "◎",
    shift: null, shiftNote: null,
    description: "Po 1989 roku polska literatura weszła w epokę pluralizmu — bez cenzury, z wolnym rynkiem idei. Olga Tokarczuk w Biegunach i Księgach Jakubowych stworzyła epicki świat podróży i tożsamości (Nobel 2018 — drugi noblista w 22 lata po Szymborskiej). Dorota Masłowska Wojną polsko-ruską wkroczyła brawurowo głosem ulicy. Jacek Dukaj uprawia spekulatywną science-fiction najwyższej próby. Twórczość Tokarczuk, Stasiuka i Myśliwskiego podbija świat w przekładach.",
    keywords: ["Postmodernizm", "Nobel", "Feminizm", "Ekokrytyka", "Tożsamość", "Globalizacja"],
    authors: ["Olga Tokarczuk", "Wisława Szymborska", "Andrzej Stasiuk", "Jacek Dukaj", "Dorota Masłowska"],
  },
];

export default function LiteraryEpochs() {
  const [active, setActive] = useState(null);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#F5EFE2",
      fontFamily: "Georgia, serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); max-height: 0; }
          to   { opacity: 1; transform: translateY(0);  max-height: 1000px; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .epoch-card {
          cursor: pointer;
          transition: box-shadow 0.22s ease, transform 0.18s ease, border-color 0.2s;
        }
        .epoch-card:hover {
          transform: translateY(-3px) scale(1.01);
          box-shadow: 0 10px 36px rgba(0,0,0,0.13) !important;
        }

        .arrow-btn {
          transition: background 0.18s, transform 0.15s;
        }
        .arrow-btn:hover {
          transform: scale(1.08);
        }
      `}</style>

      {/* ── HEADER ── */}
      <header style={{
        textAlign: "center",
        padding: "56px 24px 32px",
        background: "linear-gradient(180deg,#EDE0C4 0%,#F5EFE2 100%)",
        borderBottom: "1px solid #DDD0B0",
      }}>
        <div style={{
          fontSize: "10px", letterSpacing: "0.6em", color: "#A07840",
          textTransform: "uppercase", fontFamily: "'Crimson Text',serif", marginBottom: "12px",
        }}>
          Polska historia literatury
        </div>
        <h1 style={{
          fontFamily: "'Playfair Display',serif",
          fontSize: "clamp(28px,5vw,54px)", fontWeight: 900,
          color: "#1A1208", letterSpacing: "0.02em", lineHeight: 1.1,
        }}>
          Epoki Literackie
        </h1>
        <p style={{
          fontFamily: "'Crimson Text',serif", fontStyle: "italic",
          color: "#9A8660", marginTop: "10px", fontSize: "16px", letterSpacing: "0.05em",
        }}>
          Od Antyku do współczesności — pionowa oś przemian
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "28px", marginTop: "24px", flexWrap: "wrap" }}>
          {[["#8B5E0A","#FEF7E8","Epoki racjonalistyczne"], ["#1E3A6E","#EEF3FB","Epoki irracjonalistyczne"]].map(([c,bg,l]) => (
            <div key={l} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ width: 12, height: 12, background: bg, border: `2px solid ${c}`, borderRadius: 2 }} />
              <span style={{ fontSize: "12px", color: "#6A5A38", fontFamily: "'Crimson Text',serif", letterSpacing: "0.07em" }}>{l}</span>
            </div>
          ))}
        </div>
      </header>

      {/* ── TIMELINE ── */}
      <main style={{ maxWidth: "700px", margin: "0 auto", padding: "52px 20px 100px", position: "relative" }}>

        {/* Thin vertical rail */}
        <div style={{
          position: "absolute", left: "50%", top: 0, bottom: 0,
          width: "1px",
          background: "linear-gradient(to bottom, transparent, #C8B898 6%, #C8B898 94%, transparent)",
          transform: "translateX(-50%)",
          zIndex: 0,
          pointerEvents: "none",
        }} />

        {epochs.map((ep, i) => {
          const isActive = active === ep.id;

          return (
            <div key={ep.id} style={{ position: "relative", zIndex: 1 }}>

              {/* ── EPOCH CARD ── */}
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "0" }}>
                <div
                  className="epoch-card"
                  onClick={() => setActive(isActive ? null : ep.id)}
                  style={{
                    width: "100%",
                    background: isActive ? ep.bg : "#FFFDF8",
                    border: `1.5px solid ${isActive ? ep.accent : "#DDD0B0"}`,
                    borderTop: `3px solid ${ep.color}`,
                    borderRadius: "4px",
                    padding: "20px 24px 18px",
                    boxShadow: isActive
                      ? `0 6px 30px rgba(0,0,0,0.12)`
                      : "0 2px 12px rgba(0,0,0,0.06)",
                    userSelect: "none",
                    animation: `fadeIn 0.4s ${i * 0.04}s both`,
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px" }}>
                    <div style={{ display: "flex", gap: "14px", alignItems: "flex-start", flex: 1 }}>
                      {/* Icon */}
                      <div style={{
                        width: 40, height: 40, flexShrink: 0,
                        borderRadius: "50%",
                        background: isActive ? ep.color : "#F0E8D4",
                        border: `2px solid ${isActive ? ep.color : "#DDD0B0"}`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "16px", color: isActive ? "#fff" : ep.color,
                        transition: "all 0.22s",
                        fontFamily: "serif",
                      }}>
                        {ep.icon}
                      </div>
                      <div>
                        <div style={{
                          fontSize: "9px", letterSpacing: "0.45em", color: ep.color,
                          textTransform: "uppercase", fontFamily: "'Crimson Text',serif", marginBottom: "2px",
                        }}>
                          {ep.type}
                        </div>
                        <div style={{
                          fontFamily: "'Playfair Display',serif",
                          fontSize: "clamp(16px,2.2vw,22px)", fontWeight: 700,
                          color: "#1A1208", letterSpacing: "0.01em",
                        }}>
                          {ep.name}
                        </div>
                        <div style={{
                          fontFamily: "'Crimson Text',serif", fontSize: "13px",
                          color: "#9A8660", marginTop: "2px", fontStyle: "italic",
                        }}>
                          {ep.period} &nbsp;·&nbsp; {ep.duration}
                        </div>
                      </div>
                    </div>

                    {/* Toggle button */}
                    <div className="arrow-btn" style={{
                      flexShrink: 0, width: 28, height: 28,
                      borderRadius: "50%",
                      border: `1.5px solid ${isActive ? ep.color : "#C8B898"}`,
                      background: isActive ? ep.color : "transparent",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: isActive ? "#fff" : ep.color,
                      fontSize: "14px", lineHeight: 1,
                      transform: isActive ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "all 0.22s ease",
                      cursor: "pointer",
                      userSelect: "none",
                    }}>
                      ↓
                    </div>
                  </div>

                  {/* Expanded content */}
                  {isActive && (
                    <div style={{ animation: "slideDown 0.3s ease both", overflow: "hidden" }}>
                      <div style={{ height: 1, background: `${ep.color}30`, margin: "16px 0" }} />

                      <p style={{
                        fontFamily: "'Crimson Text',serif", fontSize: "15px",
                        lineHeight: 1.88, color: "#3A2E14", marginBottom: "18px",
                      }}>
                        {ep.description}
                      </p>

                      {/* Authors */}
                      <div style={{ marginBottom: "14px" }}>
                        <div style={{ fontSize: "8.5px", letterSpacing: "0.45em", color: "#A09070", textTransform: "uppercase", marginBottom: "8px" }}>Twórcy</div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                          {ep.authors.map(a => (
                            <span key={a} style={{
                              padding: "3px 11px",
                              background: `${ep.color}0D`,
                              border: `1px solid ${ep.color}35`,
                              borderRadius: "2px", fontSize: "12.5px",
                              color: ep.color, fontFamily: "'Crimson Text',serif",
                              fontStyle: "italic", letterSpacing: "0.04em",
                            }}>{a}</span>
                          ))}
                        </div>
                      </div>

                      {/* Keywords */}
                      <div>
                        <div style={{ fontSize: "8.5px", letterSpacing: "0.45em", color: "#A09070", textTransform: "uppercase", marginBottom: "8px" }}>Pojęcia kluczowe</div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                          {ep.keywords.map(k => (
                            <span key={k} style={{
                              padding: "3px 10px",
                              border: `1px solid ${ep.color}50`,
                              borderRadius: "20px", fontSize: "11.5px",
                              color: ep.color, fontFamily: "'Crimson Text',serif",
                              letterSpacing: "0.08em", background: "rgba(255,255,255,0.65)",
                            }}>{k}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* ── ARROW TRANSITION ── */}
              {i < epochs.length - 1 && (
                <div style={{
                  display: "flex", flexDirection: "column",
                  alignItems: "center", padding: "12px 0 10px",
                  position: "relative", zIndex: 2,
                }}>
                  {/* Arrow shaft */}
                  <div style={{
                    width: 1,
                    height: 14,
                    background: "#C8B898",
                  }} />

                  {/* Transition box */}
                  <div style={{
                    background: "#FFFDF8",
                    border: "1px solid #DDD0B0",
                    borderRadius: "3px",
                    padding: "7px 16px",
                    textAlign: "center",
                    maxWidth: "340px",
                    position: "relative",
                  }}>
                    {/* Top arrow tip into box */}
                    <div style={{
                      position: "absolute", top: -6, left: "50%",
                      transform: "translateX(-50%)",
                      width: 0, height: 0,
                      borderLeft: "6px solid transparent",
                      borderRight: "6px solid transparent",
                      borderBottom: "6px solid #DDD0B0",
                    }} />
                    <div style={{
                      position: "absolute", top: -5, left: "50%",
                      transform: "translateX(-50%)",
                      width: 0, height: 0,
                      borderLeft: "5px solid transparent",
                      borderRight: "5px solid transparent",
                      borderBottom: "5px solid #FFFDF8",
                    }} />

                    <div style={{
                      fontSize: "10.5px", color: "#6A5A38",
                      fontFamily: "'Crimson Text',serif", fontWeight: 600,
                      letterSpacing: "0.04em", lineHeight: 1.4,
                    }}>
                      {epochs[i].shift}
                    </div>
                    {epochs[i].shiftNote && (
                      <div style={{
                        fontSize: "10px", color: "#A09070",
                        fontFamily: "'Crimson Text',serif", fontStyle: "italic",
                        marginTop: "2px", letterSpacing: "0.02em",
                      }}>
                        {epochs[i].shiftNote}
                      </div>
                    )}

                    {/* Bottom arrow tip out of box */}
                    <div style={{
                      position: "absolute", bottom: -6, left: "50%",
                      transform: "translateX(-50%)",
                      width: 0, height: 0,
                      borderLeft: "6px solid transparent",
                      borderRight: "6px solid transparent",
                      borderTop: "6px solid #DDD0B0",
                    }} />
                    <div style={{
                      position: "absolute", bottom: -5, left: "50%",
                      transform: "translateX(-50%)",
                      width: 0, height: 0,
                      borderLeft: "5px solid transparent",
                      borderRight: "5px solid transparent",
                      borderTop: "5px solid #FFFDF8",
                    }} />
                  </div>

                  {/* Arrow shaft below */}
                  <div style={{ width: 1, height: 14, background: "#C8B898" }} />

                  {/* Arrowhead pointing down */}
                  <div style={{
                    width: 0, height: 0,
                    borderLeft: "7px solid transparent",
                    borderRight: "7px solid transparent",
                    borderTop: `9px solid #C8B898`,
                  }} />
                </div>
              )}

            </div>
          );
        })}

        {/* End marker */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "8px" }}>
          <div style={{ width: 1, height: 16, background: "#C8B898" }} />
          <div style={{
            width: 10, height: 10, borderRadius: "50%",
            background: "#C8B898", border: "2px solid #F5EFE2",
            boxShadow: "0 0 0 2px #C8B898",
          }} />
        </div>

      </main>
    </div>
  );
}
