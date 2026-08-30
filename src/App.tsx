import { Arcade } from './components/Arcade'
import { Companies } from './components/Companies'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Hero } from './components/Hero'
import { Skills } from './components/Skills'

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="grain" aria-hidden="true" />
      <Hero />
      <main className="flex-1">
        <Gallery />
        <Companies />
        <Skills />
        <Arcade />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
