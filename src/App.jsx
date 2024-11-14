import Home from './pages/Home'
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import AllCryptos from './pages/AllCryptos'
import TradeCryptos from './pages/TradeCryptos'
import UserWallet from './pages/UserWallet'
import ScrollToTop from "./components/utils/ScrollToTop"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Route, Routes } from "react-router-dom"
import Contact from './pages/Contact'
import UserProfile from './pages/UserProfile'
import AuthPage from './pages/AuthPage'

const App = () => {
  const location = useLocation()

  useEffect(() => {
    let title = 'Crypto Platform'
    switch (location.pathname) {
      case '/':
        title = 'Crypto Platform | Home'
        break
      case '/cryptos':
        title = 'Crypto Platform | All Cryptos'
        break
      case '/trade-cryptos':
        title = 'Crypto Platform | Trade Cryptos'
        break
      case '/my-wallet':
        title = 'Crypto Platform | My Wallet'
        break
      case '/contact':
        title = 'Crypto Platform | Contact'
        break
      case '/my-profile':
        title = 'Crypto Platform | My Profile'
        break
      case '/auth-page':
        title = 'Crypto Platform | Authentication'
        break
      default:
        title = 'Crypto Platform'
        break
    }
    document.title = title
  }, [location.pathname])

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cryptos" element={<AllCryptos />} />
        <Route path="/trade-cryptos" element={<TradeCryptos />} />
        <Route path="/my-wallet" element={<UserWallet />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-profile" element={<UserProfile />} />
        <Route path="/auth-page" element={<AuthPage />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App