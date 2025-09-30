


import {GradientText,Container,SectionTitle} from  "../../../UI/UiComponent"


const helpItems = [
  {
    title: "Our videos don’t look professional.",
    answer:
      "We use industry-standard editing, color grading, and transitions to give your videos a polished, cinematic feel.",
  },
  {
    title: "It takes us too long to edit content in-house.",
    answer:
      "We handle the entire editing process — fast turnaround, consistent quality, and ready-to-publish videos.",
  },
  {
    title: "Our videos don’t grab attention on social media.",
    answer:
      "We craft engaging intros, dynamic cuts, and on-trend formats that boost retention and engagement.",
  },
  {
    title: "We don’t know what style of videos works best for our brand.",
    answer:
      "From short-form reels to long-form storytelling, we help you define a style that matches your brand identity and audience.",
  },
  {
    title: "Our raw footage feels boring and unpolished.",
    answer:
      "We enhance your footage with animations, text overlays, background music, and effects to make it stand out.",
  },
  {
    title: "We need videos optimized for multiple platforms.",
    answer:
      "We create platform-specific versions (YouTube, Instagram, TikTok, LinkedIn) — each tailored to perform better where it’s published.",
  },
  {
    title: "We’ve tried freelancers before, but quality was inconsistent.",
    answer:
      "We provide a dedicated team and streamlined workflow, so you get consistent quality and style across all your videos.",
  },
  {
    title: "We don’t have a clear process for repurposing content.",
    answer:
      "We turn long videos into multiple short clips, trailers, and teasers — maximizing your content ROI.",
  },
  {
    title: "We want our brand storytelling to be stronger.",
    answer:
      "We structure your videos with a clear narrative arc, strong visuals, and emotional impact — driving deeper connections.",
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
  className="group relative bg-neutral-900 border border-transparent rounded-2xl p-6 h-56 flex flex-col justify-start 
  transition duration-300 
  hover:border-purple-500/70 hover:shadow-[0_0_0.5rem_0.2rem_rgba(168,85,247,0.2)]"
>
              <div className="text-4xl text-white/30 mb-4"><svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 11.102C0 5.17007 2.98259 1.46939 8.94776 0V4.4898C7.3607 4.97959 6.23881 5.71429 5.58209 6.69388C4.92537 7.61905 4.62438 9.08844 4.6791 11.102H8.94776V20H0V11.102ZM22 4.4898C20.4129 4.97959 19.291 5.71429 18.6343 6.69388C17.9776 7.61905 17.6766 9.08844 17.7313 11.102H22V20H13.0522V11.102C13.0522 5.17007 16.0348 1.46939 22 0V4.4898Z" fill="#333333"></path></svg></div>
              <h3 className="text-lg font-semibold leading-snug">
                {item.title}
              </h3>
              <p className="text-white/60 text-sm mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
