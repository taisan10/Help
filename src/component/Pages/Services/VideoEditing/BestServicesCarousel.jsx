import { useState, useEffect } from "react";
import { GradientText, Container, SectionTitle } from "../../../UI/UiComponent";

export function BestServicesCarousel() {
  const platforms = [
  {
    name: "Video Editing",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 fill-purple-500"
        viewBox="0 0 24 24"
      >
        <path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm3 2l7 4-7 4V8z" />
      </svg>
    ),
    description:
      "Professional editing services for films, ads, and social media. Smooth transitions and stunning visuals.",
    tags: [
      "Cutting & Trimming",
      "Transitions",
      "Color Correction",
      "Motion Graphics",
      "Text Animations",
      "Sound Sync",
    ],
  },
  {
    name: "Color Grading",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 fill-yellow-400"
        viewBox="0 0 24 24"
      >
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 2c1.66 0 3 1.34 3 3S13.66 10 12 10s-3-1.34-3-3 1.34-3 3-3zm0 16c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
    ),
    description:
      "Bring cinematic feel to your videos with advanced LUTs, tone adjustments, and creative grading.",
    tags: [
      "LUTs",
      "Cinematic Tones",
      "HDR Balance",
      "Skin Retouching",
      "Color Balance",
    ],
  },
  {
    name: "Motion Graphics",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 fill-green-400"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l9 4.9v9.8L12 22l-9-5.3V6.9L12 2zm0 2.2L5 7.1v9.8l7 4.1 7-4.1V7.1l-7-2.9zm-1 4.3l5 2.9-5 2.9V8.5z" />
      </svg>
    ),
    description:
      "Dynamic motion graphics and animations for intros, ads, and engaging social media reels.",
    tags: [
      "Logo Animation",
      "Kinetic Typography",
      "Infographics",
      "Lower Thirds",
      "Animated Ads",
    ],
  },
  {
    name: "VFX & Visuals",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 fill-red-500"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l4 9H8l4-9zm0 20l-4-9h8l-4 9zm-9-9l9-4v8l-9-4zm18 0l-9 4v-8l9 4z" />
      </svg>
    ),
    description:
      "High-quality VFX for films, advertisements, and creative storytelling projects.",
    tags: [
      "Green Screen",
      "Compositing",
      "Particles",
      "Special Effects",
      "3D Integration",
    ],
  },
  {
    name: "Sound Design",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 fill-blue-400"
        viewBox="0 0 24 24"
      >
        <path d="M4 9v6h4l5 5V4L8 9H4zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.06a4.5 4.5 0 002.5-4.03z" />
      </svg>
    ),
    description:
      "Enhance your videos with perfect background music, sound effects, and audio mixing.",
    tags: [
      "Audio Sync",
      "Sound FX",
      "Background Music",
      "Voice Overs",
      "Mix & Master",
    ],
  },
  {
    name: "Social Media Edits",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 fill-pink-500"
        viewBox="0 0 24 24"
      >
        <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm5 3a5 5 0 100 10 5 5 0 000-10z" />
      </svg>
    ),
    description:
      "Quick, trendy, and engaging edits tailored for platforms like Instagram, TikTok, and YouTube Shorts.",
    tags: [
      "Reels & Shorts",
      "Trending Styles",
      "Fast Cuts",
      "Text Overlays",
      "Platform Ready",
    ],
  },
];

  const [index, setIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Auto slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === platforms.length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => clearInterval(timer);
  }, [platforms.length]);

  // Swipe handlers
  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      setIndex(index === platforms.length - 1 ? 0 : index + 1);
    }
    if (touchStart - touchEnd < -50) {
      setIndex(index === 0 ? platforms.length - 1 : index - 1);
    }
  };

  return (
    <div className="relative py-14 bg-neutral-950 text-white overflow-hidden">
      <Container>
        <SectionTitle
          title={<GradientText>What We Do Best</GradientText>}
          subtitle="Tailored marketing strategies across every major platform"
        />

        <div className="relative mt-10">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {platforms.map((platform, i) => (
                <div
                  key={i}
                  className="w-full flex-shrink-0 px-4 sm:px-8 md:px-15"
                >
                  <div className="bg-[#1a1a1a] rounded-3xl p-6 sm:p-10 shadow-xl h-full">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl sm:text-5xl font-bold">
                        {platform.name}
                      </h3>
                      <div className="border border-white rounded-full h-20 w-20 sm:h-28 sm:w-28 flex items-center justify-center">
                        {platform.icon}
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-white/70 mb-10">
                      {platform.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {platform.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-white/10 text-white text-xs sm:text-sm px-3 py-1 rounded-full border border-white/10"
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
            {platforms.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition ${
                  index === i ? "bg-sky-500" : "bg-gray-500/50"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}










