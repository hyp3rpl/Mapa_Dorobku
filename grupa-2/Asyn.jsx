import React, { useState, useEffect, useRef } from 'react';
import './Asyn.css';

const DATA = {
    sre: { t: "Średniowiecze", d: "Najdłuższa epoka w historii, trwająca w Polsce od Chrztu (966) do końca XV wieku. Dominacja teocentryzmu, łaciny i wzorców osobowych takich jak rycerz i asceta.", b: ["Bogurodzica", "Lament świętokrzyski", "Gall Anonim - Kronika polska", "Rozmowa Mistrza Polikarpa ze Śmiercią"] },
    ren: { t: "Renesans (Odrodzenie)", d: "Wiek Złoty kultury polskiej. Antropocentryzm ('człowiek miarą wszechrzeczy'), rozwój polszczyzny literackiej, humanizm i reformacja.", b: ["Jan Kochanowski - Treny", "Jan Kochanowski - Odprawa posłów greckich", "Mikołaj Rej - Krótka rozprawa...", "Andrzej Frycz Modrzewski - O poprawie Rzeczypospolitej"] },
    bar: { t: "Barok", d: "Czas kontrastów, niepokoju i przepychu. W Polsce związany z kulturą sarmacką, ale też z głęboką religijnością i metafizyką.", b: ["Jan Chryzostom Pasek - Pamiętniki", "Jan Andrzej Morsztyn - Wybór poezji", "Daniel Naborowski - Krótkość żywota", "Wacław Potocki - Wojna chocimska"] },
    osw: { t: "Oświecenie", d: "Wiek rozumu i reform. Próba ratowania państwa przez edukację (KEN) i kulturę. Powstanie teatru narodowego i pierwszej nowoczesnej konstytucji.", b: ["Ignacy Krasicki - Satyry i Bajki", "Julian Ursyn Niemcewicz - Powrót posła", "Józef Wybicki - Mazurek Dąbrowskiego"] },
    rom: { t: "Romantyzm", d: "Epoka walki o wolność, mesjanizmu i prymatu czucia nad rozumem. Literatura staje się duchową siłą narodu pozbawionego państwa.", b: ["Adam Mickiewicz - Dziady cz. III", "Adam Mickiewicz - Pan Tadeusz", "Juliusz Słowacki - Kordian", "Cyprian Kamil Norwid - Vade-mecum"] },
    poz: { t: "Pozytywizm", d: "Czas pracy u podstaw i pracy organicznej po klęsce powstania styczniowego. Realizm i naturalizm służące analizie społeczeństwa.", b: ["Bolesław Prus - Lalka", "Eliza Orzeszkowa - Nad Niemnem", "Henryk Sienkiewicz - Potop", "Maria Konopnicka - Mendel Gdański"] },
    mp:  { t: "Młoda Polska", d: "Modernizm w polskim wydaniu. Symbolizm, neoromantyzm, kult sztuki i badanie mroków duszy (dekadentyzm).", b: ["Stanisław Wyspiański - Wesele", "Władysław Reymont - Chłopi", "Stefan Żeromski - Ludzie bezdomni"] },
    d20: { t: "Dwudziestolecie", d: "Odzyskanie niepodległości, rozkwit awangardy i eksperymentu. Zderzenie optymizmu wolności z lękiem przed nadchodzącym katastrofizmem.", b: ["Witold Gombrowicz - Ferdydurke", "Bruno Schulz - Sklepy cynamonowe", "Zofia Nałkowska - Granica"] },
    woj: { t: "Wojna i Okupacja", d: "Czas 'apokalipsy spełnionej'. Zagłada wartości humanistycznych i próba ich ocalenia poprzez tragiczne świadectwo literatury.", b: ["Tadeusz Borowski - Opowiadania", "Krzysztof Kamil Baczyński - Poezje", "Gustaw Herling-Grudziński - Inny świat"] },
    wsp: { t: "Współczesność", d: "Od 1945 roku. Literatura zmagająca się z systemem komunistycznym, emigracją, aż po postmodernistyczną wolność po 1989 roku.", b: ["Sławomir Mrożek - Tango", "Wisława Szymborska - Poezje", "Czesław Miłosz - Traktat moralny", "Olga Tokarczuk - Bieguni"] }
};

const CONNECTIONS = [
    ['g2-druk', 'g2-ren'], ['g2-columb', 'g2-ren'], ['g2-newton', 'g2-osw'], ['g2-watt', 'g2-poz'], 
    ['g2-einstein', 'g2-schulz'], ['g2-moon', 'g2-tokar'], ['g2-boguro', 'g2-sre'],
    ['g2-kochan', 'g2-ren'], ['g2-pasek', 'g2-bar'], ['g2-mick', 'g2-rom'], ['g2-wesele', 'g2-mp'],
    ['g2-druk', 'g2-kochan']
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
        const timer = setTimeout(drawConnections, 300);
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
                    <span className="highlight">Modernizmów</span>
                </h1>
                <div className="subtitle-box">
                    <p>Pełna panorama polskiej kultury od 966 roku. Kliknij w epokę, aby zobaczyć szczegóły.</p>
                </div>
            </header>

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
                    <div className="axis-header">Przełomy Globalne</div>
                    <div className="base-line"></div>
                    <Dot id="g2-druk" left="14%" label="1450: Wynalazek Druku" onActive={setActiveId} />
                    <Dot id="g2-columb" left="22%" label="1492: Odkrycie Ameryki" onActive={setActiveId} />
                    <Dot id="g2-newton" left="35%" label="1687: Zasady Dynamiki Newtona" onActive={setActiveId} />
                    <Dot id="g2-watt" left="45%" label="1769: Maszyna Parowa" onActive={setActiveId} />
                    <Dot id="g2-einstein" left="65%" label="1905: Teoria Względności" onActive={setActiveId} />
                    <Dot id="g2-moon" left="85%" label="1969: Lądowanie na Księżycu" onActive={setActiveId} />
                </div>

                <div className="axis-container">
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
                    <div className="axis-header">Kluczowe Teksty</div>
                    <div className="base-line"></div>
                    <Dot id="g2-boguro" left="5%" label="Bogurodzica" onActive={setActiveId} />
                    <Dot id="g2-kochan" left="18%" label="Kochanowski: Treny" onActive={setActiveId} />
                    <Dot id="g2-pasek" left="28%" label="Pasek: Pamiętniki" onActive={setActiveId} />
                    <Dot id="g2-mick" left="47%" label="Mickiewicz: Dziady" onActive={setActiveId} />
                    <Dot id="g2-wesele" left="60%" label="Wyspiański: Wesele" onActive={setActiveId} />
                    <Dot id="g2-schulz" left="68%" label="Schulz: Sklepy cynamonowe" onActive={setActiveId} />
                    <Dot id="g2-tokar" left="90%" label="Tokarczuk: Bieguni" onActive={setActiveId} />
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
                        <h2>{currentEpochData.t}</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', margin: '15px 0' }}>{currentEpochData.d}</p>
                        <div className="books-box">
                            <strong>Najważniejsze teksty:</strong>
                            <ul style={{ marginTop: '10px' }}>
                                {currentEpochData.b.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
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

const Dot = ({ id, left, label, onActive }) => (
    <div className="dot" id={id} style={{ left }} data-label={label}
        onMouseEnter={() => onActive(id)} onMouseLeave={() => onActive(null)} />
);

export default Asyn;