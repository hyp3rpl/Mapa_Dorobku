import Header from "./Header"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import "../layout.css"

function Layout({ children }) {
  return (
    <div className="app">

      <Header />

      <div className="content">

        <Sidebar />

        <main className="main">
          {children}
        </main>

      </div>

      <Footer />

    </div>
  )
}

export default Layout