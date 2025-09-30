import { useState, useEffect } from "react";
import { GradientText, Container, SectionTitle } from "../../../UI/UiComponent";

export function BestServicesCarousel() {
  const platforms = [
    {
      name: "Facebook",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 fill-blue-500"
          viewBox="0 0 24 24"
        >
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99h-2.54V12h2.54V9.8c0-2.5 1.5-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.62.76-1.62 1.54V12h2.77l-.44 2.89h-2.33v6.99C18.34 21.13 22 17 22 12z" />
        </svg>
      ),
      description:
        "Meta marketing done right — from targeted campaigns to community growth and high-converting funnels.",
      tags: [
        "Audience Targeting",
        "Community Building",
        "Paid Campaigns",
        "Funnel Strategy",
        "Content Planning",
        "Retargeting Ads",
        "Lead Generation",
      ],
    },
    {
      name: "Instagram",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 fill-pink-500"
          viewBox="0 0 24 24"
        >
          <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" />
        </svg>
      ),
      description:
        "Stunning visuals, reels, and influencer collaboration. Build a loyal brand following on IG.",
      tags: [
        "Visual Branding",
        "Stories & Reels",
        "Hashtag Strategy",
        "Influencer Collabs",
        "Ad Creative",
        "Audience Growth",
      ],
    },
    {
      name: "LinkedIn",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 fill-blue-400"
          viewBox="0 0 24 24"
        >
          <path d="M20.447 20.452H17.2V15.9c0-1.085-.02-2.48-1.51-2.48-1.512 0-1.744 1.18-1.744 2.398v4.634H10.7V9h3.11v1.56h.044c.435-.823 1.494-1.687 3.073-1.687 3.29 0 3.898 2.166 3.898 4.982v6.598zM7.337 7.433a1.805 1.805 0 110-3.61 1.805 1.805 0 010 3.61zM8.704 20.452H5.967V9h2.737v11.452zM22.225 0H1.771C.792 0 0 .77 0 1.723v20.554C0 23.23.792 24 1.771 24h20.451C23.207 24 24 23.23 24 22.277V1.723C24 .77 23.207 0 22.225 0z" />
        </svg>
      ),
      description:
        "Build authority and pipeline. From thought leadership content to full-funnel B2B ads.",
      tags: [
        "B2B Strategy",
        "Thought Leadership",
        "LinkedIn Ads",
        "DM Campaigns",
        "Lead Gen Funnels",
        "Profile Optimization",
      ],
    },
    {
      name: "Twitter (X)",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 fill-white"
          viewBox="0 0 24 24"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.19l-5.214-6.822-5.97 6.822H1.697l7.73-8.832L1.25 2.25h7.926l4.713 6.231z" />
        </svg>
      ),
      description:
        "Engage in real-time conversations and trends. Perfect for brand voice and viral campaigns.",
      tags: [
        "Hashtag Trends",
        "Brand Voice",
        "Engagement",
        "Viral Content",
        "Community Growth",
      ],
    },
    {
      name: "YouTube",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 fill-red-500"
          viewBox="0 0 24 24"
        >
          <path d="M23.5 6.2s-.2-1.6-.9-2.3c-.8-.9-1.7-.9-2.1-1C16.8 2.5 12 2.5 12 2.5h0s-4.8 0-8.5.4c-.4.1-1.3.1-2.1 1C.7 4.6.5 6.2.5 6.2S0 8.1 0 10v1.9c0 1.9.5 3.8.5 3.8s.2 1.6.9 2.3c.8.9 1.8.9 2.3 1 1.7.2 7.2.4 8.3.4 0 0 4.8 0 8.5-.4.4-.1 1.3-.1 2.1-1 .7-.7.9-2.3.9-2.3s.5-1.9.5-3.8V10c0-1.9-.5-3.8-.5-3.8zM9.7 14.3V7.7l6.2 3.3-6.2 3.3z" />
        </svg>
      ),
      description:
        "Video content powerhouse — tutorials, ads, and storytelling to captivate audiences.",
      tags: [
        "Video Ads",
        "Content Strategy",
        "SEO for Videos",
        "Community Building",
        "Monetization",
      ],
    },
    {
      name: "TikTok",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 fill-pink-400"
          viewBox="0 0 24 24"
        >
          <path d="M12 2c1.3 0 2.4 0 3.3.1 0 1.4.2 2.4.6 3.3.4.9 1 1.6 1.7 2.2.7.6 1.6 1 2.7 1.2v3.2c-1.5-.1-2.8-.6-3.9-1.3V17c0 2.7-2.2 5-5 5s-5-2.2-5-5 2.2-5 5-5c.4 0 .9.1 1.3.2V8.7c-.4-.1-.9-.1-1.3-.1-4.4 0-8 3.6-8 8s3.6 8 8 8c4.5 0 8.1-3.6 8.1-8.1V6.6c-1.1-.4-2.1-1-3-1.9-.9-.9-1.5-2-1.9-3.3C14.4 1.2 13.3 1 12 1v1z" />
        </svg>
      ),
      description:
        "Short-form video domination. Go viral with trends, challenges, and influencer marketing.",
      tags: [
        "Trendy Content",
        "Influencer Collabs",
        "Music Integration",
        "Ad Campaigns",
        "Audience Growth",
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










