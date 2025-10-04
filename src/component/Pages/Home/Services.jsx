


import { useState, useEffect } from "react";
import { GradientText, Container, SectionTitle } from "../../UI/UiComponent";

export default  function Services() {
  const platforms = [
  {
    name: "Social Media",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-sky-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 8h2a2 2 0 012 2v9a2 2 0 01-2 2h-2M7 8H5a2 2 0 00-2 2v9a2 2 0 002 2h2m10-13V5a2 2 0 00-2-2H9a2 2 0 00-2 2v3m10 0H7"
        />
      </svg>
    ),
    description:
      "Build and manage your online presence across all major platforms. Create content that connects, engages, and converts.",
    tags: ["Content Creation", "Community Growth", "Reels & Shorts", "Brand Voice"],
  },
  {
    name: "Graphic Design",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-pink-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l2-2a2 2 0 012.828 0L20 14m-8-8h.01M12 4v.01M4 12h.01M20 12h.01M12 20v.01"
        />
      </svg>
    ),
    description:
      "Creative visuals, branding, and UI/UX design that grab attention and represent your brand identity.",
    tags: ["Brand Identity", "Logo Design", "UI/UX", "Marketing Creatives"],
  },
  {
    name: "Video Editing",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-red-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14m0-4v4m0-4L9 6v12l6-4z"
        />
      </svg>
    ),
    description:
      "Professional editing for YouTube, ads, reels, and storytelling content to maximize engagement.",
    tags: ["Reels Editing", "YouTube Videos", "Ad Videos", "Motion Graphics"],
  },
  {
    name: "SMM",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-green-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 8h10M7 16h10M5 12h14M12 4v16"
        />
      </svg>
    ),
    description:
      "Social Media Marketing strategies designed to boost reach, engagement, and conversions with data-driven campaigns.",
    tags: ["Paid Ads", "Campaign Strategy", "Analytics", "Engagement Boost"],
  },
  {
    name: "Personal Branding",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-yellow-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5.121 17.804A9 9 0 1112 21a9 9 0 01-6.879-3.196z"
        />
      </svg>
    ),
    description:
      "Craft a powerful personal brand with the right voice, visuals, and consistent online presence.",
    tags: ["Thought Leadership", "Content Strategy", "Profile Design", "Reputation Growth"],
  },
  {
    name: "Influencer Marketing",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-purple-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4v1m0 14v1m8-8h1M4 12H3m15.364-7.364l.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707"
        />
      </svg>
    ),
    description:
      "Leverage influencer collaborations to expand reach, build credibility, and drive conversions.",
    tags: ["Collabs", "Campaign Management", "Brand Partnerships", "Audience Targeting"],
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










