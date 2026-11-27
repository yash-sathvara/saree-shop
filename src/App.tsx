import { HeroSection } from './components/hero/HeroSection'
import { Navbar } from './components/hero/Navbar'
import { TryTheLookSection } from './components/lookbook/TryTheLookSection'
import { SixMoodsSection } from './components/moods/SixMoodsSection'
import { CartProvider } from './context/CartContext'

export function App() {
  return (
    <CartProvider>
      <div className="noolam-app">
        <Navbar />
        <main>
          <HeroSection />
          <SixMoodsSection />
          <TryTheLookSection />
        </main>
      </div>
    </CartProvider>
  )
}

export default App
