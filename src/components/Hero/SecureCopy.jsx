'use client';

import { Check } from "lucide-react";
import Link from "next/link";

export default function SecureYourCopy() {
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

      <Link href="/form">
  <button className="bg-orange-600 hover:bg-orange-700 active:scale-[.98] transition-transform text-white font-semibold w-full py-3 rounded-lg text-lg shadow-md">
    Order Now
  </button>
  </Link>

        <p className="text-xs text-gray-400 mt-5">
          Secure payment • Ships within 3–5 business days
        </p>
      </div>
    </section>
  );
}
