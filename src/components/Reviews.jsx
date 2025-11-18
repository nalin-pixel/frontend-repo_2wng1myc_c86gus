import { useEffect, useState } from 'react'

export default function Reviews() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/reviews`)
        const data = await res.json()
        setItems(data.items || [])
      } catch (e) {
        console.error(e)
      }
    }
    load()
  }, [])

  return (
    <section id="reviews" className="py-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Client Reviews</h2>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((r, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <img src={r.avatar_url} alt={r.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="text-white font-medium">{r.name}</p>
                  <div className="text-amber-300">{'★'.repeat(r.rating)}{'☆'.repeat(5-r.rating)}</div>
                </div>
              </div>
              <p className="mt-4 text-slate-300">{r.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
