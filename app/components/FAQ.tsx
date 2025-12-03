"use client";

import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the dress code?",
      answer:
        "Semi-formal attire. We suggest cocktail dresses and suits.",
    },
    {
      question: "Can I bring a plus one?",
      answer:
        "Due to limited capacity, we can only accommodate those listed on your invitation.",
    },
    {
      question: "Will the ceremony be indoors or outdoors?",
      answer:
        "The ceremony will be outdoors in the garden, with an indoor backup plan in case of rain.",
    },
    {
      question: "Are children welcome?",
      answer:
        "We love your little ones, but this will be an adults-only celebration.",
    },
    {
      question: "What time should I arrive?",
      answer:
        "Please arrive by 1:45 PM to be seated before the ceremony begins at 2:00 PM.",
    },
    {
      question: "Is parking available at the venue?",
      answer: "Yes, complimentary parking is available on-site.",
    },
    {
      question: "What if I have dietary restrictions?",
      answer:
        "Please let us know in your RSVP and we will accommodate your needs.",
    },
    {
      question: "Will there be an open bar?",
      answer: "Yes, we will have a full open bar throughout the reception.",
    },
    {
      question: "Can I take photos during the ceremony?",
      answer:
        "We kindly ask for an unplugged ceremony. Our photographer will capture everything!",
    },
    {
      question: "Where are you registered?",
      answer:
        "Your presence is the best gift! If you wish to give, we have a registry at [Store Name].",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-[#7D2E3D] mx-auto mb-6"></div>
          <p className="text-gray-600">
            Everything you need to know about our special day
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#FDF8F5] rounded-lg shadow-md overflow-hidden"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#FDF8F5]/80 transition-colors"
              >
                <span className="font-semibold text-gray-800 pr-4">
                  {faq.question}
                </span>

                {/* Arrow Icon */}
                <i
                  className={`text-2xl text-[#7D2E3D] transition-transform ${
                    openIndex === index
                      ? "ri-arrow-up-s-line"
                      : "ri-arrow-down-s-line"
                  }`}
                />
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-6 pb-5 animate-fadeIn">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
