import { useEffect, useState } from 'react'

export default function Gallery() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/gallery`)
        const data = await res.json()
        setItems(data.items || [])
      } catch (e) {
        console.error(e)
      }
    }
    load()
  }, [])

  return (
    <section id="gallery" className="py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Photo Gallery</h2>
          <p className="text-slate-400">Latest work and healed tattoos</p>
        </div>
        <div className="mt-8 columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]
                        *:break-inside-avoid">
          {items.map((g, i) => (
            <div key={i} className="mb-4 overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white/5">
              <img src={g.image_url} alt={g.title || 'gallery'} className="w-full h-auto object-cover" />
              {g.title && (<div className="p-3 text-slate-200 text-sm">{g.title}</div>)}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
