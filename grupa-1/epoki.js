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
// POJĘCIA KLUCZOWE — słownik z definicjami
//
// Każde pojęcie to obiekt z polami:
//   epoka  — nazwa epoki, do której należy pojęcie
//   opis   — krótka definicja wyświetlana w modalu
//
// Aby dodać definicję do nowego pojęcia:
//   "NazwaPojecia": { epoka: "NazwaEpoki", opis: "Treść definicji..." },
// ============================================================

export const pojecia = {
  // Antyk
  Logos: {
    epoka: "Antyk",
    opis: "Greckie pojęcie oznaczające rozum, słowo i porządek wszechświata. Dla Heraklita Logos to zasada rządząca kosmosem; dla stoików — boski rozum przenikający świat. W chrześcijaństwie utożsamiony z Bogiem-Słowem.",
  },
  Kalokagathia: {
    epoka: "Antyk",
    opis: "Grecki ideał harmonijnego połączenia piękna (kalos) i dobroci (agathos). Oznaczał wzorzec doskonałego człowieka — pięknego ciałem i szlachetnego duchem. Był fundamentem greckiej filozofii wychowawczej.",
  },
  Arete: {
    epoka: "Antyk",
    opis: "Greckie pojęcie cnoty i doskonałości. Oznaczało najwyższy poziom sprawności w dziedzinie, do której ktoś jest powołany. Dla Arystotelesa arete to złoty środek między skrajnościami charakteru.",
  },
  Mimesis: {
    epoka: "Antyk",
    opis: "Naśladowanie rzeczywistości jako zasada sztuki. Platon uważał ją za oddalanie od prawdy (kopia kopii), Arystoteles — za naturalne działanie człowieka i źródło rozkoszy estetycznej.",
  },
  Katharsis: {
    epoka: "Antyk",
    opis: "Oczyszczenie duszy przez przeżycie silnych emocji w teatrze. Arystoteles opisał katharsis jako cel tragedii — widz, współprzeżywając litość i trwogę, doznaje wyzwolenia od tych uczuć.",
  },
  "Carpe diem": {
    epoka: "Antyk",
    opis: "Łacińska sentencja Horacego: 'Chwytaj dzień'. Filozofia cieszenia się chwilą obecną, bo przyszłość jest niepewna. Jeden z najtrwalszych toposów literatury europejskiej, obecny od Antyku do dziś.",
  },

  // Średniowiecze
  Teocentryzm: {
    epoka: "Średniowiecze",
    opis: "Pogląd, że Bóg jest centrum i miarą wszystkiego. W Średniowieczu oznaczał podporządkowanie całego życia — sztuki, nauki, polityki — chwale Bożej. Przeciwieństwo renesansowego antropocentryzmu.",
  },
  "Danse macabre": {
    epoka: "Średniowiecze",
    opis: "Taniec śmierci — motyw ikonograficzny i literacki przedstawiający korowód śmierci prowadzącej ludzi wszystkich stanów do grobu. Przypominał o równości wobec śmierci i kruchości wszelkiego życia.",
  },
  Scholastyka: {
    epoka: "Średniowiecze",
    opis: "Filozofia i metoda nauczania dominująca w średniowiecznych uniwersytetach. Polegała na pogodzeniu wiary z rozumem przy pomocy logiki Arystotelesa. Jej szczyt to Tomasz z Akwinu i Summa Theologiae.",
  },
  Asceza: {
    epoka: "Średniowiecze",
    opis: "Wyrzeczenie się dóbr materialnych i przyjemności ciała w celu osiągnięcia doskonałości duchowej. W Średniowieczu praktykowana przez mnichów i pustelników jako droga do zbawienia.",
  },
  "Memento mori": {
    epoka: "Średniowiecze",
    opis: "Łacińskie przypomnienie: 'Pamiętaj, że umrzesz'. Motyw obecny w całej sztuce średniowiecznej — czaszki, klepsydry, tańce śmierci — miał skłaniać do pokuty i myślenia o życiu wiecznym.",
  },
  Anonimowość: {
    epoka: "Średniowiecze",
    opis: "Cecha charakterystyczna twórczości średniowiecznej — autor ukrywał się za dziełem, bo liczyło się Boże natchnienie, nie ludzka chwała. Bogurodzica, Kazania świętokrzyskie — do dziś nie znamy ich autorów.",
  },

  // Renesans
  Humanizm: {
    epoka: "Renesans",
    opis: "Prąd renesansowy stawiający człowieka w centrum zainteresowania. Humaniści powracali do starożytności, rozwijali filologię i filozofię. Wierzyli w nieograniczone możliwości ludzkiego rozumu i twórczości.",
  },
  Antropocentryzm: {
    epoka: "Renesans",
    opis: "Człowiek jako miara wszechrzeczy i centrum świata. Renesansowa odpowiedź na średniowieczny teocentryzm — zamiast Boga, w centrum refleksji stanął człowiek z rozumem, wolną wolą i twórczością.",
  },
  Horacjanizm: {
    epoka: "Renesans",
    opis: "Nawiązanie do filozofii i poetyki Horacego w literaturze renesansu. Oznaczało pochwałę złotego środka (aurea mediocritas), umiaru, harmonii i cieszenia się życiem zgodnie z naturą.",
  },
  Reformacja: {
    epoka: "Renesans",
    opis: "Ruch religijny XVI wieku zapoczątkowany przez Marcina Lutra. Zakwestionował autorytet papieża i Kościoła, doprowadził do powstania protestantyzmu i wojen religijnych, które wstrząsnęły Europą.",
  },
  Fortuna: {
    epoka: "Renesans",
    opis: "Rzymska bogini losu i szczęścia, przedstawiana z kołem. W renesansie symbol zmienności losu i nieprzewidywalności życia — człowiek musi być gotowy na obroty fortuny, łącząc jej wyzwania z własną virtù.",
  },

  // Barok
  Vanitas: {
    epoka: "Barok",
    opis: "Łacińskie 'marność'. Barokowy motyw przemijalności i złudności wszelkich ziemskich wartości, zaczerpnięty z Księgi Koheleta. Wyrażany przez symbole: czaszki, klepsydry, świece, więdnące kwiaty.",
  },
  "Theatrum mundi": {
    epoka: "Barok",
    opis: "Świat jako teatr, a ludzie jako aktorzy grający role wyznaczone przez Boga lub los. Ulubiona metafora baroku, obecna u Calderona i Szekspira, podkreślająca ulotność i pozorność życia.",
  },
  Koncept: {
    epoka: "Barok",
    opis: "Wyszukany, zaskakujący pomysł poetycki oparty na niezwykłym zestawieniu obrazów lub myśli. Mistrzostwo konceptu było najwyższą cnotą barokowego poety — Jan Andrzej Morsztyn był jego polskim mistrzem.",
  },
  Kontrreformacja: {
    epoka: "Barok",
    opis: "Odpowiedź Kościoła katolickiego na Reformację. Sobór Trydencki (1545–1563) zdefiniował dogmaty, jezuici prowadzili misje, a sztuka barokowa miała poruszać serca i przyciągać wiernych z powrotem do Kościoła.",
  },
  Sarmatyzm: {
    epoka: "Barok",
    opis: "Ideologia polskiej szlachty przekonanej o swym pochodzeniu od starożytnych Sarmatów. Gloryfikowała tradycję, wolność szlachecką i swojskość, prowadząc zarazem do ksenofobii i oporu przed reformami.",
  },
  Marinizm: {
    epoka: "Barok",
    opis: "Nurt poetycki wywodzący się od włoskiego poety Giambattisty Marina. Cechował go przerost ozdobności, wyszukane metafory, zaskakujące koncepty i dążenie do olśnienia czytelnika za wszelką cenę.",
  },

  // Oświecenie
  Ratio: {
    epoka: "Oświecenie",
    opis: "Łaciński rozum — naczelna wartość epoki oświecenia. Racjonaliści wierzyli, że rozum jest jedynym pewnym źródłem poznania i narzędziem naprawy świata. Stąd krytyka zabobonu, tradycji i Kościoła.",
  },
  Empiryzm: {
    epoka: "Oświecenie",
    opis: "Filozofia głosząca, że całe poznanie pochodzi z doświadczenia zmysłowego. John Locke twierdził, że umysł człowieka to niezapisana karta (tabula rasa) — kształtuje go środowisko i wychowanie.",
  },
  Deizm: {
    epoka: "Oświecenie",
    opis: "Pogląd, że Bóg stworzył świat jak zegarmistrz zegarek — i odtąd nie ingeruje w jego bieg. Wolter i inni deistowie odrzucali objawienie i cuda, zachowując Boga jako pierwszą przyczynę.",
  },
  Encyklopedyzm: {
    epoka: "Oświecenie",
    opis: "Ruch skupiony wokół wydania Encyklopedii (1751–1772) przez Diderota i d'Alemberta. Miał zebrać i upowszechnić całą ludzką wiedzę, promując naukę i krytykę dogmatów religijnych i politycznych.",
  },
  Klasycyzm: {
    epoka: "Oświecenie",
    opis: "Nurt artystyczny nawiązujący do wzorów antycznych: harmonii, prostoty, porządku i racjonalności. W literaturze oznaczał przestrzeganie gatunkowych reguł, jasność języka i cel dydaktyczny.",
  },
  Utylitaryzm: {
    epoka: "Oświecenie",
    opis: "Pogląd etyczny głoszący, że dobre jest to, co przynosi największe szczęście największej liczbie ludzi. W oświeceniu oznaczał też użyteczność sztuki — literatura miała uczyć i wychowywać.",
  },

  // Romantyzm
  Mesjanizm: {
    epoka: "Romantyzm",
    opis: "Przekonanie, że Polska jako 'Chrystus narodów' cierpi za grzechy innych i zmartwychwstanie, przynosząc wolność Europie. Idea Mickiewicza z III części Dziadów i Ksiąg narodu polskiego.",
  },
  Irracjonalizm: {
    epoka: "Romantyzm",
    opis: "Przekonanie, że rozum nie jest jedynym ani najważniejszym źródłem poznania. Romantycy cenili uczucie, intuicję, sen i mistyczne doświadczenie jako drogi do głębszej prawdy o świecie.",
  },
  Prometeizm: {
    epoka: "Romantyzm",
    opis: "Postawa buntu przeciwko Bogu lub losowi w imię dobra ludzkości. Romantyczny bohater prometejski — jak Konrad z Dziadów — gotów walczyć z samym Bogiem o wolność uciśnionego narodu.",
  },
  Werteryzm: {
    epoka: "Romantyzm",
    opis: "Postawa inspirowana Cierpieniami młodego Wertera Goethego. Oznaczała skrajną wrażliwość, miłosne uniesienie, konflikt z otoczeniem i skłonność do melancholii — bohater niezrozumiany przez świat.",
  },
  Ludowość: {
    epoka: "Romantyzm",
    opis: "Zainteresowanie kulturą, pieśniami i wierzeniami ludu jako źródłem narodowej tożsamości i poetyckiej inspiracji. Mickiewicz w Balladach i romansach czerpał z białoruskich podań i legend.",
  },
  "Walka za wolność": {
    epoka: "Romantyzm",
    opis: "Centralna wartość polskiego romantyzmu — literatura była bronią i wezwaniem do walki o niepodległość. Mickiewicz, Słowacki i Krasiński byli duchowymi przywódcami narodu pod zaborami.",
  },

  // Pozytywizm
  "Praca organiczna": {
    epoka: "Pozytywizm",
    opis: "Hasło polskich pozytywistów: zamiast zbrojnych powstań — systematyczna praca nad rozwojem gospodarki, oświaty i nauki. Społeczeństwo jak organizm — każda jego część musi być zdrowa i pracować.",
  },
  Scjentyzm: {
    epoka: "Pozytywizm",
    opis: "Przekonanie, że jedyną prawdziwą wiedzą jest wiedza naukowa oparta na faktach i doświadczeniu. Nauka miała zastąpić religię i metafizykę jako fundament poznania i postępu społecznego.",
  },
  Realizm: {
    epoka: "Pozytywizm",
    opis: "Nurt literacki dążący do wiernego, obiektywnego odtworzenia rzeczywistości. Wielka powieść realistyczna — Prus, Orzeszkowa, Sienkiewicz — portretowała społeczeństwo bez romantycznych upiększeń.",
  },
  Emancypacja: {
    epoka: "Pozytywizm",
    opis: "Dążenie do równouprawnienia kobiet w edukacji, pracy i życiu publicznym. Orzeszkowa w Marcie i Na prowincji, Prus w Emancypantkach — literatura aktywnie wspierała prawa kobiet.",
  },
  Ewolucjonizm: {
    epoka: "Pozytywizm",
    opis: "Teoria Darwina o ewolucji gatunków przeniesiona na grunt społeczny (Herbert Spencer). Społeczny darwinizm głosił, że silniejsi wygrywają w walce o byt — co budziło zarówno zachwyt, jak i sprzeciw.",
  },

  // Młoda Polska
  Dekadentyzm: {
    epoka: "Młoda Polska",
    opis: "Postawa schyłkowa: poczucie wyczerpania cywilizacji, zmęczenia życiem i beznadziei. Wyraz kryzysu wartości na przełomie XIX i XX w. Dekadent gardził mieszczańskim optymizmem i kultem postępu.",
  },
  Symbolizm: {
    epoka: "Młoda Polska",
    opis: "Kierunek artystyczny używający symboli do wyrażenia treści nieuchwytnych dla rozumu — stanów duszy, przeczuć, nastrojów. Poezja symbolistyczna była muzyczna, wieloznaczna i odchodziła od dosłowności.",
  },
  "Fin de siècle": {
    epoka: "Młoda Polska",
    opis: "Koniec wieku — nastrój zmierzchu i kryzysu cechujący kulturę przełomu XIX i XX w. Poczucie, że stara cywilizacja się wyczerpała, połączone z niepokojem przed nieznaną przyszłością.",
  },
  "L'art pour l'art": {
    epoka: "Młoda Polska",
    opis: "Sztuka dla sztuki — hasło głoszące, że sztuka jest wartością samą w sobie i nie powinna służyć żadnym celom dydaktycznym ani społecznym. Bunt przeciwko pozytywistycznej użyteczności literatury.",
  },
  Secesja: {
    epoka: "Młoda Polska",
    opis: "Styl artystyczny przełomu XIX i XX w. charakteryzujący się organicznymi, płynącymi liniami, motywami roślinnymi i ornamentalnością. W Polsce zdominował architekturę Krakowa i grafikę Wyspiańskiego.",
  },
  Nietzscheanizm: {
    epoka: "Młoda Polska",
    opis: "Wpływ filozofii Fryderyka Nietzschego na literaturę. Idea nadczłowieka, wola mocy, odrzucenie moralności chrześcijańskiej jako 'moralności niewolników' — fascynowały i prowokowały młodopolskich twórców.",
  },

  // 20-lecie
  Awangarda: {
    epoka: "20-lecie międzywojenne",
    opis: "Ruchy artystyczne zrywające z tradycją i szukające nowych form. Krakowska Awangarda (Peiper, Przyboś) głosiła: miasto, masa, maszyna. Poezja miała być zwięzła, metaforyczna i nowoczesna.",
  },
  Skamander: {
    epoka: "20-lecie międzywojenne",
    opis: "Grupa poetycka (Tuwim, Lechoń, Słonimski, Wierzyński, Iwaszkiewicz) odcinająca się od romantycznego patosu. Głosiła radość życia, codzienność i prostotę — poezja miała być bliska zwykłemu człowiekowi.",
  },
  Futuryzm: {
    epoka: "20-lecie międzywojenne",
    opis: "Awangardowy ruch gloryfikujący prędkość, technikę i miasto. Polscy futuryści (Jasieński, Stern) eksperymentowali z ortografią i typografią, chcąc całkowicie zerwać z literacką tradycją.",
  },
  Katastrofizm: {
    epoka: "20-lecie międzywojenne",
    opis: "Nurt przepowiadający nieuchronną zagładę cywilizacji europejskiej. Witkacy, Miłosz, Czechowicz czuli nadchodzącą katastrofę — II wojna światowa potwierdziła te przeczucia w tragiczny sposób.",
  },
  Ekspresjonizm: {
    epoka: "20-lecie międzywojenne",
    opis: "Nurt wyrażający subiektywne, intensywne stany emocjonalne przez deformację i przesadę. W literaturze oznaczał krzyk, bunt i protest przeciwko rzeczywistości — silny zwłaszcza w dramacie.",
  },
  Surrealizm: {
    epoka: "20-lecie międzywojenne",
    opis: "Ruch artystyczny czerpiący z podświadomości i snów. Wywodzący się od Bretona surrealizm dążył do uwolnienia wyobraźni od kontroli rozumu. W Polsce bliski mu był oniryczny świat Brunona Schulza.",
  },

  // II Wojna Światowa
  "Pokolenie Kolumbów": {
    epoka: "Literatura II Wojny Światowej",
    opis: "Roczniki 1918–1926, które wchodziły w dorosłość w czasie II wojny światowej. Odkryli wolną Polskę, by zaraz walczyć o jej przetrwanie. Baczyński, Gajcy, Stroiński — większość zginęła przed 25. rokiem życia.",
  },
  Holokaust: {
    epoka: "Literatura II Wojny Światowej",
    opis: "Zagłada Żydów europejskich przez nazistowskie Niemcy — 6 milionów ofiar. Literatura Holokaustu (Borowski, Nałkowska, Levi) próbuje dać świadectwo temu, co wymykało się wszelkim pojęciom i językom.",
  },
  Świadectwo: {
    epoka: "Literatura II Wojny Światowej",
    opis: "Funkcja literatury wojennej: zapisanie prawdy o tym, co się wydarzyło, by ocalić od zapomnienia. Borowski, Nałkowska, Herling-Grudziński czuli moralny obowiązek świadczenia — nawet za cenę spokoju ducha.",
  },
  "Lagrowa proza": {
    epoka: "Literatura II Wojny Światowej",
    opis: "Literatura obozowa opisująca doświadczenie życia w nazistowskich obozach koncentracyjnych lub sowieckich łagrach. Cechuje ją zimny, rzeczowy styl — bo tylko tak można oddać nieludzką rzeczywistość.",
  },
  Apokalipsa: {
    epoka: "Literatura II Wojny Światowej",
    opis: "Motyw literacki końca świata, obecny intensywnie w poezji wojennej. Baczyński pisał o 'pokoleniu apokalipsy', dla którego zniszczenie i śmierć stały się codziennością — i który musiał tworzyć pośród zgliszcz.",
  },
  Konspiracja: {
    epoka: "Literatura II Wojny Światowej",
    opis: "Podziemna działalność kulturalna i literacka w czasie okupacji. W Warszawie działały tajne komplety, wydawnictwa, teatry. Literatura konspiracyjna była aktem oporu — słowo jako broń przeciwko okupantowi.",
  },

  // PRL
  Socrealizm: {
    epoka: "Literatura PRL",
    opis: "Oficjalny styl artystyczny narzucony przez komunistów po 1949 roku. Literatura miała gloryfikować partię, klasę robotniczą i budownictwo socjalizmu. Artyści, którzy mu ulegli, często żałowali tego do końca życia.",
  },
  Cenzura: {
    epoka: "Literatura PRL",
    opis: "Instytucjonalna kontrola treści wydawanych w PRL przez Główny Urząd Kontroli Prasy. Cenzorzy mogli usuwać, zmieniać lub zakazywać publikacji. Pisarze uczyli się pisać 'między wierszami'.",
  },
  Emigracja: {
    epoka: "Literatura PRL",
    opis: "Literatura tworzona poza Polską przez pisarzy, którzy nie mogli lub nie chcieli wracać do kraju rządzonego przez komunistów. Paryska Kultura Giedroycia była oknem na świat dla polskiej inteligencji.",
  },
  "Ezopowy język": {
    epoka: "Literatura PRL",
    opis: "Technika pisania aluzjami, metaforami i wieloznacznością, by przemycić treści zakazane przez cenzurę. Herbert pisząc o Panu Cogito, mówił o godności w czasach zniewolenia — cenzorzy rozumieli, ale nie mogli zakazać.",
  },
  "Nowa Fala": {
    epoka: "Literatura PRL",
    opis: "Pokolenie poetów lat 60./70. (Barańczak, Zagajewski, Kornhauser) odrzucające nowomowę i żądające mówienia wprost o rzeczywistości PRL. Ich manifest 'Świat nie przedstawiony' był literackim aktem oporu.",
  },
  Opór: {
    epoka: "Literatura PRL",
    opis: "Postawa wielu pisarzy PRL-u wobec systemu komunistycznego — od subtelnej aluzji do jawnego protestu. Herbert, Miłosz, Szymborska — każdy na swój sposób zachowywał godność i niezależność ducha.",
  },

  // Współczesna
  Postmodernizm: {
    epoka: "Literatura współczesna",
    opis: "Nurt kwestionujący wielkie narracje i prawdy absolutne. Literatura postmodernistyczna bawi się konwencjami, miesza style, ironizuje i podkreśla, że każda opowieść to tylko jedna z możliwych wersji rzeczywistości.",
  },
  Nobel: {
    epoka: "Literatura współczesna",
    opis: "Nagroda Nobla w dziedzinie literatury przyznana Polakom: Henryk Sienkiewicz (1905), Władysław Reymont (1924), Czesław Miłosz (1980), Wisława Szymborska (1996), Olga Tokarczuk (2018).",
  },
  Feminizm: {
    epoka: "Literatura współczesna",
    opis: "Nurt literacki i krytyczny badający reprezentację kobiet w kulturze i walczący o ich równouprawnienie. Tokarczuk, Masłowska, Gretkowska — polskie pisarki redefiniują kobiece doświadczenie w literaturze.",
  },
  Ekokrytyka: {
    epoka: "Literatura współczesna",
    opis: "Badanie związków między literaturą a środowiskiem naturalnym. Tokarczuk w Prowadź swój pług przez kości umarłych czyni z ekologii temat moralny i polityczny — prawa zwierząt jako kwestia humanizmu.",
  },
  Tożsamość: {
    epoka: "Literatura współczesna",
    opis: "Centralne zagadnienie współczesnej prozy: kim jestem, skąd pochodzę, do jakiej wspólnoty należę? Tokarczuk bada tożsamość przez podróż i granice; Stasiuk przez prowincję i Europę Środkową.",
  },
  Globalizacja: {
    epoka: "Literatura współczesna",
    opis: "Procesy integracji gospodarczej i kulturowej świata jako temat i kontekst literatury współczesnej. Polscy pisarze coraz częściej piszą do globalnej publiczności, a świat czyta polską literaturę w przekładach.",
  },
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
    keywords: [
      "Logos",
      "Kalokagathia",
      "Arete",
      "Mimesis",
      "Katharsis",
      "Carpe diem",
    ],
    authors: [
      "Homer",
      "Sofokles",
      "Platon",
      "Wergiliusz",
      "Horacy",
      "Owidiusz",
    ],
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
    keywords: [
      "Teocentryzm",
      "Danse macabre",
      "Scholastyka",
      "Asceza",
      "Memento mori",
      "Anonimowość",
    ],
    authors: [
      "Gall Anonim",
      "Wincenty Kadłubek",
      "Dante Alighieri",
      "François Villon",
      "Jan Długosz",
    ],
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
    keywords: [
      "Humanizm",
      "Carpe diem",
      "Antropocentryzm",
      "Horacjanizm",
      "Reformacja",
      "Fortuna",
    ],
    authors: [
      "Jan Kochanowski",
      "Mikołaj Rej",
      "A. Frycz Modrzewski",
      "Szekspir",
      "Erazm z Rotterdamu",
    ],
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
    keywords: [
      "Vanitas",
      "Theatrum mundi",
      "Koncept",
      "Kontrreformacja",
      "Sarmatyzm",
      "Marinizm",
    ],
    authors: [
      "Jan Andrzej Morsztyn",
      "Wacław Potocki",
      "Daniel Naborowski",
      "Calderon",
      "Molier",
    ],
  },
  {
    id: "oswiecenie",
    name: "Oświecenie",
    period: "koniec XVII – koniec XVIII w.",
    duration: "Europa: ~80 lat · Polska: ~60 lat",
    type: "racjonalistyczna",
    ...KOLOR_RACJONALIZM,
    icon: "△",
    shift:
      "Rewolucja Francuska, rozbiory Polski, romantyczne przebudzenie narodów",
    shiftNote: "uczucie i naród zastępują rozum i kosmopolityzm",
    description:
      "Wiek rozumu, encyklopedystów i rewolucji. Wolter, Rousseau, Monteskiusz kwestionowali autorytet Kościoła i gloryfikowali naukę. W Polsce czasy stanisławowskie: Teatr Narodowy, reformy Kołłątaja. Ignacy Krasicki pisał zjadliwe satyry i bajki. Konstytucja 3 Maja (1791) — najpiękniejszy owoc oświeceniowych idei — i początkiem końca niepodległości.",
    keywords: [
      "Ratio",
      "Empiryzm",
      "Deizm",
      "Encyklopedyzm",
      "Klasycyzm",
      "Utylitaryzm",
    ],
    authors: [
      "Ignacy Krasicki",
      "Julian U. Niemcewicz",
      "Stanisław Staszic",
      "Wolter",
      "Jean-Jacques Rousseau",
    ],
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
    keywords: [
      "Mesjanizm",
      "Irracjonalizm",
      "Prometeizm",
      "Werteryzm",
      "Ludowość",
      "Walka za wolność",
    ],
    authors: [
      "Adam Mickiewicz",
      "Juliusz Słowacki",
      "Zygmunt Krasiński",
      "Cyprian K. Norwid",
      "George Byron",
    ],
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
    keywords: [
      "Praca organiczna",
      "Scjentyzm",
      "Realizm",
      "Utylitaryzm",
      "Emancypacja",
      "Ewolucjonizm",
    ],
    authors: [
      "Bolesław Prus",
      "Eliza Orzeszkowa",
      "H. Sienkiewicz",
      "Maria Konopnicka",
      "A. Dygasiński",
    ],
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
    keywords: [
      "Dekadentyzm",
      "Symbolizm",
      "Fin de siècle",
      "L'art pour l'art",
      "Secesja",
      "Nietzscheanizm",
    ],
    authors: [
      "Stanisław Wyspiański",
      "K. Przerwa-Tetmajer",
      "Leopold Staff",
      "Stefan Żeromski",
      "W. Reymont",
    ],
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
    keywords: [
      "Awangarda",
      "Skamander",
      "Futuryzm",
      "Katastrofizm",
      "Ekspresjonizm",
      "Surrealizm",
    ],
    authors: [
      "Julian Tuwim",
      "Bruno Schulz",
      "Witold Gombrowicz",
      "Bolesław Leśmian",
      "Witkacy",
    ],
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
    keywords: [
      "Pokolenie Kolumbów",
      "Holokaust",
      "Świadectwo",
      "Lagrowa proza",
      "Apokalipsa",
      "Konspiracja",
    ],
    authors: [
      "K.K. Baczyński",
      "Tadeusz Borowski",
      "G. Herling-Grudziński",
      "Zofia Nałkowska",
      "Cz. Miłosz",
    ],
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
    keywords: [
      "Socrealizm",
      "Cenzura",
      "Emigracja",
      "Ezopowy język",
      "Nowa Fala",
      "Opór",
    ],
    authors: [
      "Zbigniew Herbert",
      "Wisława Szymborska",
      "Sławomir Mrożek",
      "Tadeusz Różewicz",
      "M. Białoszewski",
    ],
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
    keywords: [
      "Postmodernizm",
      "Nobel",
      "Feminizm",
      "Ekokrytyka",
      "Tożsamość",
      "Globalizacja",
    ],
    authors: [
      "Olga Tokarczuk",
      "Wisława Szymborska",
      "Andrzej Stasiuk",
      "Jacek Dukaj",
      "Dorota Masłowska",
    ],
  },
];

// ============================================================
// ADAPTER — konwertuje epoki z historyData.js do formatu
// używanego przez LiteraryEpochs
//
// Używa wpisów z historyData które mają id kończące się na "-3"
// (czyli epoki zdefiniowane dla grupy 3).
//
// Aby przełączyć źródło danych w LiteraryEpochs, zamień:
//   import { epoki, ... } from "./epoki.js"
// na:
//   import { epokiZHistoryData as epoki, ... } from "./epoki.js"
// ============================================================

import { historyData } from "../data/historyData";

// Mapowanie nazwy epoki na motyw kolorystyczny
const MOTYWY = {
  racjonalistyczna: { ...KOLOR_RACJONALIZM, type: "racjonalistyczna" },
  irracjonalistyczna: { ...KOLOR_IRRACJONALIZM, type: "irracjonalistyczna" },
};

// Epoki racjonalistyczne — na podstawie nazwy
const EPOKI_RACJONALISTYCZNE = new Set([
  "antyk",
  "renesans",
  "oświecenie",
  "pozytywizm",
  "20-lecie",
  "literatura współczesna",
]);

function wyznaczMotyw(nazwa) {
  const lower = nazwa.toLowerCase();
  for (const klucz of EPOKI_RACJONALISTYCZNE) {
    if (lower.includes(klucz)) return MOTYWY.racjonalistyczna;
  }
  return MOTYWY.irracjonalistyczna;
}

// Konwertuje pojedynczy wpis z historyData do formatu LiteraryEpochs
function adaptujEpoke(wpis) {
  const motyw = wyznaczMotyw(wpis.name);

  return {
    id: wpis.id,
    name: wpis.name,
    period: wpis.period ?? "",
    duration: "",
    ...motyw,
    icon: wpis.icon ?? "◉",
    shift: wpis.shift ?? null,
    shiftNote: wpis.shiftNote ?? null,
    description: wpis.description ?? "",

    // keywords w historyData to tablica obiektów { name, desc }
    // LiteraryEpochs potrzebuje tablicy stringów
    keywords: (wpis.keywords ?? []).map((k) =>
      typeof k === "string" ? k : k.name
    ),

    authors: wpis.authors ?? [],
  };
}

// Gotowa lista epok z historyData (tylko wpisy kończące się na "-3")
export const epokiZHistoryData = historyData
  .filter((wpis) => wpis.id?.endsWith("-3"))
  .map(adaptujEpoke);
