import { Companies } from './components/Companies'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Skills } from './components/Skills'

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Companies />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
