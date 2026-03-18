import { useState } from "react";
import { epoki, KOLOR_RACJONALIZM, KOLOR_IRRACJONALIZM } from "./epoki.js";
import "./LiteraryEpochs.css";

// ============================================================
// KOMPONENTY POMOCNICZE
// ============================================================

// Mała strzałka CSS (trójkąt) na górze lub dole ramki przejścia.
// Składa się z dwóch trójkątów — większy to obramowanie, mniejszy wypełnia środek.
function StrzalkaRamki({ pozycja, kolor, wypelnienie }) {
  const czyGora = pozycja === "gora";
  const kierunek = czyGora ? "borderBottom" : "borderTop";
  const pion = czyGora ? "top" : "bottom";

  return (
    <>
      {/* Obramowanie strzałki */}
      <div style={{
        position: "absolute",
        [pion]: -6,
        left: "50%",
        transform: "translateX(-50%)",
        width: 0,
        height: 0,
        borderLeft: "6px solid transparent",
        borderRight: "6px solid transparent",
        [kierunek]: `6px solid ${kolor}`,
      }} />

      {/* Wypełnienie strzałki (nakłada się na obramowanie) */}
      <div style={{
        position: "absolute",
        [pion]: -5,
        left: "50%",
        transform: "translateX(-50%)",
        width: 0,
        height: 0,
        borderLeft: "5px solid transparent",
        borderRight: "5px solid transparent",
        [kierunek]: `5px solid ${wypelnienie}`,
      }} />
    </>
  );
}

// Ramka z opisem przełomu historycznego między epokami
function PrzejscieEpok({ epoka }) {
  return (
    <div className="przejscie">
      <div className="przejscie__kreska" />

      <div className="przejscie__ramka">
        <StrzalkaRamki pozycja="gora" kolor="#DDD0B0" wypelnienie="#FFFDF8" />

        <div className="przejscie__tytul">{epoka.shift}</div>

        {epoka.shiftNote && (
          <div className="przejscie__notatka">{epoka.shiftNote}</div>
        )}

        <StrzalkaRamki pozycja="dol" kolor="#DDD0B0" wypelnienie="#FFFDF8" />
      </div>

      <div className="przejscie__kreska" />
      <div className="przejscie__grot" />
    </div>
  );
}

// Rozwinięta treść karty: opis, lista autorów, pojęcia kluczowe
function RozwinietaTresc({ epoka }) {
  return (
    <div className="rozwieta-tresc">

      {/* Separator — kolor zależy od epoki, więc musi być inline */}
      <div
        className="rozwieta-tresc__separator"
        style={{ background: `${epoka.color}30` }}
      />

      <p className="rozwieta-tresc__opis">{epoka.description}</p>

      {/* Autorzy */}
      <div className="rozwieta-tresc__sekcja">
        <div className="rozwieta-tresc__etykieta">Twórcy</div>
        <div className="rozwieta-tresc__tagi">
          {epoka.authors.map((autor) => (
            <span
              key={autor}
              className="tag-autor"
              style={{
                background: `${epoka.color}0D`,
                border: `1px solid ${epoka.color}35`,
                color: epoka.color,
              }}
            >
              {autor}
            </span>
          ))}
        </div>
      </div>

      {/* Pojęcia kluczowe */}
      <div>
        <div className="rozwieta-tresc__etykieta">Pojęcia kluczowe</div>
        <div className="rozwieta-tresc__tagi">
          {epoka.keywords.map((pojecie) => (
            <span
              key={pojecie}
              className="tag-pojecie"
              style={{
                border: `1px solid ${epoka.color}50`,
                color: epoka.color,
              }}
            >
              {pojecie}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}

// Karta pojedynczej epoki — zwija się i rozija po kliknięciu
function KartaEpoki({ epoka, indeks, czyAktywna, onKlik }) {
  return (
    <div
      className="karta-epoki"
      onClick={onKlik}
      style={{
        // Tło i obramowanie zmieniają się dynamicznie — muszą być inline
        background: czyAktywna ? epoka.bg : "#FFFDF8",
        border: `1.5px solid ${czyAktywna ? epoka.accent : "#DDD0B0"}`,
        borderTop: `3px solid ${epoka.color}`,
        boxShadow: czyAktywna
          ? "0 6px 30px rgba(0,0,0,0.12)"
          : "0 2px 12px rgba(0,0,0,0.06)",
        animation: `fadeIn 0.4s ${indeks * 0.04}s both`,
      }}
    >
      {/* Górny wiersz: ikona + metadane + przycisk */}
      <div className="karta-epoki__wiersz">

        {/* Lewa strona */}
        <div className="karta-epoki__lewa">

          {/* Ikona epoki */}
          <div
            className="karta-epoki__ikona"
            style={{
              background: czyAktywna ? epoka.color : "#F0E8D4",
              border: `2px solid ${czyAktywna ? epoka.color : "#DDD0B0"}`,
              color: czyAktywna ? "#fff" : epoka.color,
            }}
          >
            {epoka.icon}
          </div>

          {/* Typ, nazwa i okres */}
          <div>
            <div
              className="karta-epoki__typ"
              style={{ color: epoka.color }}
            >
              {epoka.type}
            </div>
            <div className="karta-epoki__nazwa">
              {epoka.name}
            </div>
            <div className="karta-epoki__okres">
              {epoka.period} &nbsp;·&nbsp; {epoka.duration}
            </div>
          </div>
        </div>

        {/* Przycisk rozwijania */}
        <div
          className="karta-epoki__przycisk"
          style={{
            border: `1.5px solid ${czyAktywna ? epoka.color : "#C8B898"}`,
            background: czyAktywna ? epoka.color : "transparent",
            color: czyAktywna ? "#fff" : epoka.color,
            transform: czyAktywna ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          ↓
        </div>
      </div>

      {/* Rozwinięta treść — widoczna tylko gdy karta jest aktywna */}
      {czyAktywna && <RozwinietaTresc epoka={epoka} />}
    </div>
  );
}

// ============================================================
// GŁÓWNY KOMPONENT
// ============================================================

export default function LiteraryEpochs() {
  const [aktywnaEpoka, setAktywnaEpoka] = useState(null);

  // Kliknięcie aktywnej karty zamyka ją, kliknięcie innej otwiera ją
  function przelaczEpoke(id) {
    setAktywnaEpoka((poprzednia) => (poprzednia === id ? null : id));
  }

  return (
    <div className="strona">

      {/* ── NAGŁÓWEK ── */}
      <header className="naglowek">
        <div className="naglowek__podtytul">Polska historia literatury</div>
        <h1 className="naglowek__h1">Epoki Literackie</h1>
        <p className="naglowek__opis">Od Antyku do współczesności — pionowa oś przemian</p>

        {/* Legenda kolorów */}
        <div className="legenda">
          {[
            { kolor: KOLOR_RACJONALIZM,   etykieta: "Epoki racjonalistyczne" },
            { kolor: KOLOR_IRRACJONALIZM, etykieta: "Epoki irracjonalistyczne" },
          ].map(({ kolor, etykieta }) => (
            <div key={etykieta} className="legenda__element">
              <div
                className="legenda__kwadrat"
                style={{
                  background: kolor.bg,
                  border: `2px solid ${kolor.color}`,
                }}
              />
              <span className="legenda__etykieta">{etykieta}</span>
            </div>
          ))}
        </div>
      </header>

      {/* ── OŚ CZASU ── */}
      <main className="os-czasu">

        {/* Pionowa linia w tle */}
        <div className="os-czasu__linia" />

        {/* Karty epok */}
        {epoki.map((epoka, indeks) => (
          <div key={epoka.id} className="os-czasu__epoka">

            <div className="os-czasu__karta-wrapper">
              <KartaEpoki
                epoka={epoka}
                indeks={indeks}
                czyAktywna={aktywnaEpoka === epoka.id}
                onKlik={() => przelaczEpoke(epoka.id)}
              />
            </div>

            {/* Przejście do następnej epoki — nie renderuj po ostatniej */}
            {indeks < epoki.length - 1 && (
              <PrzejscieEpok epoka={epoka} />
            )}

          </div>
        ))}

        {/* Punkt końcowy osi */}
        <div className="koniec-osi">
          <div className="koniec-osi__kreska" />
          <div className="koniec-osi__grodek" />
        </div>

      </main>
    </div>
  );
}
