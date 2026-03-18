// ============================================================
// KOLORY — dwa motywy kolorystyczne epok
// ============================================================

export const KOLOR_RACJONALIZM = {
  color: "#8B5E0A",
  bg: "#FEF7E8",
  accent: "#D4900F",
};

export const KOLOR_IRRACJONALIZM = {
  color: "#1E3A6E",
  bg: "#EEF3FB",
  accent: "#2E5FA8",
};

// ============================================================
// DANE — lista epok literackich
// ============================================================

export const epoki = [
  {
    id: "antyk",
    name: "Antyk",
    period: "IX w.p.n.e. – 476 r. n.e.",
    duration: "ok. 1300 lat",
    type: "racjonalistyczna",
    ...KOLOR_RACJONALIZM,
    icon: "☉",
    shift: "Upadek Cesarstwa Zachodniorzymskiego",
    shiftNote: "chaos i teocentryzm zastąpiły antyczny porządek",
    description:
      "Epoka starożytna to fundament całej kultury europejskiej. Grecja stworzyła filozofię, teatr, demokrację i kanony piękna — Rzym przejął i rozprzestrzenił te wzorce na cały kontynent. W literaturze dominowały eposy Homera (Iliada, Odyseja), tragedie Sofoklesa i Ajschylosa, liryka Safony i Horacego. Filozofia Platona i Arystotelesa kształtuje myśl zachodnią do dziś. Ideał kalokagathii — piękna i dobra w jedności — wyznaczał wzorzec człowieczeństwa.",
    keywords: ["Logos", "Kalokagathia", "Arete", "Mimesis", "Katharsis", "Carpe diem"],
    authors: ["Homer", "Sofokles", "Platon", "Wergiliusz", "Horacy", "Owidiusz"],
  },
  {
    id: "sredniowiecze",
    name: "Średniowiecze",
    period: "476 – XV/XVI w.",
    duration: "Europa: ~1100 lat · Polska: ~500 lat",
    type: "irracjonalistyczna",
    ...KOLOR_IRRACJONALIZM,
    icon: "✝",
    shift: "Renesans włoski, odkrycia geograficzne, druk Gutenberga",
    shiftNote: "człowiek na nowo odkrywa samego siebie",
    description:
      "Epoka zdominowana przez teocentryzm — Bóg stał w centrum wszelkiej refleksji i twórczości. Kościół był jedyną instytucją scalającą Europę po upadku Cesarstwa. Literatura miała charakter anonimowy i służebny wobec religii: kroniki, hagiografie, pieśni maryjne. W Polsce: Bogurodzica, Kronika Galla Anonima, Kazania świętokrzyskie. Dante Alighieri Boską Komedią stworzył syntezę średniowiecznego myślenia o zaświatach.",
    keywords: ["Teocentryzm", "Danse macabre", "Scholastyka", "Asceza", "Memento mori", "Anonimowość"],
    authors: ["Gall Anonim", "Wincenty Kadłubek", "Dante Alighieri", "François Villon", "Jan Długosz"],
  },
  {
    id: "renesans",
    name: "Renesans",
    period: "XV – koniec XVI w.",
    duration: "Europa: ~100 lat · Polska: ~150 lat",
    type: "racjonalistyczna",
    ...KOLOR_RACJONALIZM,
    icon: "⊙",
    shift: "Reformacja Lutra, kryzysy religijne, wojny wyznaniowe",
    shiftNote: "zwątpienie, przepych i vanitas zastąpiły renesansowy optymizm",
    description:
      "Odrodzenie przyniosło radykalne odwrócenie perspektywy — z teocentryzmu ku antropocentryzmowi. Człowiek stał się miarą wszechrzeczy. W Polsce złoty wiek literatury: Jan Kochanowski stworzył arcydzieła (Fraszki, Treny, Pieśni), Mikołaj Rej jako pierwszy pisał po polsku z dumą. Humanizm, carpe diem i stoicka zgoda na los przenikały wszystkie dziedziny sztuki. Erazm z Rotterdamu sławił mądrość, Szekspir dał literaturze najdoskonalsze dramaty wszech czasów.",
    keywords: ["Humanizm", "Carpe diem", "Antropocentryzm", "Horacjanizm", "Reformacja", "Fortuna"],
    authors: ["Jan Kochanowski", "Mikołaj Rej", "A. Frycz Modrzewski", "Szekspir", "Erazm z Rotterdamu"],
  },
  {
    id: "barok",
    name: "Barok",
    period: "koniec XVI – koniec XVII w.",
    duration: "ok. 150 lat",
    type: "irracjonalistyczna",
    ...KOLOR_IRRACJONALIZM,
    icon: "☽",
    shift: "Rewolucja naukowa, filozofia Locke'a i Newtona",
    shiftNote: "rozum i nauka zwyciężają nad dogmatem i emocją",
    description:
      "Epoka paradoksów i kontrastów — między przepychem a nicością, wiarą a zwątpieniem. Vanitas vanitatum — wszystko jest marnością. Kontrreformacja przywróciła potęgę Kościoła, lecz religijność stała się pełna dramatyzmu. W Polsce: Jan Andrzej Morsztyn (mistrz konceptu), Wacław Potocki (Transakcja wojny chocimskiej), Daniel Naborowski. Sarmatyzm kształtował polską szlachecką tożsamość.",
    keywords: ["Vanitas", "Theatrum mundi", "Koncept", "Kontrreformacja", "Sarmatyzm", "Marinizm"],
    authors: ["Jan Andrzej Morsztyn", "Wacław Potocki", "Daniel Naborowski", "Calderon", "Molier"],
  },
  {
    id: "oswiecenie",
    name: "Oświecenie",
    period: "koniec XVII – koniec XVIII w.",
    duration: "Europa: ~80 lat · Polska: ~60 lat",
    type: "racjonalistyczna",
    ...KOLOR_RACJONALIZM,
    icon: "△",
    shift: "Rewolucja Francuska, rozbiory Polski, romantyczne przebudzenie narodów",
    shiftNote: "uczucie i naród zastępują rozum i kosmopolityzm",
    description:
      "Wiek rozumu, encyklopedystów i rewolucji. Wolter, Rousseau, Monteskiusz kwestionowali autorytet Kościoła i gloryfikowali naukę. W Polsce czasy stanisławowskie: Teatr Narodowy, reformy Kołłątaja. Ignacy Krasicki pisał zjadliwe satyry i bajki. Konstytucja 3 Maja (1791) — najpiękniejszy owoc oświeceniowych idei — i początkiem końca niepodległości.",
    keywords: ["Ratio", "Empiryzm", "Deizm", "Encyklopedyzm", "Klasycyzm", "Utylitaryzm"],
    authors: ["Ignacy Krasicki", "Julian U. Niemcewicz", "Stanisław Staszic", "Wolter", "Jean-Jacques Rousseau"],
  },
  {
    id: "romantyzm",
    name: "Romantyzm",
    period: "koniec XVIII – poł. XIX w.",
    duration: "Europa: ~70 lat · Polska: 1822–1863",
    type: "irracjonalistyczna",
    ...KOLOR_IRRACJONALIZM,
    icon: "★",
    shift: "Klęska Powstania Styczniowego (1863)",
    shiftNote: "zrywy zbrojne zastąpiono pracą organiczną i scjentyzmem",
    description:
      "Bunt przeciwko rozumowi — romantyzm gloryfikował uczucie, wyobraźnię i wolność. W Polsce epoka mesjanizmu: trzej wieszcze — Mickiewicz, Słowacki, Krasiński — stali się duchowymi przywódcami narodu pod zaborami. Dziady, Kordian i Nie-Boska komedia to arcydzieła niezrównanej siły. Norwid wyprzedził epokę o sto lat. Romantyczny bajroniczny bohater to indywidualista w konflikcie z losem i historią.",
    keywords: ["Mesjanizm", "Irracjonalizm", "Prometeizm", "Werteryzm", "Ludowość", "Walka za wolność"],
    authors: ["Adam Mickiewicz", "Juliusz Słowacki", "Zygmunt Krasiński", "Cyprian K. Norwid", "George Byron"],
  },
  {
    id: "pozytywizm",
    name: "Pozytywizm",
    period: "ok. 1850–1900",
    duration: "Europa: ~50 lat · Polska: 1864–1890",
    type: "racjonalistyczna",
    ...KOLOR_RACJONALIZM,
    icon: "⊞",
    shift: "Kryzys wiary w postęp, dekadentyzm fin de siècle",
    shiftNote: "sztuka dla sztuki zastępuje sztukę użyteczną",
    description:
      "Po klęsce powstania styczniowego pozytywiści odrzucili zbrojne zrywy na rzecz pracy organicznej i pracy u podstaw. Hasła: emancypacja kobiet, edukacja ludu, solidaryzm społeczny. Bolesław Prus (Lalka, Faraon), Eliza Orzeszkowa (Nad Niemnem), Henryk Sienkiewicz (Trylogia, Quo vadis — Nobel 1905) stworzyli wielką powieść realistyczną.",
    keywords: ["Praca organiczna", "Scjentyzm", "Realizm", "Utylitaryzm", "Emancypacja", "Ewolucjonizm"],
    authors: ["Bolesław Prus", "Eliza Orzeszkowa", "H. Sienkiewicz", "Maria Konopnicka", "A. Dygasiński"],
  },
  {
    id: "mlodapolska",
    name: "Młoda Polska",
    period: "ok. 1890–1918",
    duration: "Polska: 1891–1918 (~30 lat)",
    type: "irracjonalistyczna",
    ...KOLOR_IRRACJONALIZM,
    icon: "❋",
    shift: "I Wojna Światowa, odzyskanie niepodległości (1918)",
    shiftNote: "wolna Polska rodzi nową, entuzjastyczną literaturę",
    description:
      "Fin de siècle przyniósł dekadentyzm i kryzys wartości. Młodopolanie odrzucili kult nauki na rzecz hasła sztuka dla sztuki. Wyspiański w Weselu rozrachował się z polskim charakterem narodowym. Żeromski piętnował niesprawiedliwość, Reymont uwiecznił wieś polską w Chłopach (Nobel 1924). Tetmajer opiewał Tatry, Staff szukał siły witalnej. Secesja, symbolizm i impresjonizm zdominowały estetykę.",
    keywords: ["Dekadentyzm", "Symbolizm", "Fin de siècle", "L'art pour l'art", "Secesja", "Nietzscheanizm"],
    authors: ["Stanisław Wyspiański", "K. Przerwa-Tetmajer", "Leopold Staff", "Stefan Żeromski", "W. Reymont"],
  },
  {
    id: "miedzywojenne",
    name: "20-lecie międzywojenne",
    period: "1918–1939",
    duration: "ok. 20 lat",
    type: "racjonalistyczna",
    ...KOLOR_RACJONALIZM,
    icon: "◈",
    shift: "II Wojna Światowa, Holocaust, totalitaryzmy",
    shiftNote: "literatura staje się świadectwem i oskarżeniem",
    description:
      "Niepodległa Polska po 123 latach zaborów — eksplozja kulturalna. Skamandryci (Tuwim, Lechoń, Wierzyński) postawili na radość życia. Bruno Schulz w Sklepach cynamonowych stworzył poetykę mitologizacji prowincji; Gombrowicz w Ferdydurke badał formę i niedojrzałość; Leśmian budował oniryczny świat neologizmów. Katastrofizm (Witkacy, Miłosz) przepowiadał nadchodzącą zagładę — trafnie.",
    keywords: ["Awangarda", "Skamander", "Futuryzm", "Katastrofizm", "Ekspresjonizm", "Surrealizm"],
    authors: ["Julian Tuwim", "Bruno Schulz", "Witold Gombrowicz", "Bolesław Leśmian", "Witkacy"],
  },
  {
    id: "wwii",
    name: "Literatura II Wojny Światowej",
    period: "1939–1945",
    duration: "6 lat",
    type: "irracjonalistyczna",
    ...KOLOR_IRRACJONALIZM,
    icon: "◌",
    shift: "Koniec wojny, system komunistyczny w Polsce",
    shiftNote: "literatura walczy z cenzurą i totalitaryzmem",
    description:
      "Druga wojna światowa stworzyła literaturę o skali cierpienia nieznanej w historii. Baczyński zginął w Powstaniu Warszawskim mając 23 lata. Borowski w Proszę państwa do gazu dał wstrząsające świadectwo Auschwitz — pisane zimnym stylem, co czyni je jeszcze straszliwszym. Herling-Grudziński opisał łagry w Innym świecie. Nałkowska w Medalionach zapisała relacje ocalałych.",
    keywords: ["Pokolenie Kolumbów", "Holokaust", "Świadectwo", "Lagrowa proza", "Apokalipsa", "Konspiracja"],
    authors: ["K.K. Baczyński", "Tadeusz Borowski", "G. Herling-Grudziński", "Zofia Nałkowska", "Cz. Miłosz"],
  },
  {
    id: "prl",
    name: "Literatura PRL",
    period: "1945–1989",
    duration: "ok. 44 lata",
    type: "irracjonalistyczna",
    ...KOLOR_IRRACJONALIZM,
    icon: "⊘",
    shift: "Upadek komunizmu, transformacja ustrojowa 1989",
    shiftNote: "pluralizm i wolność słowa otwierają nową epokę",
    description:
      "Powojenna literatura rozwijała się pod komunistyczną cenzurą i socrealistyczną doktryną. Mimo represji powstawały arcydzieła: Herbert w wierszach o Panu Cogito stawiał opór złu przez godność; Mrożek w Tangu i Emigrantach demaskował absurdy systemu; Białoszewski rewolucjonizował język codzienności w Pamiętniku z Powstania Warszawskiego. Szymborska obserwowała świat z filozoficzną ironią. Miłosz w Zniewolonym umyśle analizował mechanizm totalitaryzmu (Nobel 1980).",
    keywords: ["Socrealizm", "Cenzura", "Emigracja", "Ezopowy język", "Nowa Fala", "Opór"],
    authors: ["Zbigniew Herbert", "Wisława Szymborska", "Sławomir Mrożek", "Tadeusz Różewicz", "M. Białoszewski"],
  },
  {
    id: "wspolczesna",
    name: "Literatura współczesna",
    period: "1989 – dziś",
    duration: "trwa",
    type: "racjonalistyczna",
    ...KOLOR_RACJONALIZM,
    icon: "◎",
    shift: null,
    shiftNote: null,
    description:
      "Po 1989 roku polska literatura weszła w epokę pluralizmu — bez cenzury, z wolnym rynkiem idei. Olga Tokarczuk w Biegunach i Księgach Jakubowych stworzyła epicki świat podróży i tożsamości (Nobel 2018 — drugi noblista w 22 lata po Szymborskiej). Dorota Masłowska Wojną polsko-ruską wkroczyła brawurowo głosem ulicy. Jacek Dukaj uprawia spekulatywną science-fiction najwyższej próby. Twórczość Tokarczuk, Stasiuka i Myśliwskiego podbija świat w przekładach.",
    keywords: ["Postmodernizm", "Nobel", "Feminizm", "Ekokrytyka", "Tożsamość", "Globalizacja"],
    authors: ["Olga Tokarczuk", "Wisława Szymborska", "Andrzej Stasiuk", "Jacek Dukaj", "Dorota Masłowska"],
  },
];
