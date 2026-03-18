import React, { useState, useEffect, useRef } from 'react';
import './Asyn.css';

const DATA = {
    sre: { 
        t: "Średniowiecze", m: "Memento Mori", 
        d: "Najdłuższa epoka w historii Polski (966-XV w.). Dominacja teocentryzmu, wzorce rycerza i ascety.", 
        b: ["Bogurodzica", "Lament świętokrzyski", "Gall Anonim - Kronika polska"],
        fact: "Polska nazwa 'Średniowiecze' utrwaliła się dopiero w XIX wieku."
    },
    ren: { 
        t: "Renesans", m: "Człowiekiem jestem...", 
        d: "Złoty wiek kultury polskiej. Antropocentryzm, rozwój polszczyzny, humanizm i reformacja.", 
        b: ["Jan Kochanowski - Treny", "Mikołaj Rej - Krótka rozprawa..."],
        fact: "Jan Kochanowski stworzył polski język literacki niemal od zera."
    },
    bar: { 
        t: "Barok", m: "Vanitas vanitatum", 
        d: "Czas kontrastów, przepychu i niepokoju. Kultura sarmacka i głęboka religijność.", 
        b: ["Jan Chryzostom Pasek - Pamiętniki", "Jan Andrzej Morsztyn - Poezje"],
        fact: "Polski sarmatyzm łączył kulturę Zachodu z orientalnym stylem Wschodu."
    },
    osw: { 
        t: "Oświecenie", m: "Sapere Aude", 
        d: "Wiek rozumu i reform. Powstanie KEN i pierwszej nowoczesnej konstytucji w Europie.", 
        b: ["Ignacy Krasicki - Satyry i Bajki", "Józef Wybicki - Mazurek Dąbrowskiego"],
        fact: "Polska Komisja Edukacji Narodowej była pierwszym ministerstwem oświaty w Europie."
    },
    rom: { 
        t: "Romantyzm", m: "Miej serce i patrzaj w serce", 
        d: "Walka o wolność, mesjanizm i prymat czucia nad rozumem. Literatura siłą narodu.", 
        b: ["Adam Mickiewicz - Dziady cz. III", "Juliusz Słowacki - Kordian"],
        fact: "Mickiewicz pisał 'Pana Tadeusza', by uciec od kłótni polskiej emigracji."
    },
    poz: { 
        t: "Pozytywizm", m: "Praca u podstaw", 
        d: "Czas pracy organicznej po klęsce powstania. Realizm służący analizie społeczeństwa.", 
        b: ["Bolesław Prus - Lalka", "Henryk Sienkiewicz - Potop"],
        fact: "Sienkiewicz pisał 'Trylogię' w odcinkach, na które ludzie czekali jak na serial."
    },
    mp:  { 
        t: "Młoda Polska", m: "Sztuka dla sztuki", 
        d: "Modernizm, symbolizm i dekadentyzm. Kult sztuki i badanie mroków duszy.", 
        b: ["Stanisław Wyspiański - Wesele", "Władysław Reymont - Chłopi"],
        fact: "Akcja 'Wesela' oparta jest na prawdziwym weselu, na którym był Wyspiański."
    },
    d20: { 
        t: "Dwudziestolecie", m: "Odzyskany śmietnik", 
        d: "Odzyskanie niepodległości, rozkwit awangardy i eksperymentu literackiego.", 
        b: ["Witold Gombrowicz - Ferdydurke", "Bruno Schulz - Sklepy cynamonowe"],
        fact: "Polska awangarda lat 20. była jedną z najciekawszych w Europie."
    },
    woj: { 
        t: "Wojna i Okupacja", m: "Pokolenie Kolumbów", 
        d: "Czas 'apokalipsy spełnionej'. Tragiczne świadectwo literatury w obliczu zagłady.", 
        b: ["Tadeusz Borowski - Opowiadania", "Krzysztof Kamil Baczyński - Poezje"],
        fact: "Kamil Baczyński zginął w 4. dniu Powstania Warszawskiego."
    },
    wsp: { 
        t: "Współczesność", m: "Postmodernizm", 
        d: "Literatura powojenna, emigracyjna i wolność po 1989 roku. Czas Noblistów.", 
        b: ["Wisława Szymborska - Poezje", "Olga Tokarczuk - Bieguni"],
        fact: "Polska posiada aż pięciu laureatów Literackiej Nagrody Nobla."
    }
};

// DEFINICJA POŁĄCZEŃ (Góra -> Środek oraz Dół -> Środek)
const CONNECTIONS = [
    // ŚREDNIOWIECZE
    ['g2-boguro', 'g2-sre'], 

    // RENESANS
    ['g2-druk', 'g2-ren'],      // Góra -> Środek
    ['g2-kochan', 'g2-ren'],     // Dół -> Środek
    ['g2-columb', 'g2-ren'],

    // BAROK
    ['g2-pasek', 'g2-bar'],

    // OŚWIECENIE
    ['g2-newton', 'g2-osw'],

    // ROMANTYZM
    ['g2-mick', 'g2-rom'],

    // POZYTYWIZM
    ['g2-watt', 'g2-poz'],

    // MŁODA POLSKA
    ['g2-wesele', 'g2-mp'],

    // DWUDZIESTOLECIE
    ['g2-einstein', 'g2-d20'],   // Góra -> Środek
    ['g2-schulz', 'g2-d20'],     // Dół -> Środek

    // WOJNA
    ['g2-einstein', 'g2-woj'],

    // WSPÓŁCZESNOŚĆ
    ['g2-moon', 'g2-wsp'],       // Góra -> Środek
    ['g2-tokar', 'g2-wsp']       // Dół -> Środek
];

const Asyn = () => {
    const [selectedEpoch, setSelectedEpoch] = useState(null);
    const [activeId, setActiveId] = useState(null);
    const [paths, setPaths] = useState([]);
    const chartRef = useRef(null);

    const drawConnections = () => {
        if (!chartRef.current) return;
        const rect = chartRef.current.getBoundingClientRect();
        const newPaths = CONNECTIONS.map(conn => {
            const e1 = document.getElementById(conn[0]);
            const e2 = document.getElementById(conn[1]);
            if (e1 && e2) {
                const r1 = e1.getBoundingClientRect();
                const r2 = e2.getBoundingClientRect();
                const x1 = r1.left + r1.width / 2 - rect.left;
                const y1 = r1.top + r1.height / 2 - rect.top;
                const x2 = r2.left + r2.width / 2 - rect.left;
                const y2 = r2.top + r2.height / 2 - rect.top;
                return {
                    d: `M ${x1} ${y1} C ${x1} ${(y1 + y2) / 2}, ${x2} ${(y1 + y2) / 2}, ${x2} ${y2}`,
                    ids: conn
                };
            }
            return null;
        }).filter(p => p !== null);
        setPaths(newPaths);
    };

    useEffect(() => {
        const timer = setTimeout(drawConnections, 400);
        window.addEventListener('resize', drawConnections);
        return () => {
            window.removeEventListener('resize', drawConnections);
            clearTimeout(timer);
        };
    }, []);

    const currentEpochData = selectedEpoch ? DATA[selectedEpoch.replace('g2-', '')] : null;

    return (
        <div className="asyn-root">
            <header className="modernist-header">
                <div className="header-decoration"></div>
                <h1 className="main-title">
                    <span>Równoległe Osie</span>
                    <span className="highlight">Kultury</span>
                </h1>
                <div className="subtitle-box">
                    <p>Tysiąc lat historii zamknięte na jednej osi. Odkryj powiązania między polskim słowem a światową nauką.</p>
                </div>
            </header>

            <div className="legend">
                <div className="legend-item">
                    <span className="l-dot" style={{background: 'var(--accent)'}}></span> Przełomy Globalne
                </div>
                <div className="legend-item">
                    <span className="l-dot" style={{background: 'var(--text)'}}></span> Literatura Polska
                </div>
            </div>

            <main className="infographic-area" ref={chartRef}>
                <svg id="svg-layer">
                    {paths.map((path, idx) => (
                        <path
                            key={idx}
                            d={path.d}
                            className={`conn-line ${activeId && path.ids.includes(activeId) ? 'active' : ''}`}
                        />
                    ))}
                </svg>

                <div className="axis-container">
                    <div className="axis-header">Świat: Nauka i Przełomy</div>
                    <div className="base-line"></div>
                    <Dot id="g2-druk" left="14%" label="1450: Wynalazek Druku" onActive={setActiveId} type="global" />
                    <Dot id="g2-columb" left="22%" label="1492: Odkrycie Ameryki" onActive={setActiveId} type="global" />
                    <Dot id="g2-newton" left="35%" label="1687: Dynamika Newtona" onActive={setActiveId} type="global" />
                    <Dot id="g2-watt" left="45%" label="1769: Maszyna Parowa" onActive={setActiveId} type="global" />
                    <Dot id="g2-einstein" left="65%" label="1905: Teoria Względności" onActive={setActiveId} type="global" />
                    <Dot id="g2-moon" left="85%" label="1969: Lądowanie na Księżycu" onActive={setActiveId} type="global" />
                </div>

                <div className="axis-container main-axis">
                    <div className="axis-header">Polska: Epoki Literackie</div>
                    <div className="base-line"></div>
                    <Epoch id="g2-sre" left="0%" width="14%" color="var(--c-sre)" title="ŚREDNIOWIECZE" sub="X-XV w." onOpen={setSelectedEpoch} onActive={setActiveId} />
                    <Epoch id="g2-ren" left="14%" width="10%" color="var(--c-ren)" title="RENESANS" sub="XVI w." onOpen={setSelectedEpoch} onActive={setActiveId} />
                    <Epoch id="g2-bar" left="24%" width="12%" color="var(--c-bar)" title="BAROK" sub="XVII w." onOpen={setSelectedEpoch} onActive={setActiveId} />
                    <Epoch id="g2-osw" left="36%" width="8%" color="var(--c-osw)" title="OŚWIECE." sub="1764" onOpen={setSelectedEpoch} onActive={setActiveId} />
                    <Epoch id="g2-rom" left="44%" width="9%" color="var(--c-rom)" title="ROMANTYZM" sub="1822" onOpen={setSelectedEpoch} onActive={setActiveId} />
                    <Epoch id="g2-poz" left="53%" width="6%" color="var(--c-poz)" title="POZYTYW." sub="1864" onOpen={setSelectedEpoch} onActive={setActiveId} />
                    <Epoch id="g2-mp"  left="59%" width="7%" color="var(--c-mp)" title="MŁODA PL" sub="1890" onOpen={setSelectedEpoch} onActive={setActiveId} />
                    <Epoch id="g2-d20" left="66%" width="5%" color="var(--c-20)" title="20-LECIE" sub="1918" onOpen={setSelectedEpoch} onActive={setActiveId} />
                    <Epoch id="g2-woj" left="71%" width="4%" color="var(--c-woj)" title="WOJNA" sub="" onOpen={setSelectedEpoch} onActive={setActiveId} />
                    <Epoch id="g2-wsp" left="75%" width="25%" color="var(--c-wsp)" title="WSPÓŁCZESNOŚĆ" sub="Od 1945" onOpen={setSelectedEpoch} onActive={setActiveId} />
                </div>

                <div className="axis-container">
                    <div className="axis-header">Polska: Kluczowe Teksty</div>
                    <div className="base-line"></div>
                    <Dot id="g2-boguro" left="5%" label="Bogurodzica" onActive={setActiveId} type="text" />
                    <Dot id="g2-kochan" left="18%" label="Kochanowski: Treny" onActive={setActiveId} type="text" />
                    <Dot id="g2-pasek" left="28%" label="Pasek: Pamiętniki" onActive={setActiveId} type="text" />
                    <Dot id="g2-mick" left="47%" label="Mickiewicz: Dziady" onActive={setActiveId} type="text" />
                    <Dot id="g2-wesele" left="60%" label="Wyspiański: Wesele" onActive={setActiveId} type="text" />
                    <Dot id="g2-schulz" left="68%" label="Schulz: Sklepy cynamonowe" onActive={setActiveId} type="text" />
                    <Dot id="g2-tokar" left="90%" label="Tokarczuk: Bieguni" onActive={setActiveId} type="text" />
                </div>

                <div className="timeline-footer">
                    <div className="year-tag" style={{ left: '0%' }}>966</div>
                    <div className="year-tag" style={{ left: '14%' }}>1500</div>
                    <div className="year-tag" style={{ left: '24%' }}>1620</div>
                    <div className="year-tag" style={{ left: '44%' }}>1822</div>
                    <div className="year-tag" style={{ left: '73%' }}>1945</div>
                    <div className="year-tag" style={{ left: '100%' }}>DZIŚ</div>
                </div>
            </main>

            {selectedEpoch && currentEpochData && (
                <div className="modal-overlay" onClick={() => setSelectedEpoch(null)}>
                    <div className="modal-box" onClick={e => e.stopPropagation()}>
                        <button className="close-btn" onClick={() => setSelectedEpoch(null)}>&times;</button>
                        <span className="modal-motto">„{currentEpochData.m}”</span>
                        <h2>{currentEpochData.t}</h2>
                        <p className="modal-description">{currentEpochData.d}</p>
                        <div className="modal-details">
                            <div className="books-box">
                                <strong>Najważniejsze teksty:</strong>
                                <ul>{currentEpochData.b.map((item, i) => <li key={i}>{item}</li>)}</ul>
                            </div>
                            <div className="fact-box">
                                <strong>Czy wiesz, że?</strong>
                                <p>{currentEpochData.fact}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const Epoch = ({ id, left, width, color, title, sub, onOpen, onActive }) => (
    <div className="epoch" id={id} style={{ left, width, background: color }}
        onClick={() => onOpen(id)} onMouseEnter={() => onActive(id)} onMouseLeave={() => onActive(null)}>
        {title} {sub && <span>{sub}</span>}
    </div>
);

const Dot = ({ id, left, label, onActive, type }) => (
    <div className={`dot ${type}`} id={id} style={{ left }} data-label={label}
        onMouseEnter={() => onActive(id)} onMouseLeave={() => onActive(null)}>
        <div className="dot-pulse"></div>
    </div>
);

export default Asyn;