

import {GradientText,Container,PrimaryButton} from  "../../../UI/UiComponent"


export function HeroSection() {
  return (
    
    <section className="relative overflow-hidden bg-neutral-950 text-white">
  <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(14,165,233,.22),transparent),radial-gradient(40%_40%_at_10%_80%,rgba(20,184,166,.18),transparent)]" />
  <Container className="py-14 sm:py-20 lg:py-28">
    <div className="grid items-center gap-8 sm:gap-10 md:grid-cols-2">
      <div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
          Turn Followers into Customers{" "}
          <GradientText>with SMM That Works</GradientText>
        </h1>
        <p className="mt-5 sm:mt-6 max-w-xl text-white/70">
          Multi-platform expertise: Instagram, LinkedIn, TikTok, YouTube & more.
          Data-led campaigns, creative execution, and full-funnel thinking.
        </p>
        <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
          <PrimaryButton href="#audit">Get a Free Audit</PrimaryButton>
          <span className="text-xs sm:text-sm text-white/60">
            Rated 4.9 on Clutch • 5.0 on Sortlist
          </span>
        </div>
      </div>
      <div className="mx-auto w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-3 sm:p-4">
        <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
          {/* Replace with actual social media icons or hex grid */}
          <div className="text-4xl">📸 💼 🎵 ▶️</div>
        </div>
        <div className="mt-3 text-center text-xs sm:text-sm text-white/60">
          Social snapshots • Dubai • Halifax
        </div>
      </div>
    </div>
  </Container>
</section>

  );
}