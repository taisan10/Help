// Bluenose Marketing – Single‑file React page using TailwindCSS
// Mobile-friendly: burger menu + tuned mobile paddings/margins

import React, { useState } from "react";

function GradientText({ children }) {
  return (
    <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent">
      {children}
    </span>
  );
}

function Container({ children, className = "" }) {
  return (
    <div
      className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-3">
      {/* For local dev in this canvas we keep the uploaded path. In Next.js, swap to /bluenose-logo.png */}
      <img
        src="/logo 3.png"
        alt="Bluenose Digital Marketing"
        className="h-38  w-auto lg:h-45"
      />
    </div>
  );
}

function NavLink({ children, href = "#", onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-sm font-medium text-black hover:text-sky-600 transition"
    >
      {children}
    </a>
  );
}

function PrimaryButton({ children, href = "#" }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-sky-500/20 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-400 bg-gradient-to-r from-sky-500 to-cyan-400"
    >
      {children}
    </a>
  );
}

// KPI Card
function Stat({ kpi, accent, title, desc }) {
  const accentClasses = {
    purple: "from-fuchsia-400 to-violet-400",
    pink: "from-pink-400 to-rose-400",
    orange: "from-orange-400 to-amber-400",
    sky: "from-sky-400 to-cyan-400",
  };
  return (
    <div className="rounded-[22px] bg-white/5 p-6 sm:p-8 ring-1 ring-white/12 shadow-[0_1px_0_0_rgba(255,255,255,0.05)_inset]">
      <div className="text-4xl sm:text-5xl font-semibold tracking-tight">
        {kpi}
      </div>
      <div className="mt-3 text-base font-medium">
        <span
          className={`bg-gradient-to-r ${
            accentClasses[accent] || accentClasses.purple
          } bg-clip-text text-transparent`}
        >
          {title}
        </span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-white/70">{desc}</p>
    </div>
  );
}

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <div className="mb-3 text-xs uppercase tracking-[0.2em] text-white/60">
          {eyebrow}
        </div>
      )}
      <h2 className="text-2xl sm:text-4xl font-semibold">{title}</h2>
      {subtitle && <p className="mt-3 text-white/70">{subtitle}</p>}
    </div>
  );
}

// function LogoRow() {
//   const logos = [
//     "Logitech",
//     "Bitcoin.com",
//     "Stripe",
//     "Samsung",
//     "HubSpot",
//     "Burger King",
//   ];
//   return (
//     <div className="mt-8  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 sm:gap-6 opacity-70">
//       {logos.map((l) => (
//         <div
//           key={l}
//           className="rounded-xl border border-white/10 p-3 sm:p-4 text-center text-xs sm:text-sm"
//         >
//           {l}
//         </div>
//       ))}
//     </div>
//   );
// }

function ServiceChip({ label }) {
  return (
    <span className="whitespace-nowrap rounded-full border border-white/15 px-3 py-1 text-xs text-white/80 ">
      {label}
    </span>
  );
}

function ServiceCard({ title, desc, chips = [] }) {
  return (
   <div className="flex items-center justify-center  ">
    <div className="min-w-50 sm:min-w-70 lg:w-180 ml-60 lg:h-[230px] shrink-0 rounded-2xl bg-white/5 p-5 sm:p-6 ring-1 ring-white/10">
      <h3 className="text-lg sm:text-xl  lg:text-3xl font-semibold mb-5">{title}</h3>
      <p className="text-sm lg:text-md text-white/70 mb-20">{desc}</p>
      <div className="flex flex-wrap gap-2">
        {[...new Set(chips)].map((c) => (
          <ServiceChip key={c} label={c} />
        ))}
      </div>
    </div>
    </div>
  );
}

function ServicesCarousel() {
  const cards = [
    {
      title: "Digital",
      desc: "Paid media, SEO, and full‑funnel content. Data‑backed campaigns that turn attention into revenue.",
      chips: [
        "SEO & PPC",
        "Social Ads",
        "Email Flows",
        "Lead Gen",
        "Paid Scaling",
        "Conversion",
      ],
    },
    {
      title: "Design",
      desc: "Brand systems, social creatives, motion, and landing pages. Beautiful work that performs.",
      chips: [
        "Brand Identity",
        "Reels & Video",
        "Pitch Decks",
        "Landing Pages",
      ],
    },
    {
      title: "Web",
      desc: "Fast, accessible, SEO‑ready sites and CRO‑focused pages, built for speed and scale.",
      chips: ["Next.js", "Headless CMS", "CRO", "Analytics","Headless CMS"],
    },
    {
      title: "Consulting",
      desc: "Strategy sprints, audits, and training to level up your in‑house team and systems.",
      chips: ["GTM", "Attribution", "Playbooks", "Workshops","Headless CMS"],
    },
  ];

  return (
    <div
      className="overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] "
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      <div className="flex gap-3 sm:gap-4 py-2 md:py-4 w-max">
        {cards.map((c) => (
          <ServiceCard key={c.title} {...c} />
        ))}
      </div>
    </div>
  );
}

function Avatar({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover ring-2 ring-white/20"
    />
  );
}

function TeamStrip() {
  const people = new Array(9)
    .fill(0)
    .map((_, i) => `https://i.pravatar.cc/80?img=${i + 1}`);
  return (
    <div className="mt-6  flex flex-wrap items-center justify-center gap-1 sm:gap-1">
      {people.map((p, i) => (
        <Avatar key={i} src={p} alt={`Team member ${i + 1}`} />
      ))}
    </div>
  );
}

function ContactForm() {
  return (
    <form className="grid grid-cols-1 gap-3 sm:gap-4 text-neutral-900">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <input
          className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 outline-none focus:ring-2 focus:ring-sky-400"
          placeholder="First Name*"
          aria-label="First name"
          required
        />
        <input
          className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 outline-none focus:ring-2 focus:ring-sky-400"
          placeholder="Last Name"
          aria-label="Last name"
        />
      </div>
      <input
        className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 outline-none focus:ring-2 focus:ring-sky-400"
        placeholder="Work Email*"
        type="email"
        aria-label="Work email"
        required
      />
      <div className="flex gap-2">
        <select className="w-24 rounded-xl border border-neutral-200 bg-white px-3 py-3 text-sm text-neutral-900 outline-none focus:ring-2 focus:ring-sky-400">
          <option>+1</option>
          <option>+44</option>
          <option>+91</option>
        </select>
        <input
          className="flex-1 rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 outline-none focus:ring-2 focus:ring-sky-400"
          placeholder="Phone (optional)"
          aria-label="Phone"
        />
      </div>
      <textarea
        className="min-h-[120px] rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 outline-none focus:ring-2 focus:ring-sky-400"
        placeholder="What tasks would you like to solve?"
        aria-label="Message"
      />
      <button
        type="submit"
        className="rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-6 py-3 text-sm font-medium text-white shadow-lg"
      >
        Book a demo
      </button>
      <p className="mt-1 sm:mt-2 text-xs text-neutral-500">
        By clicking, you agree to receive communications from Bluenose Digital
        Marketing in accordance with our Privacy Policy.
      </p>
    </form>
  );
}

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`md:hidden ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 transition ${
          open ? "bg-black/40 opacity-100" : "bg-black/0 opacity-0"
        }`}
        aria-hidden="true"
        onClick={() => setOpen(false)}
      />
      {/* Sheet */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-80 max-w-[85vw] transform bg-white shadow-xl transition ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <Logo />
          <button
            aria-label="Close menu"
            className="p-2 bg-black"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
        </div>
        <nav className="flex flex-col gap-4 p-4 text-black">
          <NavLink href="#home" onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink href="#services" onClick={() => setOpen(false)}>
            Our Services
          </NavLink>
          <NavLink href="#work" onClick={() => setOpen(false)}>
            Success Stories
          </NavLink>
          <NavLink href="#company" onClick={() => setOpen(false)}>
            Company
          </NavLink>
          <PrimaryButton href="#contact">Book Intro Call</PrimaryButton>
        </nav>
      </div>
    </div>
  );
}

export default function BluenoseMarketingSite() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-sky-400/30 ">
      {/* Header (white pill) */}
      <header className="sticky top-10 z-40 bg-transparent">
        <Container>
          <div className="mt-2 sm:mt-3 flex h-14 sm:h-16 items-center justify-between rounded-full bg-white pl-3 pr-2 sm:px-4 md:px-6 ring-1 ring-black/10 shadow-sm">
            <Logo />
            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-black">
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#services">Our Services</NavLink>

              <NavLink href="#work">Success Stories</NavLink>

              <NavLink href="#company">Company</NavLink>
            </nav>
            {/* Mobile actions */}
            <div className="flex items-center gap-2 md:hidden">
              <PrimaryButton href="#contact">Book</PrimaryButton>
              <button
                aria-label="Open menu"
                className="grid h-10 w-10 place-items-center rounded-full ring-1 ring-black/10"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="text-black"
                >
                  <path
                    d="M3 6h18M3 12h18M3 18h18"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
            {/* Desktop CTA */}
            <div className="hidden md:block">
              <PrimaryButton href="#contact">Book Intro Call</PrimaryButton>
            </div>
          </div>
        </Container>
        <MobileNav open={open} setOpen={setOpen} />
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(14,165,233,.22),transparent),radial-gradient(40%_40%_at_10%_80%,rgba(20,184,166,.18),transparent)]" />
        <Container className="py-14 sm:py-20 lg:py-28">
          <div className="grid items-center gap-8 sm:gap-10 md:grid-cols-2">
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
                All your marketing needs{" "}
                <GradientText>in one single monthly subscription</GradientText>
              </h1>
              <p className="mt-5 sm:mt-6 max-w-xl text-white/70">
                Atlantic‑built, story‑first marketing on a flexible
                subscription. Strategy, design, web, and growth — handled by a
                vetted squad that plugs in fast.
              </p>
              <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
                <PrimaryButton href="#contact">Book a demo</PrimaryButton>
                <span className="text-xs sm:text-sm text-white/60">
                  Human, fast, and Halifax‑proud
                </span>
              </div>
            </div>
            <div className="mx-auto w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-3 sm:p-4">
              <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900" />
              <div className="mt-3 text-center text-xs sm:text-sm text-white/60">
                Event snapshots • Dubai • Halifax
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* KPI Grid */}
      <section className="py-12 sm:py-16">
        <Container>
          <SectionTitle
            title={<>Meet the new generation of digital marketing services</>}
          />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-[50%_50%] lg:grid-cols-[24%_24%_48%] ">
            <Stat
              kpi="24"
              accent="purple"
              title="Hours Turnaround"
              desc="Launch projects in less than a day. Perfect for those tight deadlines and urgent tasks."
            />
            <Stat
              kpi="50%+"
              accent="pink"
              title="Output Growth"
              desc="Get ready for a major marketing scale‑up. Outpace your average agency’s output."
            />
            <Stat
              kpi="$100k"
              accent="orange"
              title="Saving"
              desc="Average saving on annual agency fees."
            />
            </div>
             <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-[48%_48%] lg:grid-cols-[48%_24%_24%]">
            <Stat
              kpi="10"
              accent="sky"
              title="Extra Hours/Week"
              desc="Reclaim your schedule with simplified management. Take your time back to lead."
            />
            <Stat
              kpi="30+"
              accent="purple"
              title="Services On Tap"
              desc="Every design and marketing service you can imagine. Available to you on‑demand."
            />
            <Stat
              kpi="1%"
              accent="orange"
              title="Top 1% Global Experts"
              desc="Build a ready‑to‑go vetted team. Watch your ROI shoot sky‑high."
            />
          </div>
        </Container>
      </section>

      {/* Services */}
      <section id="services" className="py-12 sm:py-16 ">
        <Container>
          <SectionTitle
            title={
              <>
                Every marketing service you need —{" "}
                <GradientText>all under one roof</GradientText>
              </>
            }
            subtitle="Scroll to explore. Swap titles/chips to fit your offer."
          />
          <div className="mt-6 sm:mt-8 ">
            <ServicesCarousel />
          </div>
        </Container>
      </section>

      {/* Team CTA */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="rounded-3xl bg-gradient-to-r from-sky-600/80 via-black-400/40 to-teal-600/80 p-6 sm:p-8 ring-1 ring-white/10">
            <div className="mx-auto max-w-2xl text-center">
              <h3 className="text-xl sm:text-3xl font-semibold">
                Meet the experts behind your success
              </h3>
              <p className="mt-2 text-white/80">
                Atlantic craftsmanship • Halifax to the world • Built by
                specialists
              </p>
              <TeamStrip />
              <div className="mt-5 sm:mt-6">
                <PrimaryButton href="#contact">Book Intro Call</PrimaryButton>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact (white card) */}
      <section id="contact" className="py-16 sm:py-20">
        <Container className="grid gap-8 sm:gap-12 md:grid-cols-2 items-start">
          <div>
            <h3 className="text-3xl sm:text-4xl font-semibold leading-tight mb-4 sm:mb-6">
              Ready to take your marketing to the next level?
            </h3>
            <ul className="space-y-2 sm:space-y-3 text-white/80 text-base sm:text-lg">
              <li>• How Bluenose works</li>
              <li>
                • How you can do marketing at scale better, faster and cheaper
              </li>
              <li>
                • How we’re different from agencies, freelancers and in‑house
                teams(hint: faster & leaner!)
              </li>
              <li>• The most suitable subscription plan for your needs</li>
            </ul>
            {/* <LogoRow /> */}
          </div>
          <div className="rounded-[24px] sm:rounded-[28px] bg-white p-5 sm:p-8 shadow-xl text-neutral-900">
            <ContactForm />
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 sm:py-10">
        <Container className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          <Logo />
          <p className="text-xs sm:text-sm text-white/60">
            © {new Date().getFullYear()} Bluenose Digital Marketing. All rights
            reserved.
          </p>
          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-white/70">
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
            <a href="#" className="hover:text-white">
              Contact
            </a>
          </div>
        </Container>
      </footer>
    </div>
  );
}
