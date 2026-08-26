import { Companies } from './components/Companies'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Skills } from './components/Skills'

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Gallery />
      <main className="flex-1">
        <Companies />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
