import { Container, PrimaryButton, TeamStrip } from "../../../UI/UiComponent"

export function Team() {
  return (
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
  );
}
