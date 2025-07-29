'use client';

import { Check } from "lucide-react";
import { useState } from 'react';
import BookOrderForm from "./BookOrderForm";
export default function SecureYourCopy() {
    const [showForm, setShowForm] = useState(false);
  return (
    <section id="#idz-pricing" className="py-20 px-4 bg-gradient-to-b from-white to-neutral-50 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 mb-3">
        Secure Your Copy
      </h2>
      <p className="text-orange-600 text-lg font-semibold mb-10">
        Limited First Edition – Order Now Before It's Gone
      </p>

      <div className="mx-auto max-w-md bg-white border border-neutral-200 rounded-2xl shadow-xl p-8">
        <h3 className="text-3xl font-bold text-neutral-900 mb-2">₹695</h3>
        <p className="text-gray-500 mb-6">Paperback • First Edition</p>

        <ul className="text-left text-sm text-gray-800 space-y-4 mb-6">
          <li className="flex items-start gap-3">
            <Check className="text-green-500 w-5 h-5 mt-1" />
            <span>Free delivery across India</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="text-green-500 w-5 h-5 mt-1" />
            <span>Cash on Delivery available</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="text-green-500 w-5 h-5 mt-1" />
            <span>Limited first edition with exclusive design</span>
          </li>
        </ul>
  <div className="flex justify-center text-left mr-auto">
              <button
                onClick={() => setShowForm(true)}
                className="bg-[#c36829] text-white px-6 py-3 text-lg font-bold rounded hover:opacity-80 "
              > Order Now
  </button>
            </div>

        <p className="text-xs text-gray-400 mt-5">
          Secure payment • Ships within 3–5 business days
        </p>
      </div>
       {showForm && (
            <div className="fixed inset-0  bg-opacity-60 z-50 flex items-center justify-center">
              <div className="relative bg-white max-w-3xl w-full p-6 rounded-xl shadow-lg">
                <button
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
                  onClick={() => setShowForm(false)}
                >
                  &times;
                </button>
                <BookOrderForm />
              </div>
            </div>
          )}
    </section>
        
  );
}
