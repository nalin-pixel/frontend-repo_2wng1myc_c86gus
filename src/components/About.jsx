export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2">
            <div className="aspect-square rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1611171712559-7f7a8f85709c?q=80&w=1200&auto=format&fit=crop"
                alt="Artist portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-3">
            <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              I'm a tattoo artist focused on bold blackwork and clean color pieces.
              Based in Barcelona, I pull inspiration from Mediterranean architecture, skate culture,
              and classic tattoo flash. Every piece is designed to age beautifully.
            </p>
            <div className="mt-6 grid sm:grid-cols-3 gap-3">
              {["Blackwork", "Neo-Trad", "Fineline"].map((tag) => (
                <div key={tag} className="text-center px-4 py-2 rounded-full border border-white/10 text-slate-200 bg-white/5">
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
