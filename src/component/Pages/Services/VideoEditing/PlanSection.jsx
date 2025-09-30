
import  { useState,useRef,useEffect } from "react";

import {GradientText,Container,PrimaryButton} from  "../../../UI/UiComponent"



export function PlanSection() {
  const [billingCycle, setBillingCycle] = useState("quarterly");
  const [currency, setCurrency] = useState("USD");
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef(null);

  // Exchange rates
  const rates = {
    INR: 83,
    USD: 1,
    CAD: 1.35,
  };

  // Plan data in USD
  const plans = [
    { name: "Get started plan", hours: 40, monthly: 3200 },
    { name: "Boost plan", hours: 80, monthly: 5600 },
    { name: "Full force plan", hours: 160, monthly: 9600 },
    {
      name: "All inclusive",
      hours: "Custom",
      monthly: 20000,
      custom: true,
    },
  ];

  // Discounts
  const discounts = {
    quarterly: 0,
    semi: 0.12,
    annual: 0.3,
  };

  // Currency symbols
  const symbols = {
    INR: "₹",
    USD: "$",
    CAD: "C$",
  };

  const getPrice = (price) => {
    const discount =
      billingCycle === "semi"
        ? 1 - discounts.semi
        : billingCycle === "annual"
        ? 1 - discounts.annual
        : 1;

    const converted = price * rates[currency] * discount;
    return converted.toLocaleString();
  };

  // Detect active slide for dots
  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const index = Math.round(
          carouselRef.current.scrollLeft / carouselRef.current.offsetWidth
        );
        setActiveSlide(index);
      }
    };
    const ref = carouselRef.current;
    if (ref) ref.addEventListener("scroll", handleScroll);
    return () => ref && ref.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-black py-16 text-white">
      <Container>
     {/* Heading */}
<h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-center mb-6 md:mb-12 leading-snug md:leading-tight px-4">
  Select your plan. You can change it <br className="hidden sm:block" />
  <GradientText>whenever you need to</GradientText>
</h2>


      {/* Billing Cycle Tabs */}
      <div className="flex justify-center flex-wrap gap-4 mb-8">
        <button
          className={`px-4 py-2 rounded-full ${
            billingCycle === "quarterly" ? "bg-white text-black" : "bg-gray-800"
          }`}
          onClick={() => setBillingCycle("quarterly")}
        >
          Quarterly
        </button>
        <button
          className={`px-4 py-2 rounded-full ${
            billingCycle === "semi" ? "bg-white text-black" : "bg-gray-800"
          }`}
          onClick={() => setBillingCycle("semi")}
        >
          Semi-annual{" "}
          <GradientText>{discounts.semi * 100}% off</GradientText>
        </button>
        <button
          className={`px-4 py-2 rounded-full ${
            billingCycle === "annual" ? "bg-white text-black" : "bg-gray-800"
          }`}
          onClick={() => setBillingCycle("annual")}
        >
          Annual <GradientText>{discounts.annual * 100}% off</GradientText>
        </button>
      </div>

      {/* Currency Toggle */}
      <div className="flex justify-center space-x-6 mb-12">
        {Object.keys(symbols).map((cur) => (
          <button
            key={cur}
            onClick={() => setCurrency(cur)}
            className={`text-2xl ${
              currency === cur ? "text-sky-400 scale-110" : "text-gray-400"
            } transition-transform`}
          >
            {symbols[cur]}
          </button>
        ))}
      </div>

      {/* Plans */}
      <div className="px-6 max-w-7xl mx-auto">
        {/* Mobile Carousel */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory md:hidden pb-4 scroll-smooth scrollbar-hide"
        >
          {plans.map((plan, i) => (
            <div
              key={i}
              className="min-w-[80%] flex-shrink-0 snap-center flex flex-col justify-between rounded-2xl p-6 bg-black border border-gray-700 hover:bg-gradient-to-r hover:from-sky-900 hover:to-teal-900 transition-all duration-300"
            >
              <div>
                <p className="text-sm text-gray-400 mb-2">{plan.name}</p>
                <h3 className="text-3xl font-bold mb-4">
                  {plan.hours}h <span className="text-lg">/ mo</span>
                </h3>
                {!plan.custom ? (
                  <p className="text-xl font-semibold mb-2">
                    {symbols[currency]} {getPrice(plan.monthly)}{" "}
                    <span className="text-base text-gray-400">/ Monthly</span>
                  </p>
                ) : (
                  <p className="text-xl font-semibold">
                    {symbols[currency]}
                    {getPrice(plan.monthly)} - {symbols[currency]}
                    {getPrice(100000)}
                    <span className="text-base text-gray-400"> / Mo</span>
                  </p>
                )}
              </div>
              <div className="mt-6 flex justify-center">
                <PrimaryButton href="#contact">Book A Call</PrimaryButton>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Dots (mobile only) */}
        <div className="flex justify-center mt-4 md:hidden">
          {plans.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full mx-1 ${
                activeSlide === i ? "bg-sky-400" : "bg-gray-600"
              }`}
            ></div>
          ))}
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="flex flex-col justify-between rounded-2xl p-6 bg-black border border-gray-700 hover:bg-gradient-to-r hover:from-sky-900 hover:to-teal-900 transition-all duration-300"
            >
              <div>
                <p className="text-sm text-gray-400 mb-2">{plan.name}</p>
                <h3 className="text-3xl font-bold mb-4">
                  {plan.hours}h <span className="text-lg">/ mo</span>
                </h3>
                {!plan.custom ? (
                  <p className="text-xl font-semibold mb-2">
                    {symbols[currency]} {getPrice(plan.monthly)}{" "}
                    <span className="text-base text-gray-400">/ Monthly</span>
                  </p>
                ) : (
                  <p className="text-xl font-semibold">
                    {symbols[currency]}
                    {getPrice(plan.monthly)} - {symbols[currency]}
                    {getPrice(100000)}
                    <span className="text-base text-gray-400"> / Mo</span>
                  </p>
                )}
              </div>
              <div className="mt-6 flex justify-center">
                <PrimaryButton href="#contact">Book A Call</PrimaryButton>
              </div>
            </div>
          ))}
        </div>
      </div>
      </Container>
    </section>
  );
}
