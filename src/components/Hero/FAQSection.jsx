'use client';

import React from 'react';

const faqs = [
  {
    question: "Who is this book for?",
    answer:
      "Anyone interested in Indian politics, political memoirs, poetry, or personal stories of resilience and transformation.",
  },
  {
    question: "Is this a political book or a personal memoir?",
    answer:
      "It's both – a deeply personal memoir that offers unique insights into Indian political history from an insider's perspective.",
  },
  {
    question: "Is it available in bookstores?",
    answer:
      "This is a limited first edition available primarily through direct order. It will be available in select bookstores later.",
  },
  {
    question: "How long will it take to ship?",
    answer: "We ship within 3–5 business days across India with free delivery.",
  },
  {
    question: "Is Cash on Delivery available?",
    answer: "Yes, we offer Cash on Delivery for your convenience.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#fdfcf9]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white shadow-sm rounded-xl p-6 border border-gray-200"
            >
              <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
