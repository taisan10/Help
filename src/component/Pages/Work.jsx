// export default function Work() {
//   return <h1 className="text-center text-3xl p-10">Work Page</h1>;
// }
// BetmodeCase.jsx

import React from "react";
import { Container } from "../UI/UiComponent";

const HeroSection = () => {
  return (
    <section className="bg-blue-900 text-white px-6 py-16 mt-15 ">
      <Container className="md:flex md:items-center md:justify-between">
        {/* Left Side */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">Betmode</h1>
          <p className="text-lg md:text-xl font-medium">
            500,000 Views on Twitter in 3 Months: Influencer Marketing for Betmode’s Gambling Platform
          </p>
          <div className="flex flex-wrap gap-3 pt-4">
            {['iGaming', 'Digital Design', 'Influencer Marketing', 'Social Media'].map((tag) => (
              <button
                key={tag}
                className="bg-white text-blue-900 font-semibold px-4 py-2 rounded-full hover:bg-gray-100 transition"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src="/template-image.png"
            alt="Betmode Honeymoon Promo"
            className="max-w-xs md:max-w-md rounded-lg shadow-lg"
          />
        </div>
      </Container>
    </section>
  );
};



const Sidebar = () => {
  const links = [
    'Overview',
    'Services Provided',
    'Challenge',
    'Approach',
    'Curious About Our Approach',
  ];

  return (
    <aside className="sticky top-2 h-screen bg-white border-r px-6 py-10">
      <nav className="space-y-6">
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
            className="block text-gray-800 font-medium hover:text-blue-600"
          >
            {link}
          </a>
        ))}
      </nav>
    </aside>
  );
};

const OverviewSection = () => {
  const metrics = [
    { label: 'Views', value: '517,507' },
    { label: 'Likes', value: '7,701' },
    { label: 'Reposts', value: '2,530' },
    { label: 'Comments', value: '2,343' },
    { label: 'Bookmarks', value: '32' },
    { label: 'Engagement Rate', value: '2%' },
  ];

  return (
    <section id="overview" className="px-6 py-10 bg-white">
      
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Overview</h2>
      <p className="text-gray-700 text-lg mb-8 max-w-3xl">
        Betmode is a new online gambling platform in the iGaming niche. The target audience includes experienced Web3 and crypto users with their own wallets, who are looking for fair and transparent iGaming platforms.
      </p>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 gap-6 max-w-xl">
        {metrics.map((item, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-blue-900">{item.value}</div>
            <div className="text-sm text-gray-600">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

const ServicesProvided = () => {
  const services = [
    { name: 'Influencer Marketing', icon: '⭐' },
    { name: 'Social Media', icon: '🛡️' },
    { name: 'Digital Design', icon: '✏️' },
  ];

  return (
    <section id="services-provided" className="px-6 py-10 bg-white">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Services Provided</h2>
      <div className="flex flex-wrap gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-white border rounded-lg shadow-sm px-6 py-4"
          >
            <div className="text-3xl">{service.icon}</div>
            <div className="text-lg font-medium text-gray-800">{service.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

const ChallengeSection = () => {
  return (
    <section id="challenge" className="px-6 py-10 bg-white">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Challenge</h2>
      <p className="text-gray-700 text-lg max-w-3xl leading-relaxed">
        We started by reviewing all the initial materials: the client’s brief, product, and goals. Together, we discussed the key objectives. For competitor analysis, we focused on the projects the client had pointed to as references — well-known names in the iGaming and Web3 segments.
        <br /><br />
        Using brand analytics, we looked into which influencers had promoted these platforms, what their posts looked like, and what kind of offers they used. This research led us to two key insights.
      </p>
    </section>
  );
};

const ApproachSection = () => {
  return (
    <section id="approach" className="bg-white text-gray-900 py-10">
      <Container>
        <div className="rounded-3xl bg-gradient-to-r from-blue-600/80  to-teal-600 p-6 sm:p-8 ring-1 ring-white/10 w-200">
        <h2 className="text-3xl font-bold mb-4">Approach</h2>
        <p className="text-lg leading-relaxed max-w-3xl">
          Build awareness for the new project and stand out from competitors. Test an influencer campaign as the first stage of the funnel — helping to establish awareness before moving into performance campaigns aimed at direct registrations and deposits. Plan the next move via a cross-project track, map metrics, identify the best-performing influencers, and lay the groundwork for the next stage of promotion.
        </p>
        </div>
      </Container>
    </section>
  );
};


const CuriousSection=()=> {
  return (
    <section className="py-12 sm:py-16 bg-white ">
      <Container>
        <div className="rounded-3xl bg-gradient-to-r from-sky-600/80 via-black-400/40 to-teal-600/80 p-6 sm:p-8 ring-1 ring-white/10">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-xl sm:text-3xl font-semibold">
            Curious about our approach?

            </h3>
            <p className="mt-2 text-white/80">
               Contact us to see how we can meet your needs!

            </p>
            <div className="mt-5 sm:mt-6">
              <button className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
          Book a call

              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
const CaseStudyLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <OverviewSection />
         <ServicesProvided />
        <ChallengeSection />
<ApproachSection />
<CuriousSection />
   
      </main>
    </div>
  );
};



const Work = () => (
  <div>
    <HeroSection />
    <CaseStudyLayout />
    
    {/* <ServicesProvidedSection /> */}
    {/* <ChallengeSection /> */}
    {/* <ApproachSection /> */}
  </div>
);

export default Work;
