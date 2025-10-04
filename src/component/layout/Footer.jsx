

import { Container, Logo } from "../UI/UiComponent";

// export default function Footer() {
//   return (
//     <footer className="border-t border-white/10 py-8 sm:py-10">
//       <Container className="flex flex-col gap-8">

//         {/* Top Section: Logo, Links, Map */}
//         <div className="flex flex-col md:flex-row justify-between gap-8 md:items-center">

//           {/* Column 1: Logo */}
//           <div className="w-full md:w-1/3 flex flex-col items-start gap-4">
//             <Logo />
//           </div>

//           {/* Column 2: Navigation Links */}
//           <div className="w-full md:w-1/3 flex flex-col items-start md:items-center">
//             <nav className="flex gap-4 sm:gap-10 text-xs sm:text-sm text-white/70">
//               <a href="#" className="hover:text-white">Privacy</a>
//               <a href="#" className="hover:text-white">Terms</a>
//               <a href="#contact" className="hover:text-white">Contact</a>
//             </nav>
//           </div>

//           {/* Column 3: Embedded Map */}
//           <div className="w-full md:w-1/3 flex flex-col items-center gap-4">
//             <div className="w-full h-64 md:h-56 rounded-xl overflow-hidden ring-1 ring-white/10">
//               <iframe
//                 title="Company Location on Google Maps"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.4654753839936!2d-63.63251087902276!3d44.659525482942136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5a213a9bb324a1%3A0x893bde709f90f7dc!2sBluenose%20Studio!5e0!3m2!1sen!2sca!4v1759469414406!5m2!1sen!2sca"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 allowFullScreen
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//               />
//             </div>
//           </div>

//         </div>

//         {/* Bottom Section: Copyright */}
//         <div className="text-center text-xs sm:text-sm text-white/60">
//           © {new Date().getFullYear()} Bluenose Digital Marketing. All rights reserved.
//         </div>

//       </Container>
//     </footer>
//   );
// }


export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 bg-black text-white">
      <Container className="grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Column 1: Logo + Contact + Social + Map */}
        <div className="space-y-6">
          <Logo />

          {/* Contact Info */}
          <div className="text-sm space-y-1 text-white/80">
            <p>hello@ninjapromo.io</p>
            <p>+1 929-492-4413 (USA)</p>
            <p>+44 20 3868 4672 (UK)</p>
            <p>+65 3129 4170 (Singapore)</p>
            <p>+971 52 947 2852 (UAE)</p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 pt-2">
            {/* Replace with actual icons */}
            <span>📘</span> {/* Facebook */}
            <span>🐦</span> {/* Twitter */}
            <span>📸</span> {/* Instagram */}
            <span>🎥</span> {/* YouTube */}
            <span>💼</span> {/* LinkedIn */}
          </div>

          {/* Embedded Map */}
          <div className="w-full h-40 rounded-xl overflow-hidden ring-1 ring-white/10">
            <iframe
              title="Company Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.4654753839936!2d-63.63251087902276!3d44.659525482942136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5a213a9bb324a1%3A0x893bde709f90f7dc!2sBluenose%20Studio!5e0!3m2!1sen!2sca!4v1759469414406!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Column 2: Services */}
        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>Social Media</li>
            <li>Paid Advertising</li>
            <li>SEO</li>
            <li>Influencer Marketing</li>
            <li>Content Marketing</li>
            <li>Digital Design</li>
            <li>Web & Mobile Development</li>
          </ul>
        </div>

        {/* Column 3: Industries */}
        <div>
          <h4 className="font-semibold mb-4">Industries</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>B2B</li>
            <li>B2C</li>
            <li>SaaS</li>
            <li>Fintech</li>
            <li>Ecommerce</li>
            <li>Crypto</li>
            <li>Gaming</li>
          </ul>
        </div>

        {/* Column 4: Company */}
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>About Us</li>
            <li>Success Stories</li>
            <li>Pricing</li>
            <li>Ninja Academy</li>
            <li>Affiliate Program</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
      </Container>

      {/* Bottom Section */}
      <div className="mt-10 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Ninja Promo. All rights reserved. &nbsp;
        <a href="#" className="underline">Terms of Service</a> |{" "}
        <a href="#" className="underline">Privacy Policy</a> |{" "}
        <a href="#" className="underline">Cookie Policy</a> | Hide Corporation Ltd
      </div>
    </footer>
  );
}