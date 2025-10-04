import { Container, } from "../UI/UiComponent"
import { useState } from "react";

export default function ContactPage() {
   
    const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/api/Contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("✅ Form submitted successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        alert("❌ Failed to submit form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("⚠️ Something went wrong!");
    } finally {
      setLoading(false);
    }
  }



  return (
    <section id="contact" className="py-16 sm:py-20">
                 <Container className="grid gap-8 sm:gap-12 md:grid-cols-2 items-start">
                   <div>
                     <h3 className="text-3xl sm:text-4xl font-semibold leading-tight mb-4 sm:mb-6">
                       Ready to take your marketing to the next level?
                     </h3>
                     <ul className="space-y-2 sm:space-y-3 text-white/80 text-base sm:text-lg">
                       <li>• How Bluenose works</li>
                       <li>
                         • How you can do marketing at scale better, faster and cheaper
                       </li>
                       <li>
                         • How we’re different from agencies, freelancers and in‑house
                         teams(hint: faster & leaner!)
                       </li>
                       <li>• The most suitable subscription plan for your needs</li>
                     </ul>
                     {/* <LogoRow /> */}
                   </div>
                   <div className="rounded-[24px] sm:rounded-[28px] bg-white p-5 sm:p-8 shadow-xl text-neutral-900">
                   <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-3 sm:gap-4 text-neutral-900"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <input
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm"
          placeholder="First Name*"
          required
        />
        <input
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm"
          placeholder="Last Name"
        />
      </div>

      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Work Email*"
        className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm"
        required
      />

      <div className="flex gap-2">
        <select className="w-24 rounded-xl border border-neutral-200 bg-white px-3 py-3 text-sm">
          <option>+1</option>
          <option>+44</option>
          <option>+91</option>
        </select>
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone (optional)"
          className="flex-1 rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm"
        />
      </div>

      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="What tasks would you like to solve?"
        className="min-h-[120px] rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm"
      />

      <button
        type="submit"
        disabled={loading}
        className="rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-6 py-3 text-sm font-medium text-white shadow-lg disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Book a demo"}
      </button>
    </form>
                   </div>
                 </Container>
               </section>
  )
}
