import { useState } from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import EpokiPage from "../../grupa-1/EpokiPage";
import MapaDorobku from "../../grupa-3/MapaDorobku";
import Asyn from "../../grupa-2/Asyn";
import Gr4 from "../../grupa-4/Gr4";

function App() {
  const [activeGroup, setActiveGroup] = useState(null);

  const renderContent = () => {
    if (activeGroup === 1) return <EpokiPage />;
    if (activeGroup === 2) return <Asyn />;
    if (activeGroup === 3) return <MapaDorobku />;
    if (activeGroup === 4) return <Gr4 />;
    return <Home />;
  };

  return (
    <Layout activeGroup={activeGroup} setActiveGroup={setActiveGroup}>
      {renderContent()}
    </Layout>
  );
}

export default App;
