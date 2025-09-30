import { GradientText, Container, SectionTitle } from "../../../UI/UiComponent";

const helpItems = [
  {
    title: "Social media isn’t bringing real business results.",
    answer:
      "You get full visibility into what’s working and why — powered by data, not opinions.",
  },
  {
    title: "We don’t know what works and what doesn’t.",
    answer:
      "Every campaign is backed by analytics and weekly reporting — so you always know what drives impact.",
  },
  {
    title: "We’re active on social, but no one’s really engaging.",
    answer:
      "We create platform-specific content that sparks conversations and builds loyal communities around your brand.",
  },
  {
    title: "We don’t have the time or expertise to manage social properly.",
    answer:
      "We handle everything — strategy, content, scheduling, ads, and reports — so your team can focus on what they do best.",
  },
  {
    title: "Our brand looks different across every channel.",
    answer:
      "We ensure brand consistency across all platforms — visually and tonally — for a seamless, recognizable presence.",
  },
  {
    title: "We’ve worked with agencies before — and got generic solutions.",
    answer:
      "Everything we do is tailored — your industry, your audience, your goals. No templates. Just custom strategy and execution.",
  },
  {
    title: "We’re growing fast and need scalable support.",
    answer:
      "Our flexible monthly plans and dedicated teams are built to grow with you — from startup to enterprise.",
  },
  {
    title: "We’re in a complex niche — it’s hard to find experts who get it.",
    answer:
      "From crypto to fintech to SaaS, we’ve helped global leaders stand out in competitive, regulated industries.",
  },
  {
    title:
      "We don’t know which channels to focus on — and it feels overwhelming.",
    answer:
      "We help you identify the right platforms based on your audience and business goals — so every post, ad, and dollar goes where it matters most.",
  },
];

export function ChallengesSection() {
  return (
    <section className="relative overflow-hidden bg-black text-white py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(14,165,233,.15),transparent),radial-gradient(40%_40%_at_10%_80%,rgba(20,184,166,.12),transparent)] " />
      <Container>
        <SectionTitle
          title={
            <>
              Challenges Our Clients Faced <br />
              <GradientText>Before Working With Us</GradientText>
            </>
          }
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {helpItems.map((item, idx) => (
           <div
  key={idx}
  className="group relative bg-neutral-900 border border-transparent rounded-2xl p-6 flex flex-col justify-start 
             transition duration-300 hover:border-purple-500/70 hover:shadow-[0_0_0.5rem_0.2rem_rgba(168,85,247,0.2)]
             h-full"
>
              <div className="text-4xl text-white/30 mb-4">
                <svg
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 11.102C0 5.17007 2.98259 1.46939 8.94776 0V4.4898C7.3607 4.97959 6.23881 5.71429 5.58209 6.69388C4.92537 7.61905 4.62438 9.08844 4.6791 11.102H8.94776V20H0V11.102ZM22 4.4898C20.4129 4.97959 19.291 5.71429 18.6343 6.69388C17.9776 7.61905 17.6766 9.08844 17.7313 11.102H22V20H13.0522V11.102C13.0522 5.17007 16.0348 1.46939 22 0V4.4898Z"
                    fill="#333333"
                  ></path>
                </svg>
              </div>
              <h3
                className="text-lg font-semibold leading-snug transition-all duration-300 
             group-hover:text-base group-hover:text-sky-400"
              >
                {item.title}
              </h3>
              <p
                className="text-white/60 text-sm mt-4 opacity-0 group-hover:opacity-100 
             group-hover:text-lg group-hover:text-white transition-all duration-300"
              >
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
