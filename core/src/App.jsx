import { useState } from "react"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import EpokiPage from '../../grupa-1/EpokiPage'

function App() {
  const [activeGroup, setActiveGroup] = useState(null)

  const renderContent = () => {
    if (activeGroup === 1) return <EpokiPage />
    return <Home />
  }

  return (
    <Layout activeGroup={activeGroup} setActiveGroup={setActiveGroup}>
      {renderContent()}
    </Layout>
  )
}

export default App