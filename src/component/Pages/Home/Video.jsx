// const videoCategories = {
//   UGC: ["/videos/ugc1.mp4", "/videos/ugc2.mp4", "/videos/ugc3.mp4", "/videos/ugc4.mp4"],
//   EVENTS: ["/videos/event1.mp4", "/videos/event2.mp4", "/videos/event3.mp4", "/videos/event4.mp4"],
//   SMM: ["/videos/smm1.mp4", "/videos/smm2.mp4", "/videos/smm3.mp4", "/videos/smm4.mp4"],
//   VideoProduction: ["/videos/vp1.mp4", "/videos/vp2.mp4", "/videos/vp3.mp4", "/videos/vp4.mp4"],
//   PersonalBranding: ["/videos/pb1.mp4", "/videos/pb2.mp4", "/videos/pb3.mp4", "/videos/pb4.mp4"],
//   InfluencerMarketing: ["/videos/im1.mp4", "/videos/im2.mp4", "/videos/im3.mp4", "/videos/im4.mp4"],
// };


// import {
//   Container,
 
// } from "../../UI/UiComponent";


// import { useState, useEffect } from "react";

 
// export default function Video(){


  
//   const videos = [
//     "/videos/video1.mp4",
//     "/videos/video2.mov",
//     "/videos/video3.MP4",
//     "/videos/video4.mov",
//     "/videos/bg1.mp4",
//   ];

//    const [currentIndex, setCurrentIndex] = useState(0);
//   const [mutedStates, setMutedStates] = useState(videos.map(() => true)); // sab mute by default

//   // ✅ Responsive visible slides
//   const getVisibleSlides = () => {
//     if (window.innerWidth < 640) return 1; // mobile
//     if (window.innerWidth < 1024) return 2; // tablet
//     return 4; // desktop
//   };

//   const [visibleSlides, setVisibleSlides] = useState(getVisibleSlides());

//   useEffect(() => {
//     const handleResize = () => setVisibleSlides(getVisibleSlides());
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const nextSlide = () => {
//     if (currentIndex < videos.length - visibleSlides) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   const prevSlide = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   // ✅ Ek hi video unmute rahe
//   const toggleMute = (index) => {
//     setMutedStates(
//       (prev) => prev.map((_, i) => (i === index ? !prev[i] : true)) // sirf current video toggle hoga, baaki sab mute
//     );
//   };

//   return(
//     <section>
//               <Container>
//                 <div className="relative w-full  py-10 overflow-hidden">
//                   {/* Videos Container */}
//                   <div
//                     className="flex transition-transform duration-500 ease-in-out"
//                     style={{
//                       transform: `translateX(-${
//                         (currentIndex * 100) / visibleSlides
//                       }%)`,
//                     }}
//                   >
//                     {videos.map((video, idx) => (
//                       <div
//                         key={idx}
//                         className="relative flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 px-2"
//                       >
//                         <div className="relative w-full aspect-[9/16] bg-black rounded-[2rem] border-[1px] border-neutral-800 shadow-xl overflow-hidden">
//                           {/* Video */}
//                           <video
//                             src={video}
//                             className="w-full h-full object-cover"
//                             autoPlay
//                             loop
//                             muted={mutedStates[idx]}
//                           />
    
//                           {/* Mute/Unmute Button */}
//                           <button
//                             onClick={() => toggleMute(idx)}
//                             className="absolute top-2 right-2 bg-black/60 text-white p-2 rounded-full text-xs hover:bg-black transition"
//                           >
//                             {mutedStates[idx] ? "🔇" : "🔊"}
//                           </button>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
    
//                   {/* Left Arrow */}
//                   {currentIndex > 0 && (
//                     <button
//                       onClick={prevSlide}
//                       className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 text-white p-3 rounded-full hover:bg-black transition"
//                     >
//                       {"<"}
//                     </button>
//                   )}
    
//                   {/* Right Arrow */}
//                   {currentIndex < videos.length - visibleSlides && (
//                     <button
//                       onClick={nextSlide}
//                       className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 text-white p-3 rounded-full hover:bg-black transition"
//                     >
//                       {">"}
//                     </button>
//                   )}
//                 </div>
//               </Container>
//             </section>
//   )
// }


import { Container } from "../../UI/UiComponent";
import { useState, useEffect } from "react";

export default function Video() {
  // ✅ Multiple categories
  const videoCategories = {
    UGC: [
    "/videos/video1.mp4",
    "/videos/video2.mov",
    "/videos/video3.MP4",
    "/videos/video4.mov",
    "/videos/bg1.mp4",
    ],
    EVENTS:[
    "/videos/video1.mp4",
    "/videos/bg1.mp4",
    "/videos/video3.MP4",
    "/videos/video2.mov",
    "/videos/video4.mov",
    ],
    SMM: [
      "/videos/video3.MP4",
      "/videos/video2.mov",
      "/videos/bg1.mp4",
      "/videos/video4.mov",
      "/videos/video1.mp4",
    ],
    VideoProduction: [
      "/videos/video2.mov",
      "/videos/video4.mov",
      "/videos/bg1.mp4",
      "/videos/video3.MP4",
      "/videos/video1.mp4",
    ],
    PersonalBranding: [
      "/videos/bg1.mp4",
      "/videos/video1.mp4",
    "/videos/video3.MP4",
    "/videos/video2.mov",
    "/videos/video4.mov",
    ],
    InfluencerMarketing: [
      "/videos/video1.mp4",
      "/videos/video3.MP4",
      "/videos/video2.mov",
      "/videos/bg1.mp4",
      "/videos/video4.mov",
    ],
  };

  const categories = Object.keys(videoCategories);

  // ✅ Active category state
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const videos = videoCategories[activeCategory];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [mutedStates, setMutedStates] = useState(
    videos.map(() => true) // sab mute by default
  );

  // ✅ Reset when category changes
  useEffect(() => {
    setCurrentIndex(0);
    setMutedStates(videos.map(() => true));
  }, [activeCategory]);

  // ✅ Responsive visible slides
  const getVisibleSlides = () => {
    if (window.innerWidth < 640) return 1; // mobile
    if (window.innerWidth < 1024) return 2; // tablet
    return 4; // desktop
  };

  const [visibleSlides, setVisibleSlides] = useState(getVisibleSlides());

  useEffect(() => {
    const handleResize = () => setVisibleSlides(getVisibleSlides());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (currentIndex < videos.length - visibleSlides) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // ✅ Ek hi video unmute rahe
  const toggleMute = (index) => {
    setMutedStates((prev) =>
      prev.map((_, i) => (i === index ? !prev[i] : true))
    );
  };

  return (
    <section>
      <Container>
        {/* ✅ Category Tabs */}
      <div className="w-full rounded-xl p-4 flex flex-wrap gap-4 justify-center bg-cream-50">
  {categories.map((cat) => (
    <button
      key={cat}
      onClick={() => setActiveCategory(cat)}
      className={`px-5 py-2 rounded-full text-sm font-medium transition border ${
        activeCategory === cat
          ? "bg-sky-500 text-white border-sky-500"
          : "bg-white text-black border-cream-300 hover:bg-cream-100"
      }`}
    >
      {cat}
    </button>
  ))}
</div>


        {/* ✅ Videos Slider */}
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
                <div className="relative w-full aspect-[9/16] bg-black rounded-[2rem] border border-neutral-800 shadow-xl overflow-hidden">
                  {/* Video */}
                  <video
                    src={video}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted={mutedStates[idx]}
                  />

                  {/* Mute/Unmute Button */}
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
              className="absolute -left-1 top-1/2 -translate-y-1/2 z-40 bg-white text-black p-3 rounded-full "
            >
              {"<"}
            </button>
          )}

          {/* Right Arrow */}
          {currentIndex < videos.length - visibleSlides && (
            <button
              onClick={nextSlide}
             className="absolute -right-1 top-1/2 -translate-y-1/2 z-40 bg-white text-black p-3 rounded-full"
            >
              {">"}
            </button>
          )}
        </div>
      </Container>
    </section>
  );
}
