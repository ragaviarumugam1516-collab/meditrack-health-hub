import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Activity, Bell, Brain, Calendar, Check, Heart, Pill, ScanLine,
  ShieldCheck, ShoppingBag, Sparkles, Stethoscope, Star, ArrowRight, Clock, TrendingUp,
} from "lucide-react";
import heroImg from "@/assets/hero-meditrack.jpg";
import { SiteNav } from "@/components/site-nav";

export const Route = createFileRoute("/")({ component: Landing });

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <Hero />
      <TrustBar />
      <Features />
      <Dashboard />
      <Pharmacy />
      <AISection />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -top-10 right-0 h-[420px] w-[420px] rounded-full bg-mint/30 blur-3xl" />
      </div>
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:py-24 lg:grid-cols-2 lg:gap-6">
        <motion.div initial="hidden" animate="show" variants={fadeUp} className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            <Sparkles className="h-3.5 w-3.5" /> AI-powered health companion
          </span>
          <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Never miss a dose. <span className="gradient-text">Live healthier.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            MediTrack reminds you when to take your meds, tracks adherence with beautiful insights, warns about drug interactions, and lets you reorder prescriptions in seconds.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/" className="inline-flex items-center gap-2 rounded-full gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.02]">
              Start free <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="#features" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold shadow-soft transition hover:bg-muted">
              See how it works
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-success" /> HIPAA-grade privacy</div>
            <div className="flex items-center gap-2"><Star className="h-4 w-4 fill-warning text-warning" /> 4.9 / 60k reviews</div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-primary/20 via-mint/20 to-transparent blur-2xl" />
          <div className="glass relative overflow-hidden rounded-[2.25rem] p-3 shadow-glow">
            <img src={heroImg} alt="MediTrack capsules" width={1536} height={1280} className="h-auto w-full rounded-[1.75rem] object-cover" />
          </div>
          {/* Floating dose card */}
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -left-6 bottom-10 hidden w-64 rounded-2xl p-4 shadow-soft sm:block">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-success/15 text-success animate-pulse-ring">
                <Pill className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold">Metformin 500mg</p>
                <p className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="h-3 w-3" /> 8:00 AM · After food</p>
              </div>
            </div>
            <button className="mt-3 w-full rounded-lg bg-success px-3 py-1.5 text-xs font-semibold text-success-foreground">Mark as taken</button>
          </motion.div>
          {/* Floating adherence card */}
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -right-4 top-8 hidden w-56 rounded-2xl p-4 shadow-soft sm:block">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium text-muted-foreground">Adherence</p>
              <TrendingUp className="h-4 w-4 text-success" />
            </div>
            <p className="mt-1 font-display text-3xl font-bold">94%</p>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
              <div className="h-full w-[94%] gradient-primary" />
            </div>
            <p className="mt-2 text-xs text-muted-foreground">Last 30 days · +6%</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = ["Apple Health", "Mayo Clinic", "Cleveland Clinic", "WebMD", "Pharma+", "CarePlus"];
  return (
    <section className="border-y border-border/60 bg-muted/30">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-4 py-6 text-sm text-muted-foreground">
        <span className="text-xs uppercase tracking-widest">Trusted by clinicians at</span>
        {items.map(i => <span key={i} className="font-display font-semibold opacity-70">{i}</span>)}
      </div>
    </section>
  );
}

const features = [
  { icon: Pill, title: "Smart dose tracking", desc: "Custom schedules, before/after food, start & end dates — all on auto-pilot." },
  { icon: Bell, title: "Gentle reminders", desc: "Push, email & SMS alerts that adapt to your routine and timezone." },
  { icon: Brain, title: "AI health insights", desc: "Personal trends, side-effect detection and weekly health digests." },
  { icon: ScanLine, title: "Prescription OCR", desc: "Snap your script — we extract dosage, frequency and duration in seconds." },
  { icon: ShieldCheck, title: "Interaction warnings", desc: "Real-time drug-interaction screening backed by clinical databases." },
  { icon: Heart, title: "Caregiver mode", desc: "Loop in family or carers with privacy-first shared dashboards." },
];

function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">Everything you need</span>
        <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">A full healthcare OS in your pocket</h2>
        <p className="mt-4 text-muted-foreground">From the first reminder to your next refill — designed for everyday wellness.</p>
      </div>
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="glass group rounded-3xl p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-glow"
          >
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
              <f.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Dashboard() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 gradient-hero opacity-60" />
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Today at a glance</span>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">A dashboard your doctor would love</h2>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          <div className="glass rounded-3xl p-6 shadow-soft lg:col-span-2">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-xl font-semibold">Today's schedule</h3>
              <span className="rounded-full bg-success/15 px-3 py-1 text-xs font-semibold text-success">3 of 5 taken</span>
            </div>
            <div className="mt-5 space-y-3">
              {[
                { name: "Vitamin D3", dose: "1000 IU", time: "8:00 AM", state: "taken", food: "After food" },
                { name: "Metformin", dose: "500 mg", time: "8:30 AM", state: "taken", food: "With breakfast" },
                { name: "Lisinopril", dose: "10 mg", time: "1:00 PM", state: "taken", food: "Any time" },
                { name: "Atorvastatin", dose: "20 mg", time: "9:00 PM", state: "upcoming", food: "After dinner" },
                { name: "Melatonin", dose: "3 mg", time: "10:30 PM", state: "upcoming", food: "Before bed" },
              ].map((m) => (
                <div key={m.name} className="flex items-center justify-between rounded-2xl border border-border bg-card/60 p-3">
                  <div className="flex items-center gap-3">
                    <div className={`grid h-10 w-10 place-items-center rounded-xl ${m.state === "taken" ? "bg-success/15 text-success" : "bg-primary/10 text-primary"}`}>
                      {m.state === "taken" ? <Check className="h-5 w-5" /> : <Pill className="h-5 w-5" />}
                    </div>
                    <div>
                      <p className="font-semibold">{m.name} · <span className="text-muted-foreground font-normal">{m.dose}</span></p>
                      <p className="text-xs text-muted-foreground">{m.time} · {m.food}</p>
                    </div>
                  </div>
                  {m.state === "taken"
                    ? <span className="text-xs font-medium text-success">Taken</span>
                    : <button className="rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground">Mark</button>}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="glass rounded-3xl p-6 shadow-soft">
              <div className="flex items-center justify-between">
                <h3 className="font-display font-semibold">Adherence · 30d</h3>
                <TrendingUp className="h-4 w-4 text-success" />
              </div>
              <div className="mt-4 flex items-end gap-1.5">
                {[60, 72, 80, 65, 90, 85, 70, 95, 88, 92, 98, 94].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t-md gradient-primary" style={{ height: `${h * 0.9}px`, opacity: 0.4 + i * 0.05 }} />
                ))}
              </div>
              <p className="mt-3 text-xs text-muted-foreground">You're 12% above your monthly goal 🎉</p>
            </div>
            <div className="glass rounded-3xl p-6 shadow-soft">
              <h3 className="font-display font-semibold">Refills</h3>
              <div className="mt-3 space-y-2 text-sm">
                <div className="flex items-center justify-between"><span>Metformin</span><span className="text-warning font-medium">3 days left</span></div>
                <div className="flex items-center justify-between"><span>Lisinopril</span><span className="text-muted-foreground">12 days left</span></div>
                <div className="flex items-center justify-between"><span>Vitamin D3</span><span className="text-muted-foreground">22 days left</span></div>
              </div>
              <button className="mt-4 w-full rounded-full gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground">Refill all</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const products = [
  { name: "Vitamin D3 1000 IU", brand: "Pharma+", price: "$12.99", rating: 4.8, tag: "Supplement", color: "from-yellow-200 to-amber-100" },
  { name: "Digital Thermometer", brand: "MediCare", price: "$19.49", rating: 4.7, tag: "Device", color: "from-sky-200 to-blue-100" },
  { name: "Paracetamol 500mg", brand: "Generic", price: "$4.20", rating: 4.6, tag: "OTC", color: "from-emerald-200 to-mint-100" },
  { name: "Omega-3 Fish Oil", brand: "PureLife", price: "$22.00", rating: 4.9, tag: "Supplement", color: "from-cyan-200 to-teal-100" },
];

function Pharmacy() {
  return (
    <section id="pharmacy" className="mx-auto max-w-6xl px-4 py-24">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Built-in pharmacy</span>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Order meds in <span className="gradient-text">two taps</span></h2>
          <p className="mt-4 text-muted-foreground">Browse prescription meds, OTC, supplements and devices. Auto-refill subscriptions, wishlist, coupons & express delivery — all integrated with your tracker.</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Prescription", "OTC", "Supplements", "Devices", "Wellness"].map(c => (
              <span key={c} className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground/80 shadow-soft">{c}</span>
            ))}
          </div>
          <Link to="/" className="mt-8 inline-flex items-center gap-2 rounded-full gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow">
            <ShoppingBag className="h-4 w-4" /> Visit marketplace
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {products.map((p, i) => (
            <motion.div key={p.name}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass overflow-hidden rounded-3xl p-4 shadow-soft transition hover:-translate-y-1">
              <div className={`grid aspect-square place-items-center rounded-2xl bg-gradient-to-br ${p.color}`}>
                <Pill className="h-10 w-10 text-primary/70" />
              </div>
              <div className="mt-3 flex items-start justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-primary">{p.tag}</p>
                  <h4 className="mt-0.5 text-sm font-semibold leading-tight">{p.name}</h4>
                  <p className="text-xs text-muted-foreground">{p.brand}</p>
                </div>
                <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold">★ {p.rating}</span>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className="font-display text-lg font-bold">{p.price}</span>
                <button className="rounded-full bg-foreground px-3 py-1.5 text-xs font-semibold text-background">Add</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AISection() {
  return (
    <section id="ai" className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="glass overflow-hidden rounded-[2.5rem] p-8 shadow-glow md:p-14">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <Sparkles className="h-3.5 w-3.5" /> Meet Medi
              </span>
              <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">Your AI medication assistant</h2>
              <p className="mt-4 text-muted-foreground">Ask anything — side effects, interactions, what to do if you miss a dose. Medi is trained on clinical data and always available.</p>
              <ul className="mt-6 space-y-3 text-sm">
                {["Drug interaction screening", "Symptom triage & next steps", "Personalized health insights", "Refill & reorder via chat"].map(t => (
                  <li key={t} className="flex items-center gap-2"><Check className="h-4 w-4 text-success" /> {t}</li>
                ))}
              </ul>
            </div>
            <div className="glass rounded-3xl border-border/60 p-5 shadow-soft">
              <div className="flex items-center gap-2 border-b border-border pb-3">
                <div className="grid h-8 w-8 place-items-center rounded-full gradient-primary text-primary-foreground">
                  <Stethoscope className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Medi · AI Assistant</p>
                  <p className="text-xs text-success">● online</p>
                </div>
              </div>
              <div className="mt-4 space-y-3">
                <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-muted px-4 py-2.5 text-sm">Can I take ibuprofen with my Lisinopril?</div>
                <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-primary px-4 py-2.5 text-sm text-primary-foreground">
                  ⚠️ Caution: NSAIDs may reduce Lisinopril's effect and stress kidneys. Acetaminophen is a safer choice for short-term pain. Want me to check the dose?
                </div>
                <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-muted px-4 py-2.5 text-sm">Yes please — 500mg.</div>
              </div>
              <div className="mt-4 flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground">
                Ask Medi anything…
                <span className="ml-auto rounded-full gradient-primary px-3 py-1 text-xs font-semibold text-primary-foreground">Send</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    { q: "Genuinely the first app that's improved my mom's adherence. The reminders are perfectly gentle.", a: "Aarav P.", r: "Caregiver" },
    { q: "I love seeing my 30-day streak. The pharmacy refills just show up — magical.", a: "Sofia R.", r: "Type 2 diabetic" },
    { q: "Drug interaction alerts caught a real problem before my pharmacist did.", a: "Dr. Lin", r: "Internal medicine" },
  ];
  return (
    <section className="mx-auto max-w-6xl px-4 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">Loved by patients</span>
        <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Care that actually feels like care</h2>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {items.map(t => (
          <div key={t.a} className="glass rounded-3xl p-6 shadow-soft">
            <div className="flex gap-0.5 text-warning">{Array.from({length:5}).map((_,i)=><Star key={i} className="h-4 w-4 fill-warning"/>)}</div>
            <p className="mt-4 text-sm leading-relaxed">"{t.q}"</p>
            <p className="mt-5 text-sm font-semibold">{t.a} <span className="font-normal text-muted-foreground">· {t.r}</span></p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  const tiers = [
    { name: "Free", price: "$0", desc: "For individuals starting out", features: ["Up to 5 medications", "Basic reminders", "30-day history", "Marketplace access"], cta: "Start free" },
    { name: "Plus", price: "$6", per: "/mo", desc: "For active wellness", features: ["Unlimited meds", "AI assistant", "OCR prescription scan", "Drug interaction alerts", "Caregiver access (3)"], featured: true, cta: "Start 14-day trial" },
    { name: "Family", price: "$14", per: "/mo", desc: "Up to 6 family members", features: ["Everything in Plus", "Shared family calendar", "Caregiver dashboard", "Priority pharmacy delivery", "Concierge support"], cta: "Choose family" },
  ];
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-4 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">Pricing</span>
        <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Simple, honest pricing</h2>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {tiers.map(t => (
          <div key={t.name} className={`relative rounded-3xl p-7 shadow-soft ${t.featured ? "gradient-primary text-primary-foreground shadow-glow" : "glass"}`}>
            {t.featured && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-warning px-3 py-1 text-[10px] font-bold uppercase text-warning-foreground">Most popular</span>}
            <h3 className="font-display text-2xl font-bold">{t.name}</h3>
            <p className={`mt-1 text-sm ${t.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{t.desc}</p>
            <div className="mt-5 flex items-baseline gap-1">
              <span className="font-display text-5xl font-bold">{t.price}</span>
              {t.per && <span className={`text-sm ${t.featured ? "opacity-80" : "text-muted-foreground"}`}>{t.per}</span>}
            </div>
            <ul className="mt-6 space-y-2.5 text-sm">
              {t.features.map(f => <li key={f} className="flex items-center gap-2"><Check className="h-4 w-4" /> {f}</li>)}
            </ul>
            <button className={`mt-7 w-full rounded-full px-4 py-3 text-sm font-semibold transition ${t.featured ? "bg-background text-foreground hover:opacity-90" : "gradient-primary text-primary-foreground"}`}>
              {t.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-24">
      <div className="relative overflow-hidden rounded-[2.5rem] gradient-primary p-10 text-primary-foreground shadow-glow md:p-16">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="relative grid gap-6 md:grid-cols-[1.5fr_1fr] md:items-center">
          <div>
            <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl">Your healthier future starts with one tap.</h2>
            <p className="mt-3 max-w-xl text-primary-foreground/85">Join 200,000+ people who never miss a dose.</p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link to="/" className="rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground shadow-soft">Get MediTrack free</Link>
            <a href="#features" className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold">Learn more</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full gradient-primary text-primary-foreground"><Activity className="h-4 w-4"/></span>
            <span className="font-display text-lg font-bold">MediTrack</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">The AI-powered medication tracker & online pharmacy for modern healthcare.</p>
        </div>
        {[
          { t: "Product", l: ["Features", "Pharmacy", "AI Assistant", "Pricing"] },
          { t: "Company", l: ["About", "Careers", "Press", "Contact"] },
          { t: "Resources", l: ["Help center", "Privacy", "Terms", "HIPAA"] },
        ].map(c => (
          <div key={c.t}>
            <p className="text-sm font-semibold">{c.t}</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {c.l.map(i => <li key={i}><a href="#" className="hover:text-foreground">{i}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} MediTrack Health, Inc. · Made with <Heart className="inline h-3 w-3 text-destructive"/> for healthier lives.
      </div>
    </footer>
  );
}
