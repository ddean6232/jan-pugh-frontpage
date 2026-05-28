function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-linen text-slate">
      <section className="relative min-h-screen px-6 py-8 sm:px-10 lg:px-16">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(171,132,108,0.22),_transparent_34%),linear-gradient(135deg,_#fbf6ee_0%,_#f1e4d5_52%,_#d9c8b6_100%)]" />
        <div className="absolute left-8 top-8 -z-10 h-40 w-40 rounded-full bg-sage/15 blur-3xl" />
        <div className="absolute bottom-8 right-8 -z-10 h-56 w-56 rounded-full bg-clay/20 blur-3xl" />

        <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/70 bg-white/55 px-5 py-3 shadow-soft backdrop-blur-md">
          <a className="font-serif text-xl text-forest" href="#top">Jan Pugh</a>
          <a className="rounded-full bg-forest px-5 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-sage" href="mailto:info@safehavencounselling.org">
            Reach out
          </a>
        </nav>

        <div className="mx-auto grid min-h-[calc(100vh-120px)] max-w-6xl items-center gap-12 py-14 lg:grid-cols-[1.05fr_0.95fr]">
          <section id="top" className="max-w-2xl">
            <p className="mb-5 inline-flex rounded-full border border-clay/25 bg-white/60 px-4 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-clay">
              Safe Haven Counselling
            </p>
            <h1 className="font-serif text-5xl leading-[1.02] tracking-tight text-forest sm:text-6xl lg:text-7xl">
              A softer place to land.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate/85 sm:text-xl">
              Jan Pugh offers a calm, home-like space for honest conversation, steady support, and counselling that helps you feel safe enough to begin again.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a className="rounded-full bg-forest px-7 py-4 text-center font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-sage" href="mailto:info@safehavencounselling.org">
                Book a quiet first conversation
              </a>
              <a className="rounded-full border border-forest/20 bg-white/65 px-7 py-4 text-center font-semibold text-forest shadow-soft backdrop-blur transition hover:-translate-y-0.5 hover:bg-white" href="https://www.safehavencounselling.org/jan-pugh">
                Current profile
              </a>
            </div>
          </section>

          <aside className="relative mx-auto w-full max-w-md rounded-[2rem] border border-white/70 bg-white/62 p-6 shadow-soft backdrop-blur-md">
            <div className="rounded-[1.5rem] bg-cream p-7 shadow-inner">
              <div className="mb-7 flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sage/20 text-2xl">⌂</span>
                <div>
                  <p className="font-serif text-2xl text-forest">Welcome in</p>
                  <p className="text-sm text-slate/65">Warm, private, steady.</p>
                </div>
              </div>
              <div className="space-y-4 text-left">
                <p className="rounded-2xl bg-white/75 p-5 text-slate/82 shadow-sm">
                  “You do not have to carry everything alone.”
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/55 p-4">
                    <p className="font-semibold text-forest">Gentle pace</p>
                    <p className="mt-1 text-sm text-slate/70">Move at the speed that feels right.</p>
                  </div>
                  <div className="rounded-2xl bg-white/55 p-4">
                    <p className="font-semibold text-forest">Safe space</p>
                    <p className="mt-1 text-sm text-slate/70">Be heard without judgement.</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}

export default App
