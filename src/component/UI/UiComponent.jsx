
import React, { useState } from "react";

export   function GradientText({ children }) {
  return (
    <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent">
      {children}
    </span>
  );
}

 export  function Container({ children, className = "" }) {
  return (
    <div
      className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
}

export  function Logo() {
  return (
    <div className="flex items-center gap-3">
      {/* For local dev in this canvas we keep the uploaded path. In Next.js, swap to /bluenose-logo.png */}
      <img
        src="/logo 3.png"
        alt="Bluenose Digital Marketing"
        className="h-38  w-auto lg:h-45"
      />
    </div>
  );
}

export   function NavLink({ children, href = "#", onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-sm font-medium text-black hover:text-sky-600 transition"
    >
      {children}
    </a>
  );
}

export   function PrimaryButton({ children, href = "#" }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-sky-500/20 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-400   bg-gradient-to-r from-sky-500 to-cyan-400"
    >
      {children}
    </a>
  );
}

// KPI Card
//  export   function Stat({ kpi, accent, title, desc }) {
//   const accentClasses = {
//     purple: "bg-gradient-to-r from-sky-400 via-cyan-400",
//     pink: "from-pink-400 to-rose-400",
//     orange: "from-orange-400 to-amber-400",
//     sky: "from-sky-400 to-cyan-400",
//   };

export   function Stat({ kpi, accent, title, desc }) {
  const accentClasses = {
    purple: " from-sky-400 to-cyan-400",
   
  };
  return (
    <div className="rounded-[22px] bg-white/5 p-6 sm:p-8 ring-5 ring-white/12 shadow-[0_1px_0_0_rgba(255,255,255,0.05)_inset]">
      <div className="text-4xl sm:text-6xl font-semibold tracking-tight">
        {kpi}
      </div>
      <div className="mt-3 text-2xl font-medium">
        <span
          className={`bg-gradient-to-r ${
            accentClasses[accent] || accentClasses.purple
          } bg-clip-text text-transparent`}
        >
          {title}
        </span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-white/70">{desc}</p>
    </div>
  );
}

export   function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <div className="mb-3 text-xs uppercase tracking-[0.2em] text-white/60">
          {eyebrow}
        </div>
      )}
      <h2 className="text-2xl sm:text-4xl font-semibold">{title}</h2>
      {subtitle && <p className="mt-3 text-white/70">{subtitle}</p>}
    </div>
  );
}



import {  useEffect, useRef } from "react";

export function ServicesCarousel() {
  const cards = [
    {
      title: "Digital",
      desc: "Paid media, SEO, and full-funnel content. Data-backed campaigns that turn attention into revenue.",
      chips: ["SEO & PPC", "Social Ads", "Email Flows", "Lead Gen", "Paid Scaling", "Conversion"],
    },
    {
      title: "Design",
      desc: "Brand systems, social creatives, motion, and landing pages. Beautiful work that performs.",
      chips: ["Brand Identity", "Reels & Video", "Pitch Decks", "Landing Pages"],
    },
    {
      title: "Web",
      desc: "Fast, accessible, SEO-ready sites and CRO-focused pages, built for speed and scale.",
      chips: ["Next.js", "Headless CMS", "CRO", "Analytics", "Headless CMS"],
    },
    {
      title: "Consulting",
      desc: "Strategy sprints, audits, and training to level up your in-house team and systems.",
      chips: ["GTM", "Attribution", "Playbooks", "Workshops", "Headless CMS"],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const intervalRef = useRef(null);

  // Auto-slide start
  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
    }, 4000); // 5s delay
  };

  // Stop auto-slide
  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [cards.length]);

  // Swipe handlers
  const handleTouchStart = (e) => {
    stopAutoSlide();
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
    }
    if (touchStart - touchEnd < -50) {
      setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
    }
    startAutoSlide();
  };

  return (
    <div
      className="relative w-full overflow-hidden py-12  text-white"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      {/* Carousel Container */}
      <div className="relative mx-auto w-full sm:w-[90%] max-w-6xl overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {cards.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4 md:px-8">
              <div className="bg-[#1a1a1a] p-5 sm:p-10 rounded-4xl shadow-xl">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">{item.title}</h2>
                <p className="text-gray-400 text-sm sm:text-base mb-6">{item.desc}</p>
                <div className="flex flex-wrap gap-3 mt-18">
                  {item.chips.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-500 text-gray-300 px-3 py-1 rounded-full text-xs sm:text-sm"
                    >
                      {tag}
                    </span>
                  ))}   
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              stopAutoSlide();
              setCurrentIndex(i);
              startAutoSlide();
            }}
            className={`w-3 h-3 rounded-full transition ${
              currentIndex === i ? "bg-sky-500" : "bg-gray-500/50"
            }`}
          />
        ))}
      </div>

      {/* Shadows */}
      <div className="absolute top-0 left-0 h-full w-[5%] bg-gradient-to-r from-black to-transparent pointer-events-none z-5" />
      <div className="absolute top-0 right-0 h-full w-[5%] bg-gradient-to-l from-black to-transparent pointer-events-none z-5" />
    </div>
  );
}

export   function Avatar({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover ring-2 ring-white/20"
    />
  );
}

export   function TeamStrip() {
  const people = new Array(9)
    .fill(0)
    .map((_, i) => `https://i.pravatar.cc/80?img=${i + 1}`);
  return (
    <div className="mt-6  flex flex-wrap items-center justify-center gap-1 sm:gap-1">
      {people.map((p, i) => (
        <Avatar key={i} src={p} alt={`Team member ${i + 1}`} />
      ))}
    </div>
  );
}

export function MobileNav({ open, setOpen, navItems }) {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className={`md:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 transition ${
          open ? "bg-black/40 opacity-100" : "bg-black/0 opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-80 max-w-[85vw] transform bg-white shadow-xl transition ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4">
          <Logo />
          <button
            aria-label="Close menu"
            className="p-2 bg-black rounded-xl text-white"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col gap-4 p-4 text-black">
          {navItems.map((item, idx) =>
            item.children ? (
              <div key={item.label}>
                <button
                  className="flex justify-between items-center w-full text-left font-medium hover:text-sky-500"
                  onClick={() => setExpanded(expanded === idx ? null : idx)}
                >
                  {item.label}
                  <span>{expanded === idx ? "−" : "+"}</span>
                </button>
                {expanded === idx && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.label}
                        href={child.href}
                        onClick={() => setOpen(false)}
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink key={item.label} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            )
          )}
          <PrimaryButton href="#contact">Book Intro Call</PrimaryButton>
        </nav>
      </div>
    </div>
  );
}




// Continuous marquee for client logos (only images)
export function LogosMarquee({ items = [] }) {
  const rows = [items, [...items].reverse()];

  return (
    <div className="relative overflow-hidden">
      {/* edge gradients */}
      <div
        aria-hidden={true}
        className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-neutral-950 to-transparent"
      />
      <div
        aria-hidden={true}
        className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-neutral-950 to-transparent"
      />

      {/* keyframes */}
      <style>{`
        @keyframes marqueeX {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      {rows.map((row, i) => (
        <div key={i} className="flex overflow-hidden">
          <div
            className="flex shrink-0 items-center gap-8 sm:gap-12 py-6 animate-[marqueeX_linear_infinite]"
            style={{
              animationDuration: i === 0 ? "28s" : "32s",
              animationDirection: i === 1 ? "reverse" : "normal",
              width: "200%",
            }}
          >
            {[...row, ...row].map((src, idx) => (
              <div
                key={idx}
                className="h-8 sm:h-19 opacity-80 hover:opacity-100 transition"
              >
                <img
                  src={src}
                  alt={`logo-${idx}`}
                  className="h-full w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
