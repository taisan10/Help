
import { PrimaryButton,GradientText,Container } from "../../UI/UiComponent";

import { useState } from "react";
const worksData = [
  {
    id: 1,
    name: "Adda",
    img: "/images/betmode.png",
    description:
      "500,000 Views on Twitter in 3 Months: Influencer Marketing for Betmode’s Gambling Platform",
    stats: [
      { label: "Views", value: "517,507" },
      { label: "Likes", value: "7,701" },
      { label: "Reposts", value: "2,530" },
      { label: "Comments", value: "2,343" },
    ],
  },
  {
    id: 2,
    name: "Desi_Garden",
    img: "/images/fintech.png",
    description: "Fintech Corp drove massive user deposits through campaigns.",
    stats: [
      { label: "Deposits", value: "20M" },
      { label: "Conversion Rate", value: "16.8%" },
      { label: "Engagement Reels", value: "30%" },
      { label: "PR Reach", value: "1.5M" },
    ],
  },
  {
    id: 3,
    name: "Nayya",
    img: "/images/ecomx.png",
    description: "Boosted E-commerce sales with influencer marketing.",
    stats: [
      { label: "Orders", value: "120K" },
      { label: "Revenue Growth", value: "45%" },
      { label: "Repeat Buyers", value: "18K" },
      { label: "Social Shares", value: "32K" },
    ],
  },
  {
    id: 4,
    name: "Pita Nutso",
    img: "/images/aihub.png",
    description: "AI Hub’s awareness campaign across social platforms.",
    stats: [
      { label: "App Downloads", value: "89K" },
      { label: "Retention Rate", value: "72%" },
      { label: "Demo Requests", value: "1,200" },
      { label: "Global Reach", value: "1.8M" },
    ],
  },
  {
    id: 5,
    name: "Rivaaj",
    img: "/images/gamingone.png",
    description: "GamingOne launch campaign generated huge buzz.",
    stats: [
      { label: "Players Joined", value: "300K" },
      { label: "Daily Active Users", value: "50K" },
      { label: "Streams", value: "12K" },
      { label: "Engagement Rate", value: "64%" },
    ],
  },
  {
    id: 6,
    name: "Triveeni Events",
    img: "/images/healthplus.png",
    description: "Healthcare brand awareness campaign in 2 months.",
    stats: [
      { label: "Consultations", value: "210K" },
      { label: "Patient Signups", value: "35K" },
      { label: "Conversion Rate", value: "22%" },
      { label: "App Reviews", value: "9K" },
    ],
  },
  {
    id: 7,
    name: "Sake Cafe",
    img: "/images/saasify.png",
    description: "SaaS product growth via targeted influencer collabs.",
    stats: [
      { label: "Subscribers", value: "275K" },
      { label: "MRR Growth", value: "38%" },
      { label: "Churn Reduced", value: "12%" },
      { label: "Active Teams", value: "8,200" },
    ],
  },
  {
    id: 8,
    name: "BB_Station",
    img: "/images/forex.png",
    description: "ForexWorld boosted lead generation via campaigns.",
    stats: [
      { label: "Leads Generated", value: "145K" },
      { label: "Conversion Rate", value: "11.5%" },
      { label: "Trader Signups", value: "42K" },
      { label: "Engagement", value: "27%" },
    ],
  },
  {
    id: 9,
    name: "Bar & Grill",
    img: "/images/edunext.png",
    description: "EdTech platform grew with 200K organic reach.",
    stats: [
      { label: "Students Enrolled", value: "198K" },
      { label: "Courses Completed", value: "75K" },
      { label: "Mentor Signups", value: "1,200" },
      { label: "Social Mentions", value: "5.5K" },
    ],
  },
  {
    id: 10,
    name: "Piink",
    img: "/images/web3.png",
    description: "Web3Chain’s marketing campaign for crypto adoption.",
    stats: [
      { label: "Community Growth", value: "260K" },
      { label: "Token Holders", value: "55K" },
      { label: "Campaign Reach", value: "4.2M" },
      { label: "Engagement Rate", value: "34%" },
    ],
  },
];


export default function Work() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextWork = () => {
    setActiveIndex((prev) => (prev + 1) % worksData.length);
  };

  const prevWork = () => {
    setActiveIndex((prev) =>
      prev === 0 ? worksData.length - 1 : prev - 1
    );
  };

  const activeWork = worksData[activeIndex];

  return (
    <section className="py-16 px-4 md:px-12 text-center">
      <Container>
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-10">Our Works</h2>

      {/* Company Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {worksData.map((work, index) => (
          <button
            key={work.id}
            onClick={() => setActiveIndex(index)}
            className={`px-4 py-2 rounded-full text-sm md:text-base transition 
              ${
                activeIndex === index
                  ? "bg-gradient-to-r from-purple-500 to-sky-400 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
          >
            {work.name}
          </button>
        ))}
      </div>

{/* Active Work Details */}
<div className="bg-gray-400 rounded-3xl p-6 md:p-10 flex flex-col md:flex-row gap-6 items-center text-left min-h-[400px]">

  {/* Left Image */}
  <div className="flex-1">
    <img
      src={activeWork.img}
      alt={activeWork.name}
      className="rounded-lg shadow-md w-full max-h-80 object-cover"
    />
  </div>

  {/* Right Stats + Button */}
  <div className="flex-1 flex flex-col justify-between h-full text-black">

    {/* Stats Grid */}
    <div className="grid grid-cols-2 gap-y-4">
      {activeWork.stats.map((stat, idx) => (
        <div key={idx} className="border-b border-black/20 pb-2">
          <span className="font-semibold">{stat.value}</span> {stat.label}
        </div>
      ))}
    </div>

    {/* Read More Button */}
    <div className="pt-34">
      <PrimaryButton href="#contact">Read More</PrimaryButton>
    </div>

  </div>
</div>


      {/* Bottom Navigation */}
      <div className="mt-10 flex justify-center items-center gap-4">
       <PrimaryButton href="#contact">See More Success Stories</PrimaryButton>
          
        <div className="flex gap-3">
  {/* Previous Button */}
  <button
    onClick={prevWork}
    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 text-white shadow-md"
  >
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  </button>

  {/* Next Button */}
  <button
    onClick={nextWork}
    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 text-white shadow-md"
  >
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </button>
</div>

      </div>
      </Container>
    </section>
  );
}
