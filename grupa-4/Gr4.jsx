import Layout from "./components/Layout.jsx";
import Entry from "./components/Wpisy.jsx";
import { historyData } from "../data/historyData.js";

function Gr4() {
  const poland = historyData.filter((item) =>
    item.country?.toLowerCase().includes("polska")
  );

  const europe = historyData.filter((item) =>
    item.country?.toLowerCase().includes("europa")
  );

  return (
    <Layout
      polandContent={
        poland.length === 0 ? (
          <div>Brak danych</div>
        ) : (
          poland.map((item, i) => <Entry key={item.id} item={item} side="pl" />)
        )
      }
      europeContent={
        europe.length === 0 ? (
          <div>Brak danych</div>
        ) : (
          europe.map((item, i) => <Entry key={item.id} item={item} side="eu" />)
        )
      }
    />
  );
}

export default Gr4;
