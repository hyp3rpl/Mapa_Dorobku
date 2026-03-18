import React, { useState, useLayoutEffect, useRef } from 'react';
import './Asyn.css';

const DATA = {
    sre: { 
        t: "Średniowiecze", 
        m: "Memento Mori (Pamiętaj o śmierci)", 
        d: "Najdłuższa epoka w historii, trwająca w Polsce od Chrztu (966) do końca XV wieku. Dominacja teocentryzmu, łaciny i wzorców osobowych takich jak rycerz i asceta. Kultura skupiona na przygotowaniu człowieka do życia wiecznego.", 
        b: ["Bogurodzica", "Lament świętokrzyski", "Gall Anonim - Kronika polska", "Rozmowa Mistrza Polikarpa ze Śmiercią"],
        fact: "Polska nazwa 'Średniowiecze' utrwaliła się dopiero w XIX wieku. Wcześniej używano łacińskiego 'Medium Aevum'."
    },
    ren: { 
        t: "Renesans (Odrodzenie)", 
        m: "Człowiekiem jestem i nic co ludzkie nie jest mi obce", 
        d: "Wiek Złoty kultury polskiej. Antropocentryzm ('człowiek miarą wszechrzeczy'), rozwój polszczyzny literackiej, humanizm i reformacja. Czas rozkwitu nauki, sztuki i odkryć geograficznych.", 
        b: ["Jan Kochanowski - Treny", "Jan Kochanowski - Odprawa posłów greckich", "Mikołaj Rej - Krótka rozprawa...", "Andrzej Frycz Modrzewski - O poprawie Rzeczypospolitej"],
        fact: "Jan Kochanowski stworzył polski język literacki niemal od zera, wprowadzając tysiące nowych słów do polszczyzny."
    },
    bar: { 
        t: "Barok", 
        m: "Vanitas vanitatum et omnia vanitas (Marność nad marnościami)", 
        d: "Czas kontrastów, niepokoju i przepychu. W Polsce związany z kulturą sarmacką, ale też z głęboką religijnością i metafizyką. Literatura operuje konceptem, paradoksem i bogatą stylistyką.", 
        b: ["Jan Chryzostom Pasek - Pamiętniki", "Jan Andrzej Morsztyn - Wybór poezji", "Daniel Naborowski - Krótkość żywota", "Wacław Potocki - Wojna chocimska"],
        fact: "Polski barok wykształcił unikalny portret trumienny – realistyczne wizerunki zmarłych mocowane do trumien, co było ewenementem na skalę światową."
    },
    osw: { 
        t: "Oświecenie", 
        m: "Sapere Aude (Odważ się być mądrym)", 
        d: "Wiek rozumu i reform. Próba ratowania państwa przez edukację (KEN) i kulturę. Powstanie teatru narodowego, czas publicystyki i pierwszej nowoczesnej konstytucji w Europie.", 
        b: ["Ignacy Krasicki - Satyry i Bajki", "Julian Ursyn Niemcewicz - Powrót posła", "Józef Wybicki - Mazurek Dąbrowskiego"],
        fact: "Polska Komisja Edukacji Narodowej (1773) była pierwszym ministerstwem oświaty w całej Europie."
    },
    rom: { 
        t: "Romantyzm", 
        m: "Miej serce i patrzaj w serce", 
        d: "Epoka walki o wolność, mesjanizmu i prymatu czucia nad rozumem. Literatura staje się duchową siłą narodu pozbawionego państwa, kształtując polską tożsamość narodową przez kolejne dekady.", 
        b: ["Adam Mickiewicz - Dziady cz. III", "Adam Mickiewicz - Pan Tadeusz", "Juliusz Słowacki - Kordian", "Cyprian Kamil Norwid - Vade-mecum"],
        fact: "Adam Mickiewicz napisał 'Pana Tadeusza' w Paryżu, tęskniąc za krajem i chcąc uciec od kłótni panujących wśród polskiej emigracji."
    },
    poz: { 
        t: "Pozytywizm", 
        m: "Praca u podstaw i praca organiczna", 
        d: "Czas pracy u podstaw i pracy organicznej po klęsce powstania styczniowego. Realizm i naturalizm służące analizie społeczeństwa, scjentyzm oraz wiara w postęp techniczny i edukację.", 
        b: ["Bolesław Prus - Lalka", "Eliza Orzeszkowa - Nad Niemnem", "Henryk Sienkiewicz - Potop", "Maria Konopnicka - Mendel Gdański"],
        fact: "Henryk Sienkiewicz pisał 'Trylogię' w odcinkach do gazet, co sprawiało, że ludzie czekali na nie jak na odcinki współczesnego serialu."
    },
    mp:  { 
        t: "Młoda Polska", 
        m: "Sztuka dla sztuki (Modernizm)", 
        d: "Modernizm w polskim wydaniu. Symbolizm, neoromantyzm, kult sztuki i badanie mroków duszy (dekadentyzm). Czas cyganerii artystycznej, fascynacji ludowością i kryzysu wartości mieszczańskich.", 
        b: ["Stanisław Wyspiański - Wesele", "Władysław Reymont - Chłopi", "Stefan Żeromski - Ludzie bezdomni"],
        fact: "Dramat 'Wesele' Wyspiańskiego opisuje prawdziwe wydarzenie – wesele poety Lucjana Rydla, na którym autor był gościem."
    },
    d20: { 
        t: "Dwudziestolecie", 
        m: "Odzyskany śmietnik (wolność i lęk)", 
        d: "Odzyskanie niepodległości, rozkwit awangardy i eksperymentu. Zderzenie optymizmu wolności z lękiem przed nadchodzącym katastrofizmem. Nowoczesność miesza się z poszukiwaniem nowej formy.", 
        b: ["Witold Gombrowicz - Ferdydurke", "Bruno Schulz - Sklepy cynamonowe", "Zofia Nałkowska - Granica"],
        fact: "W tej epoce polska awangarda literacka i szkoła matematyczna były jednymi z najbardziej nowatorskich w całej Europie."
    },
    woj: { 
        t: "Wojna i Okupacja", 
        m: "Pokolenie Kolumbów", 
        d: "Czas 'apokalipsy spełnionej'. Zagłada wartości humanistycznych i próba ich ocalenia poprzez tragiczne świadectwo literatury. Poezja i proza stają się formą oporu i dokumentem cierpienia.", 
        b: ["Tadeusz Borowski - Opowiadania", "Krzysztof Kamil Baczyński - Poezje", "Gustaw Herling-Grudziński - Inny świat"],
        fact: "Krzysztof Kamil Baczyński zginął w czwartym dniu Powstania Warszawskiego mając zaledwie 23 lata."
    },
    wsp: { 
        t: "Współczesność", 
        m: "Postmodernizm i globalna wioska", 
        d: "Od 1945 roku. Literatura zmagająca się z systemem komunistycznym, traumą wojenną, emigracją, aż po postmodernistyczną wolność po 1989 roku. Czas wielkich sukcesów polskich Noblistów.", 
        b: ["Sławomir Mrożek - Tango", "Wisława Szymborska - Poezje", "Czesław Miłosz - Traktat moralny", "Olga Tokarczuk - Bieguni"],
        fact: "Polska literatura współczesna stoi Noblami – w ostatnich dekadach nagrodę odebrali Wisława Szymborska (1996) i Olga Tokarczuk (2018)."
    }
};

const CONNECTIONS = [
    ['g2-boguro', 'g2-sre'], 
    ['g2-druk', 'g2-ren'], ['g2-kochan', 'g2-ren'], ['g2-columb', 'g2-ren'],
    ['g2-pasek', 'g2-bar'],
    ['g2-newton', 'g2-osw'],
    ['g2-mick', 'g2-rom'],
    ['g2-watt', 'g2-poz'],
    ['g2-wesele', 'g2-mp'],
    ['g2-einstein', 'g2-d20'], ['g2-schulz', 'g2-d20'],
    ['g2-einstein', 'g2-woj'],
    ['g2-moon', 'g2-wsp'], ['g2-tokar', 'g2-wsp']
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

    useLayoutEffect(() => {
        drawConnections();
        window.addEventListener('resize', drawConnections);
        const timer = setTimeout(drawConnections, 100);
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
                    <p>Interaktywny przewodnik po dziedzictwie polskiej literatury i sztuki. Wybierz epokę, aby poznać jej najważniejsze dzieła i fakty.</p>
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
                    <Epoch id="g2-sre" left="0%" width="14%" title="ŚREDNIOWIECZE" sub="X-XV w." onOpen={setSelectedEpoch} onActive={setActiveId} />
                    <Epoch id="g2-ren" left="14%" width="10%" title="RENESANS" sub="XVI w." onOpen={setSelectedEpoch} onActive={setActiveId} />
                    <Epoch id="g2-bar" left="24%" width="12%" title="BAROK" sub="XVII w." onOpen={setSelectedEpoch} onActive={setActiveId} />
                    <Epoch id="g2-osw" left="36%" width="8%" title="OŚWIECE." sub="1764" onOpen={setSelectedEpoch} onActive={setActiveId} />
                    <Epoch id="g2-rom" left="44%" width="9%" title="ROMANTYZM" sub="1822" onOpen={setSelectedEpoch} onActive={setActiveId} />
                    <Epoch id="g2-poz" left="53%" width="6%" title="POZYTYW." sub="1864" onOpen={setSelectedEpoch} onActive={setActiveId} />
                    <Epoch id="g2-mp"  left="59%" width="7%" title="MŁODA PL" sub="1890" onOpen={setSelectedEpoch} onActive={setActiveId} />
                    <Epoch id="g2-d20" left="66%" width="5%" title="20-LECIE" sub="1918" onOpen={setSelectedEpoch} onActive={setActiveId} />
                    <Epoch id="g2-woj" left="71%" width="4%" title="WOJNA" sub="" onOpen={setSelectedEpoch} onActive={setActiveId} />
                    <Epoch id="g2-wsp" left="75%" width="25%" title="WSPÓŁCZESNOŚĆ" sub="Od 1945" onOpen={setSelectedEpoch} onActive={setActiveId} />
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
                    <div className="year-tag" style={{ left: '0%' }} data-info="Początek Średniowiecza (Chrzest Polski)">966</div>
                    <div className="year-tag" style={{ left: '14%' }} data-info="Koniec Średniowiecza / Początek Renesansu">1500</div>
                    <div className="year-tag" style={{ left: '24%' }} data-info="Koniec Renesansu / Początek Baroku">1620</div>
                    <div className="year-tag" style={{ left: '36%' }} data-info="Koniec Baroku / Początek Oświecenia">1764</div>
                    <div className="year-tag" style={{ left: '44%' }} data-info="Koniec Oświecenia / Początek Romantyzmu">1822</div>
                    <div className="year-tag" style={{ left: '53%' }} data-info="Koniec Romantyzmu / Początek Pozytywizmu">1864</div>
                    <div className="year-tag" style={{ left: '59%' }} data-info="Koniec Pozytywizmu / Początek Młodej Polski">1890</div>
                    <div className="year-tag" style={{ left: '66%' }} data-info="Koniec Młodej Polski / Początek 20-lecia">1918</div>
                    <div className="year-tag" style={{ left: '71%' }} data-info="Koniec 20-lecia / Wybuch II Wojny Światowej">1939</div>
                    <div className="year-tag" style={{ left: '75%' }} data-info="Koniec Wojny / Początek Współczesności">1945</div>
                    <div className="year-tag" style={{ left: '100%' }} data-info="Współczesność - Epoka trwająca">DZIŚ</div>
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

const Epoch = ({ id, left, width, title, sub, onOpen, onActive }) => (
    <div className="epoch" id={id} style={{ left, width }}
        onClick={() => onOpen(id)} onMouseEnter={() => onActive(id)} onMouseLeave={() => onActive(null)}>
        <strong>{title}</strong>
        {sub && <span>{sub}</span>}
    </div>
);

const Dot = ({ id, left, label, onActive, type }) => (
    <div className={`dot ${type}`} id={id} style={{ left }} data-label={label}
        onMouseEnter={() => onActive(id)} onMouseLeave={() => onActive(null)}>
        <div className="dot-pulse"></div>
    </div>
);

export default Asyn;