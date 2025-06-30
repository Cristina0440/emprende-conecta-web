import Navbar from '../components/Navbar'
import HeroSection from './components/HeroSection'
import CategoriasSection from './components/CategoriasSection'
import TendenciasSection from './components/TendenciasSection'
import Footer from './components/Footer'
import ChatbotIcon from './components/ChatbotIcon'

export default function HomePage() {
  return (
    <>
      <Navbar usuario="Rosmeri Ccanto Flores" />
      <HeroSection />
      <CategoriasSection />
      <TendenciasSection />
      <Footer />
      <ChatbotIcon />
    </>
  )
}
