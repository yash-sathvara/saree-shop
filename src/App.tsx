import { HeroSection } from './components/hero/HeroSection'
import { Navbar } from './components/hero/Navbar'
import { SixMoodsSection } from './components/moods/SixMoodsSection'

export function App() {
  return (
    <div className="noolam-app">
      <Navbar />
      <main>
        <HeroSection />
        <SixMoodsSection />
      </main>
    </div>
  )
}

export default App
