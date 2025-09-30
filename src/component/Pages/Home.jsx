import { Container, GradientText, PrimaryButton, SectionTitle, Stat, ServicesCarousel, TeamStrip, ContactForm } from "../UI/UiComponent";

export default function Home() {
  return (
    <>
         <div className="min-h-screen bg-neutral-950 text-white selection:bg-sky-400/30 ">
     
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
           <section  className="py-12 sm:py-16 ">
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
         </div>

      
    </>
  );
}
