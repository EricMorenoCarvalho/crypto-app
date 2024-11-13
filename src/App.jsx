import Home from './pages/Home'
import Header from "./components/Header"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Route, Routes } from "react-router-dom"

const App = () => {
  const location = useLocation()

  useEffect(() => {
    let title = 'Crypto Platform'
    switch (location.pathname) {
      case '/':
        title = title + ' | Home'
        break
    }
    document.title = title
  }, [location.pathname])

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App