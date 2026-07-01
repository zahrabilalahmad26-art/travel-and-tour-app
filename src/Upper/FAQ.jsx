import React, { useState } from "react";

const FAQ = () => {
  const [active, setActive] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "How do I book a tour?",
      answer:
        "You can book a tour directly through our website by selecting your preferred destination and completing the booking form.",
    },
    {
      id: 2,
      question: "Can I cancel my booking?",
      answer:
        "Yes. You can cancel your booking according to our cancellation policy. Refund eligibility depends on the cancellation date.",
    },
    {
      id: 3,
      question: "Are flights included in the tour package?",
      answer:
        "Some packages include flights while others do not. Please check the package details before booking.",
    },
    {
      id: 4,
      question: "Do you offer group discounts?",
      answer:
        "Yes. We provide special discounts for family trips, corporate tours, and large groups.",
    },
    {
      id: 5,
      question: "Can I customize my travel itinerary?",
      answer:
        "Absolutely! Our travel experts can create a personalized itinerary based on your budget and preferences.",
    },
    {
      id: 6,
      question: "What payment methods do you accept?",
      answer:
        "We accept credit/debit cards, bank transfers, and selected online payment methods.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 py-20 px-6">
      <h3 className="text-center text-orange-500 text-lg font-semibold">
        Frequently Asked Questions
      </h3>

      <h1 className="text-center text-white text-4xl font-bold mt-4">
        Have Questions?
      </h1>

      <div className="max-w-4xl mx-auto mt-14 space-y-5">
        {faqs.map((item) => (
          <div
            key={item.id}
            className="bg-slate-900 rounded-xl border border-slate-700 overflow-hidden"
          >
            <button
              onClick={() =>
                setActive(active === item.id ? null : item.id)
              }
              className="w-full flex justify-between items-center px-6 py-5 text-left"
            >
              <h2 className="text-white text-lg font-semibold">
                {item.question}
              </h2>

              <span className="text-orange-500 text-2xl">
                {active === item.id ? "−" : "+"}
              </span>
            </button>

            {active === item.id && (
              <div className="px-6 pb-5 text-gray-300 leading-7">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;