import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '', consent: true })
  const [status, setStatus] = useState(null)

  const onChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Request failed')
      const data = await res.json()
      setStatus('sent')
      setForm({ name: '', email: '', phone: '', subject: '', message: '', consent: true })
    } catch (e) {
      console.error(e)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Contact</h2>
        <p className="mt-2 text-slate-300">For bookings, flash drops, or collabs in Barcelona</p>

        <form onSubmit={onSubmit} className="mt-8 grid md:grid-cols-2 gap-4 bg-white/5 p-6 rounded-2xl border border-white/10">
          <input className="px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white placeholder-slate-400" placeholder="Name" name="name" value={form.name} onChange={onChange} required />
          <input className="px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white placeholder-slate-400" placeholder="Email" type="email" name="email" value={form.email} onChange={onChange} required />
          <input className="px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white placeholder-slate-400" placeholder="Phone/WhatsApp" name="phone" value={form.phone} onChange={onChange} />
          <input className="px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white placeholder-slate-400" placeholder="Subject" name="subject" value={form.subject} onChange={onChange} />
          <textarea className="md:col-span-2 px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white placeholder-slate-400 min-h-[120px]" placeholder="Message" name="message" value={form.message} onChange={onChange} required />
          <label className="md:col-span-2 flex items-center gap-3 text-slate-300">
            <input type="checkbox" name="consent" checked={form.consent} onChange={onChange} className="w-4 h-4" />
            I agree to be contacted about my inquiry.
          </label>
          <div className="md:col-span-2 flex items-center gap-3">
            <button className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white disabled:opacity-60" disabled={status==='sending'}>
              {status==='sending' ? 'Sending…' : 'Send Message'}
            </button>
            {status==='sent' && <span className="text-emerald-400">Sent! I’ll get back to you soon.</span>}
            {status==='error' && <span className="text-red-400">Something went wrong. Try again.</span>}
          </div>
        </form>
      </div>
    </section>
  )
}
