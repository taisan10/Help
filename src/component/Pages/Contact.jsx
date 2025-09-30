import { Container, ContactForm } from "../UI/UiComponent";

export default function Contact() {
  return (
    <Container className="py-16">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <div className="bg-white text-black p-6 rounded-xl shadow">
        <ContactForm />
      </div>
    </Container>
  );
}


// import { Container, ContactForm } from "../UI/UiComponent";

// export function ContactSection(){
//   return(
//  <section id="PrimaryButton"  className="bg-black text-white py-16 px-4 md:px-12">
 

//         <Container className="grid gap-8 sm:gap-12 md:grid-cols-2 items-start">
//           <div>
//             <h3 className="text-3xl sm:text-4xl font-semibold leading-tight mb-4 sm:mb-6">
//               Ready to take your marketing to the next level?
//             </h3>
//             <ul className="space-y-2 sm:space-y-3 text-white/80 text-base sm:text-lg">
//               <li>• How Bluenose works</li>
//               <li>
//                 • How you can do marketing at scale better, faster and cheaper
//               </li>
//               <li>
//                 • How we’re different from agencies, freelancers and in‑house
//                 teams(hint: faster & leaner!)
//               </li>
//               <li>• The most suitable subscription plan for your needs</li>
//             </ul>
//             {/* <LogoRow /> */}
//           </div>
//           <div className="rounded-[24px] sm:rounded-[28px] bg-white p-5 sm:p-8 shadow-xl text-neutral-900">
//             <ContactForm />
//           </div>

 
//         </Container>
//       </section>

//  )
// }