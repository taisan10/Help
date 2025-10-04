// export default function Company() {
//   return <h1 className="text-center text-3xl p-10">Company Page</h1>;
// }


import { useState, useEffect } from "react";
import {Container} from "../UI/UiComponent"; // adjust import if needed

// Sample video data grouped by category
const videoCategories = [
  {
    name: "UGC",
    videos:  [
    "/videos/video1.mp4",
    "/videos/video2.mov",
    "/videos/video3.MP4",
    "/videos/video4.mov",
    "/videos/bg1.mp4",
  ],
  },
  {
    name: "EVENTS",
    videos: ["/event1.mp4", "/event2.mp4", "/event3.mp4", "/event4.mp4"],
  },
  {
    name: "SMM",
    videos: ["/smm1.mp4", "/smm2.mp4", "/smm3.mp4", "/smm4.mp4"],
  },
  {
    name: "Video Production",
    videos:  [
    "/videos/video1.mp4",
    "/videos/video2.mov",
    "/videos/video3.MP4",
    "/videos/video4.mov",
    "/videos/bg1.mp4",
  ],
  },
  {
    name: "Personal Branding",
    videos: ["/pb1.mp4", "/pb2.mp4", "/pb3.mp4", "/pb4.mp4"],
  },
  {
    name: "Influencer Marketing",
    videos: ["/im1.mp4", "/im2.mp4", "/im3.mp4", "/im4.mp4"],
  },
];

export default function Company() {
  const [selectedCategory, setSelectedCategory] = useState("UGC");
  const [videos, setVideos] = useState(videoCategories[0].videos);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mutedStates, setMutedStates] = useState(
    videoCategories[0].videos.map(() => true)
  );

  const visibleSlides = 4; // adjust for responsiveness if needed

  useEffect(() => {
    const matched = videoCategories.find((cat) => cat.name === selectedCategory);
    setVideos(matched ? matched.videos : []);
    setMutedStates(matched ? matched.videos.map(() => true) : []);
    setCurrentIndex(0); // reset carousel position on category change
  }, [selectedCategory]);

 const toggleMute = (idx) => {
  setMutedStates((prev) =>
    prev.map((state, i) => (i === idx ? !state : state))
  );
};

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + 1, videos.length - visibleSlides)
    );
  };

  return (
    <section>
      <Container>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mt-26">
          {videoCategories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                selectedCategory === cat.name
                  ? "bg-yellow-400 text-black"
                  : "bg-neutral-800 text-white hover:bg-neutral-700"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Video Carousel */}
        <div className="relative w-full py-10 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${
                (currentIndex * 100) / visibleSlides
              }%)`,
            }}
          >
            {videos.map((video, idx) => (
              <div
                key={idx}
                className="relative flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 px-2"
              >
                <div className="relative w-full aspect-[9/16] bg-black rounded-[2rem] border-[1px] border-neutral-800 shadow-xl overflow-hidden">
                  <video
                    src={video}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted={mutedStates[idx]}
                  />
                  <button
                    onClick={() => toggleMute(idx)}
                    className="absolute top-2 right-2 bg-black/60 text-white p-2 rounded-full text-xs hover:bg-black transition"
                  >
                    {mutedStates[idx] ? "🔇" : "🔊"}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Left Arrow */}
          {currentIndex > 0 && (
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 text-white p-3 rounded-full hover:bg-black transition"
            >
              ◀
            </button>
          )}

          {/* Right Arrow */}
          {currentIndex < videos.length - visibleSlides && (
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 text-white p-3 rounded-full hover:bg-black transition"
            >
              ▶
            </button>
          )}
        </div>
      </Container>
    </section>
  );
}
