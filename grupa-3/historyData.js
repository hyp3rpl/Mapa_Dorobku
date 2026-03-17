export const historyData = [
  {
    id: "antyk",
    name: "Antyk",
    period: "IX w. p.n.e. – V w. n.e.",
    color: "#8B5E0A", bg: "#FDF9F0",
    icon: "🏛️",
    description: "Fundament cywilizacji zachodniej, ukształtowany przez kulturę starożytnej Grecji i Rzymu. W literaturze dominował dążenie do harmonii, proporcji i naśladowania natury (mimesis). To czas powstania wielkich eposów Homera, tragedii Sofoklesa oraz narodzin filozofii (Platon, Arystoteles). Człowiek antyku szukał ładu w otaczającym go kosmosie, a ideał kalokagathii (połączenia piękna zewnętrznego z dobrem moralnym) wyznaczał wzorzec doskonałości. Grecki teatr stał się miejscem przeżywania katharsis – duchowego oczyszczenia, które do dziś pozostaje fundamentem przeżywania sztuki.",
    authors: ["Homer", "Sofokles", "Platon", "Arystoteles", "Horacy"],
    keywords: [
      { name: "Logos", desc: "Rozum jako siła rządząca światem i źródło wiedzy." },
      { name: "Mimesis", desc: "Naśladowanie rzeczywistości w sztuce zgodnie z zasadą prawdopodobieństwa." },
      { name: "Katharsis", desc: "Oczyszczenie uczuć widza poprzez przeżycie litości i trwogi." },
      { name: "Fatum", desc: "Nieodwołalne przeznaczenie rządzące losem ludzkim." }
    ],
    shift: "Upadek Cesarstwa Zachodniorzymskiego",
    shiftNote: "Koniec porządku pogańskiego i przejście do uniwersalizmu chrześcijańskiego.",
    quote: { text: "Poznaj samego siebie.", author: "Sokrates" }
  },
  {
    id: "sredniowiecze",
    name: "Średniowiecze",
    period: "V – XV wiek",
    color: "#2C3E50", bg: "#F0F4F8",
    icon: "⛪",
    description: "Epoka zdominowana przez teocentryzm – przekonanie, że Bóg jest początkiem i celem wszystkiego. Literatura miała charakter służebny wobec religii i najczęściej była anonimowa, co podkreślało pokorę twórcy. Wykształciły się trzy wzorce osobowe: idealny rycerz, pobożny asceta i mądry władca. Sztuka tego czasu była przesycona symboliką i alegorią, a motyw danse macabre (tańca śmierci) przypominał o równości wszystkich stanów w obliczu przemijania. W Polsce to czas powstania Bogurodzicy i pierwszych kronik, które budowały tożsamość państwową.",
    authors: ["Dante Alighieri", "Św. Augustyn", "Gall Anonim", "Wincenty Kadłubek"],
    keywords: [
      { name: "Teocentryzm", desc: "Bóg jako najwyższa wartość i ośrodek wszystkich działań ludzkich." },
      { name: "Asceza", desc: "Ćwiczenie ducha poprzez dobrowolne umartwianie ciała." },
      { name: "Memento Mori", desc: "Łacińskie: 'Pamiętaj o śmierci'." },
      { name: "Scholastyka", desc: "Filozoficzne uzasadnianie prawd wiary." }
    ],
    shift: "Wynalazek druku Gutenberga",
    shiftNote: "Rewolucja w przepływie informacji, koniec ery rękopisów.",
    quote: { text: "Bogurodzica dziewica, Bogiem sławiena Maryja!", author: "Autor nieznany" }
  },
  {
    id: "renesans",
    name: "Renesans",
    period: "XV – XVI wiek",
    color: "#E67E22", bg: "#FEF7EC",
    icon: "☀️",
    description: "Odrodzenie kultury antycznej i narodziny humanizmu, który postawił człowieka w centrum zainteresowania. Hasło Terencjusza 'Człowiekiem jestem i nic co ludzkie nie jest mi obce' stało się dewizą epoki. Literatura renesansowa zaczęła dynamicznie rozwijać się w językach narodowych, a twórcy tacy jak Jan Kochanowski wprowadzili do polszczyzny kunsztowne formy poetyckie. To czas optymizmu życiowego, wiary w potęgę ludzkiego umysłu i harmonii z naturą. Reformacja przyniosła rozłam w Kościele, ale też wzmogła debaty intelektualne i walkę o wolność sumienia.",
    authors: ["Jan Kochanowski", "Mikołaj Rej", "William Szekspir", "Mikołaj Kopernik"],
    keywords: [
      { name: "Humanizm", desc: "Ruch umysłowy skupiony na godności i potrzebach człowieka." },
      { name: "Antropocentryzm", desc: "Pogląd stawiający człowieka jako najważniejszy punkt odniesienia." },
      { name: "Carpe Diem", desc: "Chwytaj dzień – radosna afirmacja życia." },
      { name: "Irenizm", desc: "Postawa dążąca do zgody i pokoju między wyznaniami." }
    ],
    shift: "Kryzys ideałów humanizmu",
    shiftNote: "Wojny religijne i narastający niepokój egzystencjalny kończą złoty wiek odrodzenia.",
    quote: { text: "Człowiekiem jestem i nic co ludzkie nie jest mi obce.", author: "Terencjusz (Dewiza Humanistów)" }
  },
  {
    id: "barok",
    name: "Barok",
    period: "XVII wiek",
    color: "#4A148C", bg: "#F5F3F9",
    icon: "🥀",
    description: "Epoka kontrastów, paradoksów i niepokoju. Barok odrzucił renesansowy ład na rzecz dynamizmu i skomplikowanych form (marinizm). Świadomość marności świata (vanitas) współistniała z uwielbieniem dla przepychu i konceptu artystycznego. W Polsce to czas sarmatyzmu – specyficznej kultury szlacheckiej łączącej tradycje wschodnie z zachodnimi. Człowiek baroku czuł się rozdarty między pokusami doczesności a lękiem przed nieskończonością Boga i wszechświata, co znajdowało wyraz w pełnej metafor, gęstej poezji metafizycznej.",
    authors: ["Jan Andrzej Morsztyn", "Wacław Potocki", "Daniel Naborowski", "Molier"],
    keywords: [
      { name: "Vanitas", desc: "Motyw religijno-artystyczny związany z przemijaniem." },
      { name: "Konceptyzm", desc: "Kierunek literacki stawiający na niezwykły pomysł." },
      { name: "Kontrreformacja", desc: "Ruch w Kościele katolickim mający na celu odzyskanie wpływów." },
      { name: "Sarmatyzm", desc: "Ideologia i styl życia polskiej szlachty." }
    ],
    shift: "Oświeceniowa wiara w rozum",
    shiftNote: "Krytyka zabobonów baroku na rzecz wiedzy opartej na dowodach.",
    quote: { text: "Krótka rozprawa: Śmierć, czas, marność...", author: "Daniel Naborowski" }
  },
  {
    id: "oswiecenie",
    name: "Oświecenie",
    period: "XVIII wiek",
    color: "#F1C40F", bg: "#FFFDF2",
    icon: "💡",
    description: "Wiek rozumu i światła, w którym wierzono, że nauka i krytyczne myślenie wyzwolą ludzkość z ciemnoty. Literatura miała przede wszystkim bawiąc, uczyć – dominowały satyry, bajki i powieści o charakterze dydaktycznym. W Polsce epoka ta wiąże się z próbami ratowania niepodległości, działalnością Sejmu Wielkiego i uchwaleniem Konstytucji 3 Maja. Król Stanisław August Poniatowski, mecenas sztuki, skupił wokół siebie intelektualistów, tworząc fundamenty nowoczesnego szkolnictwa i teatru narodowego.",
    authors: ["Ignacy Krasicki", "Wolter", "Jean-Jacques Rousseau", "Adam Naruszewicz"],
    keywords: [
      { name: "Racjonalizm", desc: "Uznanie rozumu za główne narzędzie poznania świata." },
      { name: "Empiryzm", desc: "Przekonanie, że jedynym źródłem wiedzy jest doświadczenie." },
      { name: "Deizm", desc: "Bóg stworzył świat, ale nie ingeruje w jego losy." },
      { name: "Utylitaryzm", desc: "Działanie jest moralne, jeśli przynosi korzyść ogółowi." }
    ],
    shift: "Rewolucja Francuska",
    shiftNote: "Wybuch emocji narodowych i społecznych, których rozum nie potrafił opanować.",
    quote: { text: "Prawdziwa cnota krytyk się nie boi.", author: "Ignacy Krasicki" }
  },
  {
    id: "romantyzm",
    name: "Romantyzm",
    period: "1822 – 1863 (Polska)",
    color: "#C0392B", bg: "#FDEDED",
    icon: "★",
    description: "Bunt przeciwko oświeceniowemu porządkowi świata. Romantycy gloryfikowali uczucie, wyobraźnię i wiarę w zjawiska nadprzyrodzone. W polskiej literaturze to najważniejsza epoka dla tożsamości narodowej – Mickiewicz, Słowacki i Krasiński (wieszcze) stali się duchowymi przywódcami narodu pod zaborami. Rozwinął się mesjanizm (Polska jako Chrystus Narodów) oraz kult wielkiego indywidualisty – bohatera romantycznego, który w imię wolności potrafi rzucić wyzwanie samemu Bogu i historii.",
    authors: ["Adam Mickiewicz", "Juliusz Słowacki", "Zygmunt Krasiński", "Cyprian Kamil Norwid"],
    keywords: [
      { name: "Mesjanizm", desc: "Idea przypisująca narodowi polskiemu szczególną rolę." },
      { name: "Prometeizm", desc: "Postawa buntu i poświęcenia się jednostki dla dobra narodu." },
      { name: "Irracjonalizm", desc: "Przekonanie, że rzeczywistość poznaje się sercem." },
      { name: "Ludowość", desc: "Zainteresowanie kulturą ludu, podaniami i baśniami." }
    ],
    shift: "Klęska Powstania Styczniowego",
    shiftNote: "Tragiczny koniec powstańczych marzeń i narodziny trzeźwego pozytywizmu.",
    quote: { text: "Miej serce i patrzaj w serce!", author: "Adam Mickiewicz" }
  },
  {
    id: "pozytywizm",
    name: "Pozytywizm",
    period: "ok. 1864 – 1890",
    color: "#27AE60", bg: "#F1F9F4",
    icon: "⚙️",
    description: "Odpowiedź na klęskę romantycznych powstań. Twórcy odrzucili marzenia o szybkiej niepodległości na rzecz 'pracy u podstaw' – edukowania ludu i 'pracy organicznej' – wzmacniania gospodarki. Literatura stała się narzędziem opisu rzeczywistości społecznej, dominował realizm i naturalizm. Bolesław Prus w swojej twórczości pokazywał mechanizmy rządzące Warszawą, a Eliza Orzeszkowa walczyła o emancypację kobiet. Sienkiewicz pisał 'ku pokrzepieniu serc', przypominając o dawnej potędze Polski w obliczu zaborów.",
    authors: ["Bolesław Prus", "Eliza Orzeszkowa", "Henryk Sienkiewicz", "Maria Konopnicka"],
    keywords: [
      { name: "Praca u podstaw", desc: "Działalność na rzecz edukacji najniższych warstw." },
      { name: "Scjentyzm", desc: "Zaufanie do metod nauk przyrodniczych." },
      { name: "Emancypacja", desc: "Dążenie do równego statusu kobiet." },
      { name: "Realizm", desc: "Przedstawianie świata w sposób obiektywny." }
    ],
    shift: "Dekadentyzm końca wieku",
    shiftNote: "Rozczarowanie brakiem postępu duchowego i pesymizm.",
    quote: { text: "Najpiękniejszą rzeczą na świecie jest życie.", author: "Bolesław Prus" }
  },
  {
    id: "mlodapolska",
    name: "Młoda Polska",
    period: "1890 – 1918",
    color: "#16A085", bg: "#F2F9F8",
    icon: "❋",
    description: "Czas dekadentyzmu, modernizmu i symbolizmu. Artyści, czując schyłek dotychczasowego świata (fin de siècle), odrzucili pożyteczność sztuki na rzecz hasła 'sztuka dla sztuki'. Poezja stała się zapisem nastrojów, lęków i fascynacji podświadomością. Stanisław Wyspiański w 'Weselu' dokonał bezlitosnego rozrachunku z polską psychiką narodową. Epoka ta to także kult Tatr, fascynacja folklorem (chłopomania) oraz dynamiczny rozwój nowych form wyrazu w malarstwie i teatrze (secesja).",
    authors: ["Stanisław Wyspiański", "Kazimierz Przerwa-Tetmajer", "Stefan Żeromski", "Władysław Reymont"],
    keywords: [
      { name: "Dekadentyzm", desc: "Nurt charakteryzujący się pesymizmem i apatią." },
      { name: "Symbolizm", desc: "Wyrażanie treści niewyrażalnych wprost." },
      { name: "Chłopomania", desc: "Fascynacja życiem wiejskim i siłą chłopów." },
      { name: "Secesja", desc: "Styl charakteryzujący się płynną linią i ornamentyką." }
    ],
    shift: "Odzyskanie niepodległości 1918",
    shiftNote: "Nagle wolny kraj potrzebuje nowej literatury.",
    quote: { text: "Polska to jest wielka rzecz.", author: "Stanisław Wyspiański (Wesele)" }
  },
  {
    id: "20lecie",
    name: "20-lecie Międzywojenne",
    period: "1918 – 1939",
    color: "#2980B9", bg: "#F2F7FA",
    icon: "🎷",
    description: "Krótka, lecz niezwykle dynamiczna epoka eksplozji wolności. Pisarze grupy Skamander (Tuwim) postawili na radość życia i codzienność, odcinając się od 'wieszczów'. Jednocześnie rozwijała się awangarda, poszukująca zupełnie nowych form językowych (Peiper). Bruno Schulz i Witold Gombrowicz zrewolucjonizowali prozę, badając psychikę człowieka i absurd rzeczywistości. Pod koniec epoki optymizm ustąpił miejsca katastrofizmowi – przeczuciu nadchodzącej zagłady, która ostatecznie nadeszła wraz z wybuchem II wojny światowej.",
    authors: ["Julian Tuwim", "Bruno Schulz", "Witold Gombrowicz", "Bolesław Leśmian"],
    keywords: [
      { name: "Awangarda", desc: "Zerwanie z tradycją i stworzenie nowego języka sztuki." },
      { name: "Futuryzm", desc: "Fascynacja prędkością, maszyną i odrzucenie przeszłości." },
      { name: "Katastrofizm", desc: "Przekonanie o bliskim upadku cywilizacji europejskiej." },
      { name: "Psychologizm", desc: "Badanie skomplikowanych mechanizmów ludzkiej psychiki." }
    ],
    shift: "II Wojna Światowa",
    shiftNote: "Koniec cywilizowanego świata i wielka trauma.",
    quote: { text: "A ja ci powiem: żyj!", author: "Julian Tuwim" }
  }
];