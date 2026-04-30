export const historyData = [

  // EPOKI 

  {
    id: "romantyzm-europa",
    type: "epoch",

    title: {
      full: "Romantyzm w Europie",
      short: "RE"
    },

    time: {
      start: "1789",
      end: "1848",
      label: "1789–1848"
    },

    country: "Europa",

    categories: ["historia", "literatura", "romantyzm", "kultura"],
    tags: ["romantyzm", "rewolucja", "oświecenie", "literatura", "poezja", "Europa"],

    layers: {
      geographic: 5,
      social: 4,
      economic: 2,
      mental: 5
    },

    dimensions: {
      psychologicalTime: "Czas buntu i przełomu – odrzucenie chłodnego rozumu na rzecz uczucia i wyobraźni",
      technicalLevel: "Era przemysłowa – pierwsze maszyny parowe, rewolucja przemysłowa w Anglii",
      globalContext: "Rewolucja Francuska, wojny napoleońskie, Wiosna Ludów, ruchy narodowowyzwoleńcze"
    },

    media: {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Camille_Corot_-_Orpheus_Leading_Eurydice_from_the_Underworld.jpg/1280px-Camille_Corot_-_Orpheus_Leading_Eurydice_from_the_Underworld.jpg",
      video: ""
    },

    relations: [
      { targetId: "oswiecenie-europa", type: "influenced_by" },
      { targetId: "romantyzm-polska", type: "influenced" }
    ],

    tree: {
      parentId: null
    },

    description: "Romantyzm w Europie był wielką epoką kulturalną i literacką trwającą od końca XVIII do połowy XIX wieku. Zrodził się jako gwałtowna reakcja na racjonalizm i empiryzm oświecenia. Jego bezpośrednim impulsem była Rewolucja Francuska (1789), która wstrząsnęła starym porządkiem społecznym. Romantycy głosili prymat uczucia nad rozumem, wolność jednostki, kult natury i fascynację tajemniczością świata. Literatura romantyczna przyniosła nowe gatunki: powieść gotycką, poemat liryczny, dramat romantyczny. Kluczowymi twórcami epoki byli Johann Wolfgang von Goethe, Friedrich Schiller, George Gordon Byron, Percy Bysshe Shelley, Victor Hugo, Heinrich Heine i Aleksander Puszkin. Romantyzm miał zasadniczy wpływ na kształtowanie się świadomości narodowej wielu europejskich narodów."
  },

  {
    id: "romantyzm-polska",
    type: "epoch",

    title: {
      full: "Romantyzm w Polsce",
      short: "RP"
    },

    time: {
      start: "1822",
      end: "1863",
      label: "1822–1863"
    },

    country: "Polska",

    categories: ["historia", "literatura", "romantyzm", "kultura"],
    tags: ["romantyzm", "Polska", "patriotyzm", "powstania", "Mickiewicz", "Słowacki", "Krasiński"],

    layers: {
      geographic: 4,
      social: 5,
      economic: 1,
      mental: 5
    },

    dimensions: {
      psychologicalTime: "Czas mesjanizmu i martyrologii – naród cierpiący jako Chrystus narodów",
      technicalLevel: "Polska pod zaborami – brak własnego państwa, ograniczony dostęp do industrializacji",
      globalContext: "Rozbiory Polski, Kongres Wiedeński 1815, Wiosna Ludów 1848, powstania narodowe"
    },

    media: {
      image: "https://wydawnictwowam.pl/sites/default/files/styles/full_size/public/paste_1669981524_0.png",
      video: ""
    },

    relations: [
      { targetId: "romantyzm-europa", type: "influenced_by" },
      { targetId: "powstanie-listopadowe", type: "influenced_by" },
      { targetId: "powstanie-styczniowe", type: "influenced" }
    ],

    tree: {
      parentId: null
    },

    description: "Romantyzm w Polsce trwał od 1822 do 1863 roku. Za jego symboliczny początek uznaje się wydanie Ballad i romansów Adama Mickiewicza w 1822 roku, a za koniec – klęskę Powstania Styczniowego w 1863 roku. Polska odmiana romantyzmu miała specyficzny charakter: była głęboko zakorzeniona w walce o niepodległość i przeżywaniu narodowej traumy po rozbiorach. Twórczość romantyków polskich przepełniona była patriotyzmem, mesjanizmem i motywami martyrologii. Wielka Trójca romantyzmu polskiego to Adam Mickiewicz, Juliusz Słowacki i Zygmunt Krasiński. Poezja i dramat romantyczny stały się w Polsce nie tylko dziełami artystycznymi, ale przede wszystkim narzędziami podtrzymywania ducha narodowego wśród uciemiężonego społeczeństwa."
  },

  {
    id: "oswiecenie-europa",
    type: "epoch",

    title: {
      full: "Oświecenie w Europie",
      short: "OE"
    },

    time: {
      start: "1680",
      end: "1789",
      label: "ok. 1680–1789"
    },

    country: "Europa",

    categories: ["historia", "filozofia", "kultura"],
    tags: ["oświecenie", "rozum", "filozofia", "Wolter", "Rousseau", "rewolucja"],

    layers: {
      geographic: 5,
      social: 4,
      economic: 3,
      mental: 5
    },

    dimensions: {
      psychologicalTime: "Wiek rozumu – wiara w postęp, naukę i racjonalne urządzenie świata",
      technicalLevel: "Początki rewolucji przemysłowej, encyklopedyści, rozwój nauki",
      globalContext: "Absolutyzm oświecony, rewolucja amerykańska, poprzednik Rewolucji Francuskiej"
    },

    media: {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Voltaire.jpg/800px-Voltaire.jpg",
      video: ""
    },

    relations: [
      { targetId: "romantyzm-europa", type: "influenced" }
    ],

    tree: {
      parentId: null
    },

    description: "Oświecenie było europejskim ruchem intelektualnym i kulturalnym trwającym od końca XVII do końca XVIII wieku. Jego fundamentem była wiara w potęgę ludzkiego rozumu, nauki i postępu. Filozofowie oświecenia – Wolter, Rousseau, Monteskiusz, Locke, Hume – kwestionowali autorytet religii i tradycji, propagując racjonalne myślenie i prawa człowieka. Oświecenie przygotowało grunt pod Rewolucję Francuską oraz późniejszy romantyzm, który stanowił jego częściowe odrzucenie."
  },

  // WYDARZENIA HISTORYCZNE

  {
    id: "rewolucja-francuska",
    type: "event",

    title: {
      full: "Rewolucja Francuska",
      short: "RF"
    },

    time: {
      start: "1789",
      end: "1799",
      label: "1789–1799"
    },

    country: "Francja",

    categories: ["historia", "polityka", "rewolucja"],
    tags: ["rewolucja", "Francja", "wolność", "Bastylия", "Napoleon", "romantyzm"],

    layers: {
      geographic: 5,
      social: 5,
      economic: 4,
      mental: 5
    },

    dimensions: {
      psychologicalTime: "Punkt zwrotny – koniec starego porządku i narodziny nowoczesności",
      technicalLevel: "Epoka przedindustrialna – gospodarka rolnicza, początki kapitalizmu",
      globalContext: "Wzorzec dla wszystkich późniejszych rewolucji europejskich XIX wieku"
    },

    media: {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Anonymous_-_Prise_de_la_Bastille.jpg/1280px-Anonymous_-_Prise_de_la_Bastille.jpg",
      video: ""
    },

    relations: [
      { targetId: "romantyzm-europa", type: "influenced" },
      { targetId: "wojny-napoleonskie", type: "influenced" }
    ],

    tree: {
      parentId: null
    },

    description: "Rewolucja Francuska (1789–1799) była przełomowym wydarzeniem w historii nowożytnej Europy. Zburzyła feudalny porządek społeczny, obaliła monarchię absolutną i proklamowała ideały wolności, równości i braterstwa. Szturm na Bastylię 14 lipca 1789 roku stał się jej symbolem. Rewolucja zakończyła się dojściem do władzy Napoleona Bonapartego. Miała ogromny wpływ na romantyzm – romantycy postrzegali ją zarówno jako wyzwolenie, jak i ostrzeżenie przed chaosem mas."
  },

  {
    id: "wojny-napoleonskie",
    type: "event",

    title: {
      full: "Wojny napoleońskie",
      short: "WN"
    },

    time: {
      start: "1803",
      end: "1815",
      label: "1803–1815"
    },

    country: "Europa",

    categories: ["historia", "polityka", "wojskowość"],
    tags: ["Napoleon", "Francja", "wojny", "Europa", "Kongres Wiedeński", "Legiony"],

    layers: {
      geographic: 5,
      social: 4,
      economic: 4,
      mental: 4
    },

    dimensions: {
      psychologicalTime: "Era napoleońska – nadzieja Polaków na odbudowę państwa przez sojusz z Napoleonem",
      technicalLevel: "Nowoczesna taktyka wojskowa, masowe armie narodowe",
      globalContext: "Przekształcenie mapy politycznej Europy, nowe państwa i granice"
    },

    media: {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg/800px-Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg",
      video: ""
    },

    relations: [
      { targetId: "rewolucja-francuska", type: "influenced_by" },
      { targetId: "kongres-wiedenski", type: "influenced" },
      { targetId: "ksiestwo-warszawskie", type: "influenced" }
    ],

    tree: {
      parentId: null
    },

    description: "Wojny napoleońskie to seria konfliktów zbrojnych prowadzonych przez Napoleona Bonapartego w Europie w latach 1803–1815. Napoleon podbił niemal całą Europę, narzucając jej Kodeks Napoleona i nowy porządek prawny. Dla Polaków był wielką nadzieją na odzyskanie niepodległości – w 1807 roku powstało Księstwo Warszawskie. Klęska Napoleona pod Waterloo (1815) zakończyła tę epokę i zapoczątkowała nowy porządek europejski ustalony na Kongresie Wiedeńskim."
  },

  {
    id: "kongres-wiedenski",
    type: "event",

    title: {
      full: "Kongres Wiedeński",
      short: "KW"
    },

    time: {
      start: "1814",
      end: "1815",
      label: "1814–1815"
    },

    country: "Europa",

    categories: ["historia", "polityka", "dyplomacja"],
    tags: ["Kongres Wiedeński", "Europa", "rozbiory", "Polska", "Metternich", "restauracja"],

    layers: {
      geographic: 5,
      social: 3,
      economic: 3,
      mental: 3
    },

    dimensions: {
      psychologicalTime: "Czas restauracji – powrót do starego porządku po rewolucji i Napoleonie",
      technicalLevel: "Era dyplomacji gabinetowej, równowaga sił europejskich",
      globalContext: "Ustanowienie Świętego Przymierza, nowy ład polityczny w Europie"
    },

    media: {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/The_Congress_of_Vienna.PNG/1280px-The_Congress_of_Vienna.PNG",
      video: ""
    },

    relations: [
      { targetId: "wojny-napoleonskie", type: "influenced_by" },
      { targetId: "romantyzm-polska", type: "influenced" },
      { targetId: "krolstwo-polskie", type: "influenced" }
    ],

    tree: {
      parentId: null
    },

    description: "Kongres Wiedeński (1814–1815) był wielką konferencją dyplomatyczną zwycięskich mocarstw po klęsce Napoleona. Uczestniczyli w nim przedstawiciele Austrii, Prus, Rosji, Wielkiej Brytanii i Francji. Dla Polski miał tragiczne konsekwencje: zamiast odzyskania niepodległości, ziemie polskie zostały podzielone między zaborców, a jedynie niewielkie Królestwo Polskie zostało powołane w unii personalnej z Rosją. Decyzje kongresu umocniły nastroje buntownicze wśród Polaków i przyczyniły się do wybuchu Powstania Listopadowego."
  },

  {
    id: "ksiestwo-warszawskie",
    type: "event",

    title: {
      full: "Księstwo Warszawskie",
      short: "KsW"
    },

    time: {
      start: "1807",
      end: "1815",
      label: "1807–1815"
    },

    country: "Polska",

    categories: ["historia", "polityka"],
    tags: ["Księstwo Warszawskie", "Napoleon", "Polska", "niepodległość", "nadzieja"],

    layers: {
      geographic: 4,
      social: 3,
      economic: 3,
      mental: 4
    },

    dimensions: {
      psychologicalTime: "Chwilowe odrodzenie – nadzieja na pełną niepodległość związana z Napoleonem",
      technicalLevel: "Wprowadzenie Kodeksu Napoleona, zniesienie poddaństwa chłopów",
      globalContext: "Satelickie państwo napoleońskie zależne od Francji"
    },

    media: {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Duchy_of_Warsaw_flag.svg/1280px-Duchy_of_Warsaw_flag.svg.png",
      video: ""
    },

    relations: [
      { targetId: "wojny-napoleonskie", type: "part_of" },
      { targetId: "kongres-wiedenski", type: "influenced" }
    ],

    tree: {
      parentId: null
    },

    description: "Księstwo Warszawskie (1807–1815) było półniepodległym państwem polskim powołanym przez Napoleona Bonapartego po pokoju w Tylży. Stanowiło namiastkę odrodzonej Polski i wzbudziło ogromne nadzieje wśród Polaków. Wprowadzono w nim Kodeks Napoleona, równość obywatelską i zniesiono poddaństwo chłopów. Armia Księstwa walczyła u boku Napoleona w wyprawach na Europę i Rosję. Po klęsce Napoleona i Kongresie Wiedeńskim Księstwo zostało rozwiązane."
  },

  {
    id: "krolstwo-polskie",
    type: "event",

    title: {
      full: "Królestwo Polskie (Kongresowe)",
      short: "KrP"
    },

    time: {
      start: "1815",
      end: "1831",
      label: "1815–1831"
    },

    country: "Polska",

    categories: ["historia", "polityka"],
    tags: ["Królestwo Polskie", "Kongresówka", "Rosja", "zabory", "autonomia"],

    layers: {
      geographic: 3,
      social: 3,
      economic: 2,
      mental: 3
    },

    dimensions: {
      psychologicalTime: "Pozorna wolność – autonomia pod kuratelą cara rosyjskiego",
      technicalLevel: "Rozwijający się przemysł tkacki i górniczy w Kongresówce",
      globalContext: "Część systemu Świętego Przymierza, nadzorowanego przez Rosję, Austrię i Prusy"
    },

    media: {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Kingdom_of_Poland_%281815-1831%29.svg/800px-Kingdom_of_Poland_%281815-1831%29.svg.png",
      video: ""
    },

    relations: [
      { targetId: "kongres-wiedenski", type: "influenced_by" },
      { targetId: "powstanie-listopadowe", type: "influenced" }
    ],

    tree: {
      parentId: null
    },

    description: "Królestwo Polskie, zwane Kongresowym lub Kongresówką, powstało na mocy ustaleń Kongresu Wiedeńskiego w 1815 roku. Miało własną konstytucję, sejm i armię, ale było połączone unią personalną z Rosją – car rosyjski był jednocześnie królem polskim. Ograniczona autonomia była systematycznie ograniczana przez cara Aleksandra I, a następnie Mikołaja I. Napięcia polityczne doprowadziły do wybuchu Powstania Listopadowego w 1830 roku."
  },

  {
    id: "powstanie-listopadowe",
    type: "event",

    title: {
      full: "Powstanie Listopadowe",
      short: "PL"
    },

    time: {
      start: "1830-11-29",
      end: "1831-10",
      label: "1830–1831"
    },

    country: "Polska",

    categories: ["historia", "polityka", "powstanie"],
    tags: ["Powstanie Listopadowe", "Polska", "Rosja", "walka", "niepodległość", "emigracja"],

    layers: {
      geographic: 4,
      social: 5,
      economic: 3,
      mental: 5
    },

    dimensions: {
      psychologicalTime: "Noc listopadowa jako mit założycielski – romantyczny zryw ku wolności",
      technicalLevel: "Walki w epoce muszkietów i artylerii, armia regularna przeciw regularnej",
      globalContext: "Część fali rewolucji europejskich 1830 roku (także Francja i Belgia)"
    },

    media: {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Noc_Listopadowa.jpg/1280px-Noc_Listopadowa.jpg",
      video: ""
    },

    relations: [
      { targetId: "romantyzm-polska", type: "influenced" },
      { targetId: "krolstwo-polskie", type: "influenced_by" },
      { targetId: "wielka-emigracja", type: "influenced" },
      { targetId: "adam-mickiewicz", type: "influenced" },
      { targetId: "juliusz-slowacki", type: "influenced" }
    ],

    tree: {
      parentId: null
    },

    description: "Powstanie Listopadowe wybuchło w nocy z 29 na 30 listopada 1830 roku w Warszawie. Spiskowcy zaatakowali Belweder – siedzibę wielkiego księcia Konstantego. Przyczyną były rosnące represje rosyjskie, łamanie konstytucji i plany wysłania wojska polskiego do tłumienia rewolucji we Francji i Belgii. Sejm detronizował cara w grudniu 1830 roku. Mimo bohaterskiej walki, powstanie zostało stłumione przez wojska rosyjskie w 1831 roku. Klęska przyniosła masowe represje, zniesienie konstytucji i wielką falę emigracji polskiej inteligencji – tzw. Wielką Emigrację."
  },

  {
    id: "wielka-emigracja",
    type: "event",

    title: {
      full: "Wielka Emigracja",
      short: "WE"
    },

    time: {
      start: "1831",
      end: "1870",
      label: "1831–ok. 1870"
    },

    country: "Polska/Francja",

    categories: ["historia", "kultura", "emigracja"],
    tags: ["emigracja", "Paryż", "Polska", "twórczość", "Mickiewicz", "Słowacki", "Chopin"],

    layers: {
      geographic: 4,
      social: 4,
      economic: 2,
      mental: 5
    },

    dimensions: {
      psychologicalTime: "Tęsknota i mesjanizm – twórczość na wygnaniu jako misja ocalenia narodu",
      technicalLevel: "Paryż jako centrum kultury i wydawnictw polskich na emigracji",
      globalContext: "Polska diaspora intelektualna i artystyczna kształtuje europejski romantyzm"
    },

    media: {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Artur_Grottger_-_Polonia_-_Google_Art_Project.jpg/800px-Artur_Grottger_-_Polonia_-_Google_Art_Project.jpg",
      video: ""
    },

    relations: [
      { targetId: "powstanie-listopadowe", type: "influenced_by" },
      { targetId: "adam-mickiewicz", type: "part_of" },
      { targetId: "juliusz-slowacki", type: "part_of" },
      { targetId: "fryderyk-chopin", type: "part_of" }
    ],

    tree: {
      parentId: null
    },

    description: "Wielka Emigracja to masowy exodus polskiej inteligencji, wojskowych i artystów po klęsce Powstania Listopadowego w 1831 roku. Głównym centrum skupienia emigrantów był Paryż, gdzie tworzyli najważniejsi polscy romantycy: Adam Mickiewicz, Juliusz Słowacki, Zygmunt Krasiński oraz Fryderyk Chopin. Na emigracji powstały arcydzieła polskiej literatury i muzyki. Emigracja wykształciła specyficzną filozofię mesjanistyczną, głoszącą, że Polska cierpi jak Chrystus, aby przez swą ofiarę odkupić i wyzwolić inne narody Europy."
  },

  {
    id: "wiosna-ludow",
    type: "event",

    title: {
      full: "Wiosna Ludów",
      short: "WL"
    },

    time: {
      start: "1848",
      end: "1849",
      label: "1848–1849"
    },

    country: "Europa",

    categories: ["historia", "polityka", "rewolucja"],
    tags: ["Wiosna Ludów", "Europa", "rewolucja", "narodowość", "liberalizm"],

    layers: {
      geographic: 5,
      social: 5,
      economic: 4,
      mental: 4
    },

    dimensions: {
      psychologicalTime: "Fala nadziei i rozczarowania – rewolucje niemal wszędzie, ale wszędzie stłumione",
      technicalLevel: "Rewolucja przemysłowa tworzy nową klasę robotniczą żądającą praw",
      globalContext: "Rewolucje w Paryżu, Wiedniu, Berlinie, Budapeszcie, Pradze, Mediolanie"
    },

    media: {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Horace_Vernet_-_Barricade_rue_Soufflot.jpg/1280px-Horace_Vernet_-_Barricade_rue_Soufflot.jpg",
      video: ""
    },

    relations: [
      { targetId: "romantyzm-europa", type: "influenced_by" }
    ],

    tree: {
      parentId: null
    },

    description: "Wiosna Ludów (1848–1849) była falą rewolucji i powstań, które ogarnęły niemal całą Europę. Zaczęła się we Francji w lutym 1848 roku, a następnie rozszerzyła na Niemcy, Austro-Węgry, Włochy i inne kraje. Rewolucjoniści żądali konstytucji, wolności obywatelskich, zjednoczenia narodowego i zniesienia resztek feudalizmu. Polacy w Galicji, Poznańskiem i na Śląsku próbowali walczyć o niepodległość. Ostatecznie wszystkie rewolucje zostały stłumione, ale przyspieszyły reformy społeczne w wielu krajach europejskich."
  },

  {
    id: "powstanie-styczniowe",
    type: "event",

    title: {
      full: "Powstanie Styczniowe",
      short: "PS"
    },

    time: {
      start: "1863-01-22",
      end: "1864-05",
      label: "1863–1864"
    },

    country: "Polska",

    categories: ["historia", "polityka", "powstanie"],
    tags: ["Powstanie Styczniowe", "Polska", "Rosja", "koniec romantyzmu", "pozytywizm"],

    layers: {
      geographic: 4,
      social: 5,
      economic: 2,
      mental: 5
    },

    dimensions: {
      psychologicalTime: "Kres romantycznych złudzeń – po klęsce Polacy porzucają wiarę w zbrojny zryw",
      technicalLevel: "Walki partyzanckie w lasach, asymetryczna wojna z regularną armią rosyjską",
      globalContext: "Ostatnie wielkie powstanie polskie przed I wojną światową"
    },

    media: {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/January_Uprising_Artur_Grottger.jpg/1280px-January_Uprising_Artur_Grottger.jpg",
      video: ""
    },

    relations: [
      { targetId: "romantyzm-polska", type: "influenced_by" }
    ],

    tree: {
      parentId: null
    },

    description: "Powstanie Styczniowe wybuchło 22 stycznia 1863 roku i było największym polskim powstaniem narodowym XIX wieku. Trwało ponad rok i obejmowało tereny dawnej Rzeczypospolitej. Polacy walczyli metodami partyzanckimi przeciwko regularnej armii rosyjskiej. Mimo heroicznego oporu, zostało krwawo stłumione. Klęska Powstania Styczniowego oznaczała symboliczny koniec epoki romantyzmu w Polsce – społeczeństwo polskie odrzuciło ideał walki zbrojnej na rzecz programu pozytywistycznego: pracy organicznej i pracy u podstaw."
  },

  // TWÓRCY

  {
    id: "adam-mickiewicz",
    type: "event",

    title: {
      full: "Adam Mickiewicz – życie i twórczość",
      short: "Mickiewicz"
    },

    time: {
      start: "1798",
      end: "1855",
      label: "1798–1855"
    },

    country: "Polska",

    categories: ["literatura", "romantyzm", "biografia"],
    tags: ["Mickiewicz", "romantyzm", "Polska", "poezja", "emigracja", "mesjanizm"],

    layers: {
      geographic: 3,
      social: 4,
      economic: 1,
      mental: 5
    },

    dimensions: {
      psychologicalTime: "Poeta-wieszcz – poczucie narodowej misji i proroczy charakter twórczości",
      technicalLevel: "Twórczość na emigracji w Paryżu, publikacje w prasie i książkach",
      globalContext: "Jeden z najważniejszych poetów europejskiego romantyzmu"
    },

    media: {
      image: "https://rynekisztuka.pl/wp-content/uploads/2014/09/adam_mickiewicz.png",
      video: ""
    },

    relations: [
      { targetId: "romantyzm-polska", type: "part_of" },
      { targetId: "wielka-emigracja", type: "part_of" },
      { targetId: "powstanie-listopadowe", type: "influenced_by" },
      { targetId: "ballady-i-romanse", type: "influenced" },
      { targetId: "dziady-czesc-iii", type: "influenced" },
      { targetId: "pan-tadeusz", type: "influenced" },
      { targetId: "konrad-wallenrod", type: "influenced" }
    ],

    tree: {
      parentId: null
    },

    description: "Adam Mickiewicz (1798–1855) był największym polskim poetą doby romantyzmu i jednym z najwybitniejszych poetów europejskich XIX wieku. Urodził się w Nowogródku na Litwie. Studiował w Wilnie, gdzie związał się z Towarzystwem Filomatów. W 1823 roku został aresztowany przez władze rosyjskie i zesłany w głąb Rosji. Od 1829 roku przebywał na emigracji – głównie w Paryżu, gdzie wykładał literaturę słowiańską w Collège de France. W swojej twórczości łączył patriotyzm z liryką miłosną, filozofią i mistyką. Jest autorem Ballad i romansów (1822), Dziadów, Konrada Wallenroda i Pana Tadeusza – epopei uznawanej za największe dzieło polskiej literatury. Zginął w Konstantynopolu w 1855 roku podczas organizowania oddziałów polskich do walki z Rosją w wojnie krymskiej."
  },
  // grupa 3
  {
    id: "antyk-3",
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
    quotes: [
      { author: "Homer", text: "Na ziemi nie ma słabszego stworzenia niż człowiek." },
      { author: "Sofokles", text: "Słowami świadczyć miłość - to nie miłość." },
      { author: "Platon", text: "Bezmyślnym życiem żyć człowiekowi nie warto." },
      { author: "Horacy", text: "Co ma być niech będzie." },
      { author: "Arystoteles", text: "Namyśleć się trzeba powoli." },
      ],
      historicalContext: [
        "Wzniesienie ateńskiego Partenonu (V w. p.n.e.)",
        "Pierwsze starożytne igrzyska olimpijskie (776 r. p.n.e.)",
        "Powstanie i ekspansja Imperium Rzymskiego"
      ],
  },
  {
    id: "sredniowiecze-3",
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
    quotes: [
      { author: "Dante Alighieri", text: "Niech wam wystarczy wierzyć, że tak jest, a nie dociekać, dlaczego jest." },
      { author: "Św. Augustyn", text: "Błądzenie jest rzeczą ludzką, ale dobrowolne trwanie w błędzie jest rzeczą diabelską." },
      { author: "Gall Anonim", text: "I tak wielką owego dnia złączyli się miłością, że cesarz mianował go bratem i sprzymierzeńcem narodu rzymskiego." },
      { author: "Wincenty Kadłubek", text: "Nigdy bowiem ludzie doskonali złem za złe nie odpłacają." },
    ],
      historicalContext: [
        "Wielka schizma wschodnia i podział chrześcijaństwa",
        "Bitwa pod Grunwaldem (1410 r.)",
        "Epidemia 'Czarnej Śmierci' w Europie"
    ]
  },
  {
    id: "renesans-3",
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
    quotes: [
      { author: "Jan Kochanowski", text: "Że rozum wart jest więcej niźli złota skrzynie; Tego, niestety, żadnej nie wmówisz dziewczynie." },
      { author: "Mikołaj Rej", text: "Kto nie rozważa, mądrych słów słuchając, Jako wół lutniej słucha, trąby zając." },
      { author: "William Szekspir", text: "Miłość w swej prostej i nieśmiałej mowie; Powie najwięcej, kiedy najmniej powie." },
      { author: "Mikołaj Kopernik", text: "A cóż piękniejszego nad niebo, które przecież ogarnia wszystko co piękne? " },
    ],
      historicalContext: [
        "Odkrycie Ameryki przez Krzysztofa Kolumba (1492 r.)",
        "Mikołaj Kopernik publikuje teorię heliocentryczną",
        "Wystąpienie Marcina Lutra i początek Reformacji"
    ],
  },
  {
    id: "barok-3",
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
    quotes: [
      { author: "Jan Andrzej Morsztyn", text: "Ty nic nie czujesz, ja cierpię srodze. Tyś jak lód, a jam w piekielnej śrzeżodze." },
      { author: "Wacław Potocki", text: "Zdrowy nic mi nie dajesz; po tobie dziedziczę, Jeśliś niegłupi, możesz wiedzieć, czegoć życzę." },
      { author: "Daniel Naborowski", text: "Bogaczu hardy, próżno śmiejesz się z nagiego: Nago wychodzim na ten świat, nago pójdziemy z niego." },
      { author: "Molier", text: "W słowach wszyscy mężczyźni podobni są do siebie; czyny dopiero odsłaniają różnice" },
    ],
      historicalContext: [
        "Galileusz potwierdza budowę Układu Słonecznego",
        "Wojna trzydziestoletnia w Europie",
        "Budowa pałacu w Wersalu – symbolu absolutyzmu"
      ],
  },
  {
    id: "oswiecenie-3",
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
    quotes: [
      { author: "Ignacy Krasicki", text: "Miej ty sobie pałace, ja mój domek ciasny. Prawda, nie jest wspaniały: szczupły, ale własny." },
      { author: "Wolter", text: "Co to takiego optymizm? spytał Kakambo. – Ach, odparł Kandyd, to obłęd dowodzenia, że wszystko jest dobrze, kiedy nam się dzieje źle." },
      { author: "Jean-Jacques Rousseau", text: "Nie znajdziecie takiego zła w moralności i polityce, w które nie byłby zamieszany pieniądz." },
      { author: "Adam Naruszewicz", text: "Bo w Polsce złota wolność pewnych reguł strzeże: Chłopa na pal, panu nic, szlachcica na wieże." },
    ],
      historicalContext: [
        "Wybuch Rewolucji Francuskiej (1789 r.)",
        "James Watt opatentowuje maszynę parową",
        "Uchwalenie Konstytucji 3 Maja w Polsce"
      ]
  },
  {
    id: "romantyzm-3",
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
    quotes: [
      { author: "Adam Mickiewicz", text: "Bo kto nie był ni razu człowiekiem, temu człowiek nic nie pomoże." },
      { author: "Juliusz Słowacki", text: "Otom ja sam jak drzewo zwarzone od kiści, Sto we mnie żądz, sto uczuć, sto uwiędłych liści." },
      { author: "Zygmunt Krasiński", text: "Jestem tu – jestem – ale wy mnie sądzić nie będziecie. Ja się już wybrałem w drogę – ja stąpam ku sądowi Boga." },
      { author: "Cyprian Kamil Norwid", text: "Niewolnicy wszędzie i zawsze niewolnikami będą – daj im skrzydła u ramion, a zamiatać pójdą ulice skrzydłami." },
    ],
      historicalContext: [
        "Wybuch Powstania Listopadowego w Polsce (1830 r.)",
        "Wiosna Ludów – seria zrywów rewolucyjnych w Europie",
        "Wojny napoleońskie zmieniające mapę kontynentu"
      ],
  },
  {
    id: "pozytywizm-3",
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
    quotes: [
      { author: "Bolesław Prus", text: "Najgorszą samotnością nie jest ta, która otacza człowieka, ale ta pustka w nim samym." },
      { author: "Eliza Orzeszkowa", text: "Podobno bratem bliźniaczym mądrości bywa u ludzi smutek." },
      { author: "Henryk Sienkiewicz", text: "Jeśli ktoś Kalemu zabrać krowy to jest zły uczynek. Dobry, to jak Kali zabrać komuś krowy." },
      { author: "Maria Konopnicka", text: "A gdy serce twe przytłoczy Myśl, że żyć nie warto, Z łez ocieraj cudze oczy, Chociaż twoich nie otarto." },
     ],
      historicalContext: [
        "Karol Darwin publikuje teorię ewolucji",
        "Otwarcie Kolei Warszawsko-Wiedeńskiej",
        "Powstanie Styczniowe i okres rusyfikacji/germanizacji"
      ],
  },
  {
    id: "mlodapolska-3",
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
    quotes: [
      { author: "Stanisław Wyspiański", text: "Wyście sobie, a my sobie, każden sobie rzepkę skrobie." },
      { author: "Kazimierz Przerwa-Tetmajer", text: "I chociaż życie nasze nic niewarte, evviva l'arte!" },
      { author: "Stefan Żeromski", text: "Każdy ma swoje miejsce ulubione w dzieciństwie. To jest ojczyzna duszy." },
      { author: "Władysław Reymont", text: "Człowiek nie może żyć tylko dla siebie - nie wolno mu tego pod grozą własnego nieszczęścia." },
    ],
      historicalContext: [
        "Maria Skłodowska-Curie odkrywa polon i rad",
        "Wybuch I Wojny Światowej (1914 r.)",
        "Bracia Lumière prezentują pierwszy publiczny pokaz kinowy"
      ],
  },
  {
    id: "20lecie-3",
    name: "20-lecie Międzywojenne",
    period: "1918 – 1939",
    color: "#2980B9", bg: "#F2F7FA",
    icon: "🎷",
    description: "Krótka, lecz niezwykle dynamiczna epoka eksplozji wolności. Pisarze grupy Skamander (Tuwim) postawili na radość życia i codzienność, odcinając się od 'wieszczów'. Jednocześnie rozwijała się awangarda, poszukująca zupełnie nowych form językowych (Peiper). Bruno Schulz i Witold Gombrowicz zrewolucjonizowali prozę, badając psychikę człowieka i absurd rzeczywistości. Pod koniec epoki optymizm ustąpił miejsca katastrofizmowi – przeczuciu nadchodzącej zagłady, która ostatecznie nadeszła wraz z wybuchem II wojny światowej.",
    authors: ["Julian Tuwim", "Bruno Schulz", "Witold Gombrowicz", "Bolesław Leśmian"],
    keywords: [
      { name: "Awangarda", desc: "Zerwanie z tradycją i stworzenie nowego języka sztuki." },
      { name: "Futuryzm", desc: "Fascynacja prędkością, maszyną i odrzucenie przeszłości." },
      { name: "Katastrofizm", desc: "Przeczucie nadchodzącej zagłady cywilizacji." },
      { name: "Psychologizm", desc: "Badanie skomplikowanych mechanizmów ludzkiej psychiki." }
    ],
    shift: "II Wojna Światowa",
    shiftNote: "Koniec cywilizowanego świata i wielka trauma.",
    quotes: [
      { author: "Julian Tuwim", text: "Błogosławieni ci, którzy nie mając nic do powiedzenia, nie oblekają tego faktu w słowa." },
      { author: "Bruno Schulz", text: "Bo czyż pod stołem, który nas dzieli, nie trzymamy się wszyscy tajnie za ręce?" },
      { author: "Witold Gombrowicz", text: "Człowiek jest najgłębiej uzależniony od swojego odbicia w duszy drugiego człowieka." },
      { author: "Bolesław Leśmian", text: "Świat się zmniejszył na zawsze o twą drobną postać, I zmalał cały świat!" }
    ],
    historicalContext: [
      "Odzyskanie niepodległości przez Polskę (1918 r.)",
      "Wielki Kryzys gospodarczy na świecie",
      "Powstanie portu i miasta Gdynia"
    ],
  },
]
