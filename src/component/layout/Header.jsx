import { useState, useRef, useEffect } from "react";
import { Container, Logo, PrimaryButton } from "../UI/UiComponent";
import { MobileNav } from "../UI/UiComponent";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const navItems = [
    { label: "Home", href: "/" },
    {
      label: "Services",
      children: [
        { label: "SocialMedia", href: "/Services/Social-Media" },
        { label: "Graphic Designing", href: "/services/graphic-designing" },
        { label: "Video Editing", href: "/services/video-editing" },
      ],
    },
    { label: "Work", href: "/work" },
    { label: "Company", href: "/company" },
  ];
const [showNavbar, setShowNavbar] = useState(true);
const lastScrollY = useRef(0);

useEffect(() => {
  function handleScroll() {
    if (window.scrollY > lastScrollY.current) {
      // 👇 user scrolls down → hide navbar
      setShowNavbar(false);
    } else {
      // 👇 user scrolls up → show navbar
      setShowNavbar(true);
    }
    lastScrollY.current = window.scrollY;
  }

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  // 👇 Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`sticky top-10 z-40 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-[calc(100%+2.5rem)]"
      }`}
    >
      <Container>
        <div className="flex h-14 sm:h-18 items-center justify-between rounded-full bg-white pl-3 pr-2 sm:px-4 md:px-6 ring-1 ring-black/10 shadow-sm">
          {/* Logo */}
          <a href="/" aria-label="Go to homepage">
            <Logo />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-black">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative text-lg"
                  ref={dropdownRef}
                >
                  <button
                    type="button"
                    onClick={() => setOpenDropdown(!openDropdown)}
                    className="hover:text-sky-500 transition"
                  >
                    {item.label}
                  </button>

                  {openDropdown && (
                    <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg p-2 w-52">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2 text-black hover:bg-gray-100"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="hover:text-sky-500 transition"
                >
                  {item.label}
                </a>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <PrimaryButton href="#contact">Contact Us Now</PrimaryButton>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 md:hidden">
            <PrimaryButton href="#contact">Contact Us</PrimaryButton>
            <button
              aria-label="Open menu"
              className="grid h-10 w-10 place-items-center rounded-full ring-1 ring-black/10"
              onClick={() => setOpen(true)}
            >
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
        </div>
      </Container>

      {/* Mobile Nav */}
      <MobileNav open={open} setOpen={setOpen} navItems={navItems} />
    </header>
  );
}
