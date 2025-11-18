import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(1000px_600px_at_10%_-20%,#22d3ee_20%,transparent),radial-gradient(800px_500px_at_90%_120%,#a78bfa_20%,transparent)]" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-black tracking-tight text-white"
            >
              Barcelona Ink
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-purple-400">
                Cool Guy Aesthetic
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 text-lg text-slate-300 max-w-xl"
            >
              Modern tattoo studio in Barcelona blending bold linework with clean minimal vibes.
              Custom pieces, flash drops, and limited prints.
            </motion.p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#gallery" className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur border border-white/10 transition">
                View Gallery
              </a>
              <a href="#contact" className="px-5 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white shadow-lg shadow-fuchsia-500/20">
                Book Inquiry
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1200&auto=format&fit=crop"
                alt="Tattoo art"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur border border-white/10 text-white px-4 py-2 rounded-xl">
              Based in El Born, Barcelona
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
