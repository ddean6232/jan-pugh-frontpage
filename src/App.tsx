const expertise = [
  "Couples counselling",
  "Generalized anxiety",
  "Anxiety related to past trauma",
  "Decision-making, hesitation and avoidance",
  "Mild to moderate depression",
  "PTSD",
  "Medically stable and sub-clinical eating disorders",
  "Unease in relationships and marital issues",
]

const modalities = [
  "EMDR",
  "Dialectical Behavioural Therapy (DBT)",
  "Cognitive Behavioural Therapy (CBT)",
  "Mindfulness-based Stress Reduction",
  "Emotionally Focused Therapy",
  "The Gottman Method for couples",
]

const qualifications = [
  "Master of Arts in Counselling Psychology from Yorkville University",
  "Registered Provisional Psychologist with the College of Alberta Psychologists",
  "Baccalaureate of Nursing from the University of Calgary",
  "Registered Nurse with over 25 years of experience",
  "Internship completed at Calgary Counselling Centre",
  "Nursing Instructor at Mount Royal University",
]

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-linen text-slate">
      <section className="relative px-6 py-8 sm:px-10 lg:px-16">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(178,119,115,0.22),_transparent_35%),linear-gradient(135deg,_#fbf4ee_0%,_#f4ded4_52%,_#dec0b5_100%)]" />
        <div className="absolute left-8 top-8 -z-10 h-40 w-40 rounded-full bg-sage/20 blur-3xl" />
        <div className="absolute bottom-8 right-8 -z-10 h-56 w-56 rounded-full bg-clay/20 blur-3xl" />

        <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/70 bg-white/60 px-5 py-3 shadow-soft backdrop-blur-md">
          <a className="font-serif text-xl text-forest" href="#top">Jan Pugh</a>
          <a className="rounded-full bg-forest px-5 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-sage" href="mailto:jan@therapy.com">
            Email Jan
          </a>
        </nav>

        <div className="mx-auto grid min-h-[calc(100vh-120px)] max-w-6xl items-center gap-12 py-14 lg:grid-cols-[1fr_0.95fr]">
          <section id="top" className="max-w-2xl">
            <p className="mb-5 inline-flex rounded-full border border-clay/25 bg-white/65 px-4 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-clay">
              Counselling support · Calgary & across Alberta
            </p>
            <h1 className="font-serif text-5xl leading-[1.02] tracking-tight text-forest sm:text-6xl lg:text-7xl">
              Meet Jan Pugh.
            </h1>
            <p className="mt-5 text-xl font-semibold text-sage">
              MA, Registered Provisional Psychologist
            </p>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate/85 sm:text-xl">
              Clients describe Jan as “gentle, authentic, creative and accepting.” She offers a calm place to be heard, understood, and supported as you move from surviving toward ease, comfort, and connection.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a className="rounded-full bg-forest px-7 py-4 text-center font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-sage" href="tel:4035551212">
                Book free consultation
              </a>
              <a className="rounded-full border border-forest/20 bg-white/70 px-7 py-4 text-center font-semibold text-forest shadow-soft backdrop-blur transition hover:-translate-y-0.5 hover:bg-white" href="mailto:jan@therapy.com">
                Email me directly
              </a>
            </div>
          </section>

          <aside className="relative mx-auto w-full max-w-md rounded-[2rem] border border-white/70 bg-white/65 p-4 shadow-soft backdrop-blur-md">
            <img className="h-[34rem] w-full rounded-[1.5rem] object-cover object-top shadow-inner" src="/jan-headshot.jpg" alt="Jan Pugh" />
            <div className="absolute -bottom-5 left-6 right-6 rounded-3xl bg-white/90 p-5 shadow-soft backdrop-blur">
              <p className="font-serif text-2xl text-forest">A safe space to share your experience.</p>
              <p className="mt-2 text-sm leading-6 text-slate/70">In-person and virtual therapy for individuals, couples, and families.</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
          <div className="rounded-[2rem] bg-white/72 p-7 shadow-soft">
            <h2 className="font-serif text-3xl text-forest">Areas of expertise</h2>
            <ul className="mt-6 space-y-3 text-slate/80">
              {expertise.map((item) => <li key={item}>• {item}</li>)}
            </ul>
          </div>
          <div className="rounded-[2rem] bg-white/72 p-7 shadow-soft">
            <h2 className="font-serif text-3xl text-forest">Therapeutic modalities</h2>
            <ul className="mt-6 space-y-3 text-slate/80">
              {modalities.map((item) => <li key={item}>• {item}</li>)}
            </ul>
          </div>
          <div className="rounded-[2rem] bg-white/72 p-7 shadow-soft">
            <h2 className="font-serif text-3xl text-forest">Qualifications</h2>
            <ul className="mt-6 space-y-3 text-slate/80">
              {qualifications.map((item) => <li key={item}>• {item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 rounded-[2.5rem] bg-cream/75 p-6 shadow-soft md:grid-cols-[0.9fr_1.1fr] md:p-10">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
            <img className="h-64 w-full rounded-[1.75rem] object-cover shadow-soft" src="/jan-room.jpg" alt="A warm counselling room" />
            <img className="h-64 w-full rounded-[1.75rem] object-cover shadow-soft" src="/jan-plants.jpg" alt="Plants and a calming home detail" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-clay">Jan’s counselling journey</p>
            <h2 className="mt-4 font-serif text-4xl text-forest sm:text-5xl">Person-centred, strength-based care, customised for you.</h2>
            <div className="mt-6 space-y-5 text-lg leading-8 text-slate/82">
              <p>Jan’s path began in nursing and grew naturally into psychology. She has supported people through residential rehabilitation programs, crisis line work, single-session counselling, and community-based counselling with adolescents, adults, families, and couples.</p>
              <p>Her approach is grounded in compassion for the vulnerability it takes to seek therapy. She aims to create room for your inner thoughts, feelings, and experiences without judgement.</p>
              <p>Jan incorporates mindfulness and uses principles from DBT, CBT, strength-based therapy, solution-focused therapy, and EMDR according to your needs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl rounded-[2.5rem] bg-white/75 p-8 text-center shadow-soft sm:p-12">
          <h2 className="font-serif text-4xl text-forest">Welcoming your uniqueness.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate/80">
            Jan works to listen authentically and without judgement. She believes no two lives are the same, values diversity and inclusion, and is HAES-aligned with acceptance of health at every size.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a className="rounded-full bg-forest px-7 py-4 font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-sage" href="https://www.psychologytoday.com/ca/therapists/jan-pugh-calgary-ab/1350295">
              Psychology Today profile
            </a>
            <a className="rounded-full border border-forest/20 bg-white px-7 py-4 font-semibold text-forest shadow-soft transition hover:-translate-y-0.5" href="tel:4035551212">
              Call 403-555-1212
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
