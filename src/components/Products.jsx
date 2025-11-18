import { useEffect, useState } from 'react'

export default function Products() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/products`)
        const data = await res.json()
        setItems(data.items || [])
      } catch (e) {
        console.error(e)
      }
    }
    load()
  }, [])

  return (
    <section id="products" className="py-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Products</h2>
          <a href="#contact" className="text-sm text-cyan-300 hover:text-cyan-200">Need a custom? Let's chat →</a>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <div key={i} className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-fuchsia-500/10 transition">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image_url} alt={p.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition" />
              </div>
              <div className="p-5 text-slate-200">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-white">{p.title}</h3>
                  <span className="text-cyan-300">€{Number(p.price).toFixed(2)}</span>
                </div>
                <p className="mt-2 text-sm text-slate-400 line-clamp-2">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
