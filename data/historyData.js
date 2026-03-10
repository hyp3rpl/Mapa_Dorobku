export const historyData = [
  {
    id: "pocz-romantyzmu-europa-gr4",
    type: "event", // "event" | "work" | "trend" | "epoch"

    title: {
      full: "Początek romantyzmu w Europie",
      short: "PRWE"
    },

    time: {
      start: "1789",     // "1944-08-01" lub "1834"
      end: null,     // null jeśli wydarzenie punktowe
      label: "1789-1848"      // np. "1832-1864"
    },

    country: "Europa",

    categories: ["hisoria", "literatura", "romantyzm"],  // np. ["historia", "literatura"]
    tags: ["romantyzm", "rewolucja", "historia", "literatura", "Mickiewicz", "Słowacki"],        // np. ["romantyzm", "rewolucja"]

    layers: {
      geographic: 4, // 0-5
      social: 3,
      economic: 0,
      mental: 5
    },

    dimensions: {
      psychologicalTime: "",
      technicalLevel: "",
      globalContext: ""
    },

    media: {
      image: "https://skupszop.pl/storage/images/blog/42edccea3971c687ef4fc2dbf6e27b52.jpeg",   // ścieżka do pliku lub URL
      video: ""    // ścieżka do pliku lub URL
    },

    relations: [
      {
        targetId: "", 
        type: "influenced_by" 
        // "influenced_by" | "influenced" | "part_of" | "inspired" | "parallel"
      }
    ],

    tree: {
      parentId: null // id elementu nadrzędnego (dla drzewa rozwoju)
    },

    description: "Romantyzm w Europie był epoką w kulturze i literaturze, która rozwinęła się pod koniec XVIII i w pierwszej połowie XIX wieku. Powstał jako reakcja na racjonalizm oświecenia i był związany z wielkimi przemianami połecznymi, zwłaszcza z wydarzeniami takimi jak Rewolucja Francuska i późniejsza Wiosna Ludów. W romantyzmie zaczęto podkreślać uczucia, wyobraźnię, wolność jednostki i tajemniczość świata. Artyści często inspirowali się naturą, historią oraz kulturą ludową. W literaturze pojawił się bohater romantyczny – samotny, buntujący się przeciw światu i kierujący się emocjami. Epoka ta rozwijała się w wielu krajach Europy, a jej ważnymi twórcami byli m.in. Johann Wolfgang von Goethe, George Gordon Byron oraz Victor Hugo."
  },
  {
    id: "pocz-romantyzmu-polska-gr4",
    type: "event", // "event" | "work" | "trend" | "epoch"

    title: {
      full: "Początek romantyzmu w Europie",
      short: "PRWP"
    },

    time: {
      start: "1822",     // "1944-08-01" lub "1834"
      end: null,     // null jeśli wydarzenie punktowe
      label: "1822-1863"      // np. "1832-1864"
    },

    country: "Polsza",

    categories: ["hisoria", "literatura", "romantyzm"],  // np. ["historia", "literatura"]
    tags: ["romantyzm", "rewolucja", "historia", "literatura", "Mickiewicz", "Słowacki"],        // np. ["romantyzm", "rewolucja"]

    layers: {
      geographic: 4, // 0-5
      social: 3,
      economic: 0,
      mental: 5
    },

    dimensions: {
      psychologicalTime: "",
      technicalLevel: "",
      globalContext: ""
    },

    media: {
      image: "https://wydawnictwowam.pl/sites/default/files/styles/full_size/public/paste_1669981524_0.png",   // ścieżka do pliku lub URL
      video: ""    // ścieżka do pliku lub URL
    },

    relations: [
      {
        targetId: "", 
        type: "influenced_by" 
        // "influenced_by" | "influenced" | "part_of" | "inspired" | "parallel"
      }
    ],

    tree: {
      parentId: null // id elementu nadrzędnego (dla drzewa rozwoju)
    },

    description: "Romantyzm w Polsce trwał od 1822 do 1863 roku. Za jego początek uznaje się wydanie zbioru Ballady i romanse autorstwa Adam Mickiewicz. Epoka ta była silnie związana z walką o niepodległość po rozbiorach Polski. W literaturze romantycznej pojawił się patriotyzm, motyw poświęcenia dla ojczyzny oraz bohater romantyczny. Ważnymi twórcami byli m.in. Adam Mickiewicz, Juliusz Słowacki i Zygmunt Krasiński. Na twórczość pisarzy duży wpływ miały wydarzenia historyczne, np. Powstanie listopadowe. Romantyzm w Polsce zakończył się w czasie Powstanie styczniowe w 1863 roku."
  },
  {
    id: "adam-mickieiwcz-gr4",
    type: "event", // "event" | "work" | "trend" | "epoch"

    title: {
      full: "Życie Adama Mickiewicza",
      short: "Adamek nigga"
    },

    time: {
      start: "1798",     // "1944-08-01" lub "1834"
      end: "1855",     // null jeśli wydarzenie punktowe
      label: "1798-1855"      // np. "1832-1864"
    },

    country: "Polska",

    categories: ["hisoria", "literatura", "romantyzm"],  // np. ["historia", "literatura"]
    tags: ["romantyzm", "historia", "literatura", "Mickiewicz"],        // np. ["romantyzm", "rewolucja"]

    layers: {
      geographic: 0, // 0-5
      social: 3,
      economic: 0,
      mental: 5
    },

    dimensions: {
      psychologicalTime: "",
      technicalLevel: "",
      globalContext: ""
    },

    media: {
      image: "hhttps://rynekisztuka.pl/wp-content/uploads/2014/09/adam_mickiewicz.png",   // ścieżka do pliku lub URL
      video: ""    // ścieżka do pliku lub URL
    },

    relations: [
      {
        targetId: "pocz-romantyzmu-polska-gr4", 
        type: "part_of" 
        // "influenced_by" | "influenced" | "part_of" | "inspired" | "parallel"
      }
    ],

    tree: {
      parentId: null // id elementu nadrzędnego (dla drzewa rozwoju)
    },

    description: "RAdam Mickiewicz (1798–1855) był jednym z najważniejszych polskich poetów epoki romantyzmu. Urodził się w 1798 roku w Nowogródku. W swojej twórczości często poruszał tematy patriotyzmu, wolności i miłości do ojczyzny. Był autorem wielu znanych utworów, m.in. Ballady i romanse, Dziady oraz Pan Tadeusz. Wydanie Ballad i romansów w 1822 roku uznaje się za początek romantyzmu w Polsce. Mickiewicz przez wiele lat żył na emigracji, ponieważ po wydarzeniach takich jak Powstanie listopadowe wielu polskich twórców nie mogło wrócić do kraju. Zmarł w 1855 roku w Konstantynopolu."
  }
];