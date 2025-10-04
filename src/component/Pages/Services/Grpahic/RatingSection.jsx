import { useState} from "react";

import {Container} from "../../../UI/UiComponent"
import ContactPage from "../../../UI/Contactpage";


// ⭐ Custom Icons (SVG)
const Star = ({ className = "w-5 h-5 text-yellow-400" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className={className}
  >
    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 
             1.48 8.279L12 18.896l-7.416 4.517 
             1.48-8.279L0 9.306l8.332-1.151z" />
  </svg>
);

const LeftArrow = ({ className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

const RightArrow = ({ className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

// ⭐ Sample Reviews Data
const reviews = [
  {
    rating: 5,
    industry: "Software",
    country: "Singapore",
    employees: "11-50 Employees",
    confidentiality: "Confidential",
    duration: "Feb. 2022 - Ongoing",
    feedback:
      "Rivaaz.io is a multi-talented team offering a wide array of skills, creativity, and experience.",
    clientLogo: "",
    clientName: "Charles Ellingsen | Unity Network",
    clientPosition: "CEO & Founder",
  },
  {
    rating: 5,
    industry: "Other Industry",
    country: "Spain",
    employees: "11-50 Employees",
    confidentiality: "Confidential",
    duration: "Feb. - Apr. 2023",
    feedback:
      "We were very happy with the team's work. We always received everything on time and with great quality.",
    clientLogo: "",
    clientName: "Christophe Ozcan | Tozex",
    clientPosition: "Chief Executive Officer",
  },
];

export  function RatingSection() {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % reviews.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);

  // 📱 Mobile Swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };
  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (diff > 50) nextSlide(); // swipe left
    if (diff < -50) prevSlide(); // swipe right

    setTouchStart(null);
  };

  return (
    <>
    
    <section className="bg-black text-white py-16 px-4 md:px-12">
      <Container>
      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
        Our rating based on{" "}
        <span className="text-yellow-400">2</span> verified client reviews
      </h2>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Fixed Card */}
        <div className="bg-white text-black rounded-xl p-6 md:w-1/3 flex-shrink-0 shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold">Bluenose</h3>
            <a
              href="/"
              className="text-sm underline hover:text-blue-600"
            >
              View our profile
            </a>
          </div>

          <p className="text-xl font-semibold mb-2 flex items-center">
            4.9{" "}
            <span className="flex text-yellow-400 ml-2">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <Star key={i} />
                ))}
            </span>
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-3 py-1 bg-gray-200 text-sm rounded-full">
              High-quality work
            </span>
            <span className="px-3 py-1 bg-gray-200 text-sm rounded-full">
              Timely
            </span>
            <span className="px-3 py-1 bg-gray-200 text-sm rounded-full">
              Communicative
            </span>
            <span className="px-3 py-1 bg-gray-200 text-sm rounded-full">
              Professional
            </span>
            <span className="px-3 py-1 bg-gray-200 text-sm rounded-full">
              Project Management
            </span>
          </div>
        </div>

        {/* Right Carousel */}
        <div
          className="bg-neutral-900 rounded-xl p-6 md:w-2/3 flex flex-col justify-between relative"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Part */}
            <div>
              <p className="text-2xl font-bold flex items-center mb-4">
                {reviews[current].rating.toFixed(1)}
                <span className="flex ml-2">
                  {Array(reviews[current].rating)
                    .fill()
                    .map((_, i) => (
                      <Star key={i} />
                    ))}
                </span>
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>🏢 {reviews[current].industry}</li>
                <li>📍 {reviews[current].country}</li>
                <li>👥 {reviews[current].employees}</li>
                <li>🔒 {reviews[current].confidentiality}</li>
                <li>📅 {reviews[current].duration}</li>
              </ul>
            </div>

            {/* Right Part */}
            <div>
              <p className="text-lg italic mb-4">
                “{reviews[current].feedback}”
              </p>
             {/* Client Info */}
<div className="flex items-center gap-3">
  {reviews[current].clientLogo ? (
    <img
      src={reviews[current].clientLogo}
      alt="Client Logo"
      className="w-8 h-8 rounded-full border border-gray-600"
      onError={(e) => {
        e.target.style.display = "none"; // agar image load na ho
      }}
    />
  ) : (
    // Fallback avatar
    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 text-xs font-bold text-white">
      {reviews[current].clientName.charAt(0)}
    </div>
  )}

  <div>
    <p className="font-semibold">{reviews[current].clientName}</p>
    <p className="text-sm text-gray-400">{reviews[current].clientPosition}</p>
  </div>
</div>

            </div>
          </div>

          {/* Prev / Next + Dots */}
          <div className="flex flex-col items-center mt-6">
            <div className="flex gap-4">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full border border-gray-600 hover:bg-gray-700 transition"
              >
                <LeftArrow className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 rounded-full border border-gray-600 hover:bg-gray-700 transition"
              >
                <RightArrow className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex mt-4 gap-2">
              {reviews.map((_, i) => (
                <div
                  key={i}
                  className={`h-2 w-2 rounded-full ${
                    current === i ? "bg-yellow-400" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      </Container>
    </section>

    <ContactPage />
    </>
  );
}