import { Container, Logo } from "../UI/UiComponent";

export default function Footer() {
  return (
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


  )
}