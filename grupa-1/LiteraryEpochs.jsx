import { useState, useEffect, useCallback } from "react";
import { epoki, pojecia, KOLOR_RACJONALIZM, KOLOR_IRRACJONALIZM } from "./epoki.js";
import "./LiteraryEpochs.css";

// ============================================================
// KOMPONENTY POMOCNICZE
// ============================================================

// Mała strzałka CSS (trójkąt) na górze lub dole ramki przejścia
function StrzalkaRamki({ pozycja, kolor, wypelnienie }) {
  const czyGora = pozycja === "gora";
  const kierunek = czyGora ? "borderBottom" : "borderTop";
  const pion = czyGora ? "top" : "bottom";

  return (
    <>
      <div style={{
        position: "absolute",
        [pion]: -6,
        left: "50%",
        transform: "translateX(-50%)",
        width: 0, height: 0,
        borderLeft: "6px solid transparent",
        borderRight: "6px solid transparent",
        [kierunek]: `6px solid ${kolor}`,
      }} />
      <div style={{
        position: "absolute",
        [pion]: -5,
        left: "50%",
        transform: "translateX(-50%)",
        width: 0, height: 0,
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

// Rozwinięta treść karty — opis, autorzy, pojęcia kluczowe
// onKliknijPojecie — callback wywoływany po kliknięciu pojęcia z definicją
function RozwinietaTresc({ epoka, onKliknijPojecie }) {
  return (
    <div className="rozwieta-tresc">

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
        <div className="rozwieta-tresc__etykieta">
          Pojęcia kluczowe — kliknij, aby przeczytać definicję
        </div>
        <div className="rozwieta-tresc__tagi">
          {epoka.keywords.map((pojecie) => {
            const maDef = !!pojecia[pojecie];
            return (
              <span
                key={pojecie}
                className={`tag-pojecie${maDef ? " tag-pojecie--klikalny" : ""}`}
                style={{
                  border: `1px solid ${epoka.color}50`,
                  color: epoka.color,
                  // Pojęcia bez definicji są lekko przezroczyste
                  opacity: maDef ? 1 : 0.6,
                }}
                onClick={maDef ? (e) => {
                  e.stopPropagation(); // Nie zwijaj karty przy kliknięciu pojęcia
                  onKliknijPojecie(pojecie, epoka.color);
                } : undefined}
                title={maDef ? `Kliknij, aby przeczytać definicję: ${pojecie}` : undefined}
              >
                {pojecie}
              </span>
            );
          })}
        </div>
      </div>

    </div>
  );
}

// Karta pojedynczej epoki
function KartaEpoki({ epoka, indeks, czyAktywna, onKlik, onKliknijPojecie }) {
  return (
    <div
      className="karta-epoki"
      onClick={onKlik}
      style={{
        background: czyAktywna ? epoka.bg : "#FFFDF8",
        border: `1.5px solid ${czyAktywna ? epoka.accent : "#DDD0B0"}`,
        borderTop: `3px solid ${epoka.color}`,
        boxShadow: czyAktywna
          ? "0 6px 30px rgba(0,0,0,0.12)"
          : "0 2px 12px rgba(0,0,0,0.06)",
        animation: `fadeIn 0.4s ${indeks * 0.04}s both`,
      }}
    >
      <div className="karta-epoki__wiersz">
        <div className="karta-epoki__lewa">

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

          <div>
            <div className="karta-epoki__typ" style={{ color: epoka.color }}>
              {epoka.type}
            </div>
            <div className="karta-epoki__nazwa">{epoka.name}</div>
            <div className="karta-epoki__okres">
              {epoka.period} &nbsp;·&nbsp; {epoka.duration}
            </div>
          </div>
        </div>

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

      {czyAktywna && (
        <RozwinietaTresc
          epoka={epoka}
          onKliknijPojecie={onKliknijPojecie}
        />
      )}
    </div>
  );
}

// Modal z definicją pojęcia
function ModalPojecia({ pojecie, kolor, onZamknij }) {
  const def = pojecia[pojecie];
  if (!def) return null;

  return (
    <div className="modal-overlay" onClick={onZamknij}>
      {/* stopPropagation zapobiega zamknięciu po kliknięciu wewnątrz modala */}
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal__zamknij" onClick={onZamknij}>✕</button>

        <div className="modal__epoka" style={{ color: kolor }}>
          {def.epoka}
        </div>
        <div className="modal__pojecie" style={{ color: kolor }}>
          {pojecie}
        </div>
        <div className="modal__separator" />
        <p className="modal__opis">{def.opis}</p>
      </div>
    </div>
  );
}

// ============================================================
// GŁÓWNY KOMPONENT
// ============================================================

export default function LiteraryEpochs() {
  const [aktywnaEpoka, setAktywnaEpoka] = useState(null);

  // Stan modala: null = zamknięty, obiekt = { pojecie, kolor }
  const [modal, setModal] = useState(null);

  // Zamknięcie modala klawiszem Escape
  const zamknijModal = useCallback(() => setModal(null), []);
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") zamknijModal();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [zamknijModal]);

  function przelaczEpoke(id) {
    setAktywnaEpoka((poprzednia) => (poprzednia === id ? null : id));
  }

  function otworzModal(pojecie, kolor) {
    setModal({ pojecie, kolor });
  }

  return (
    <div className="strona">

      {/* ── NAGŁÓWEK ── */}
      <header className="naglowek">
        <div className="naglowek__podtytul">Polska historia literatury</div>
        <h1 className="naglowek__h1">Epoki Literackie</h1>
        <p className="naglowek__opis">Od Antyku do współczesności — pionowa oś przemian</p>

        <div className="legenda">
          {[
            { kolor: KOLOR_RACJONALIZM,   etykieta: "Epoki racjonalistyczne" },
            { kolor: KOLOR_IRRACJONALIZM, etykieta: "Epoki irracjonalistyczne" },
          ].map(({ kolor, etykieta }) => (
            <div key={etykieta} className="legenda__element">
              <div
                className="legenda__kwadrat"
                style={{ background: kolor.bg, border: `2px solid ${kolor.color}` }}
              />
              <span className="legenda__etykieta">{etykieta}</span>
            </div>
          ))}
        </div>
      </header>

      {/* ── OŚ CZASU ── */}
      <main className="os-czasu">
        <div className="os-czasu__linia" />

        {epoki.map((epoka, indeks) => (
          <div key={epoka.id} className="os-czasu__epoka">
            <div className="os-czasu__karta-wrapper">
              <KartaEpoki
                epoka={epoka}
                indeks={indeks}
                czyAktywna={aktywnaEpoka === epoka.id}
                onKlik={() => przelaczEpoke(epoka.id)}
                onKliknijPojecie={otworzModal}
              />
            </div>

            {indeks < epoki.length - 1 && (
              <PrzejscieEpok epoka={epoka} />
            )}
          </div>
        ))}

        <div className="koniec-osi">
          <div className="koniec-osi__kreska" />
          <div className="koniec-osi__grodek" />
        </div>
      </main>

      {/* ── MODAL POJĘCIA ── */}
      {modal && (
        <ModalPojecia
          pojecie={modal.pojecie}
          kolor={modal.kolor}
          onZamknij={zamknijModal}
        />
      )}

    </div>
  );
}
