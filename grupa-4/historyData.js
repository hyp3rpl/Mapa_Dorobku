export const historyData = [

  // =============================================
  // EPOKI / EPOCHS
  // =============================================

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

  // =============================================
  // WYDARZENIA HISTORYCZNE
  // =============================================

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
  }
]
