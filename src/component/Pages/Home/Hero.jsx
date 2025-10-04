// import {
//   Container,
//   GradientText,
//   PrimaryButton,
//   SectionTitle,
//   Stat,
//   ServicesCarousel,
//   TeamStrip,
//   LogosMarquee,
// } from "../../UI/UiComponent";


// export default function Hero(){
//   return(
   
//             <section className="relative overflow-hidden">
//               <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(14,165,233,.22),transparent),radial-gradient(40%_40%_at_10%_80%,rgba(20,184,166,.18),transparent)]" />
//               <Container className="py-14 sm:py-20 lg:py-28">
//                 <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
//                   All your marketing needs{" "}
//                   <GradientText>in one single monthly subscription</GradientText>
//                 </h1>
//                 <p className="mt-5 sm:mt-6 max-w-xl text-white/70">
//                   Atlantic‑built, story‑first marketing on a flexible subscription.
//                   Strategy, design, web, and growth — handled by a vetted squad that
//                   plugs in fast.
//                 </p>
//                 <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
//                   <PrimaryButton href="#contact">Book a demo</PrimaryButton>
//                   <span className="text-xs sm:text-sm text-white/60">
//                     Human, fast, and Halifax‑proud
//                   </span>
//                 </div>
//                 <LogosMarquee
//                   items={[
//                     "/logoimage/Adda.png",
//                     "/logoimage/BB_Station.png",
//                     "/logoimage/Desi_Garden.png",
//                     "/logoimage/Garden_retreat-.png",
//                      "/logoimage/Nayya.png",
//                      "/logoimage/Pita Nutso.png",
//                      "/logoimage/Rivaaj.jpg",
//                      "/logoimage/Triveeni Events.png",
//                   ]}
//                 />
//               </Container>
//             </section>
//   )
// }

import {
  Container,
  GradientText,
  PrimaryButton,
  LogosMarquee,
} from "../../UI/UiComponent";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(14,165,233,.22),transparent),radial-gradient(40%_40%_at_10%_80%,rgba(20,184,166,.18),transparent)]" />
      
      <Container className="py-14 sm:py-20 lg:py-28 text-center">
        {/* ✅ Main Heading full line */}
        <h1 className="w-full text-3xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
        
          <GradientText> All-in-One Marketing, {" "}</GradientText>
          Built for Growing Businesses.

          

        </h1>

        {/* ✅ Sub Heading */}
        <p className="mt-5 sm:mt-6 max-w-3xl mx-auto text-white/70 text-base sm:text-lg">
         Our team combines creativity, insight, and execution to deliver seamless marketing solutions that drive measurable results for your brand.

        </p>

        {/* ✅ Button */}
        <div className="mt-6 sm:mt-8 flex justify-center gap-3 sm:gap-4">
          <PrimaryButton href="#contact">Contact Us Now</PrimaryButton>
        </div>

        {/* ✅ Logos Marquee (left → right) */}
        <div className="mt-10">
          <LogosMarquee
            items={[
              "/logoimage/Adda.png",
              "/logoimage/BB_Station.png",
              "/logoimage/Desi_Garden.png",
              "/logoimage/Garden_retreat-.png",
              "/logoimage/Nayya.png",
              "/logoimage/Pita Nutso.png",
              "/logoimage/Rivaaj.jpg",
              "/logoimage/Triveeni Events.png",
            ]}
          />
        </div>
      </Container>
    </section>
  );
}
