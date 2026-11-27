import { HeroSection } from './components/hero/HeroSection'
import { Navbar } from './components/hero/Navbar'

export function App() {
  return (
    <div className="noolam-app">
      <Navbar />
      <main>
        <HeroSection />
      </main>
    </div>
  )
}

export default App
