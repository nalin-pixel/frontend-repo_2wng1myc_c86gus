import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Reviews from './components/Reviews'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 relative">
      <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_50%_-10%,rgba(34,211,238,0.15),transparent),radial-gradient(800px_500px_at_40%_120%,rgba(217,70,239,0.15),transparent)]" />
      <header className="relative z-10">
        <nav className="max-w-7xl mx-auto px-6 sm:px-8 py-6 flex items-center justify-between">
          <a href="#" className="text-white font-black tracking-tight text-xl">BCN Ink</a>
          <div className="hidden md:flex items-center gap-6 text-slate-300">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#products" className="hover:text-white">Products</a>
            <a href="#reviews" className="hover:text-white">Reviews</a>
            <a href="#gallery" className="hover:text-white">Gallery</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </nav>
      </header>

      <main className="relative z-10">
        <Hero />
        <About />
        <Products />
        <Reviews />
        <Gallery />
        <Contact />
      </main>

      <footer className="relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-10 flex flex-col md:flex-row items-center md:items-end justify-between gap-4">
          <p className="text-slate-400">© {new Date().getFullYear()} Barcelona Ink — All rights reserved.</p>
          <p className="text-slate-500 text-sm">Made with love in Barcelona, Spain</p>
        </div>
      </footer>
    </div>
  )
}

export default App
