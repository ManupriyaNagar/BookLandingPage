'use client';

import Image from 'next/image';
import { Quote } from 'lucide-react';

export default function QuoteHighlight() {
  return (
    <section className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center text-center px-6">
      {/* Background image */}
      <Image
        src="/images/quote-bg.png" // Replace with actual path
        alt="Quote Background"
        layout="fill"
        objectFit="cover"
        className="z-0 opacity-80"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/40 z-10" />

      {/* Quote content */}
      <div className="relative z-20 max-w-4xl mx-auto">
        <Quote className="mx-auto text-orange-600 mb-4 w-8 h-8" />
        <p className="text-xl md:text-2xl italic font-medium text-gray-800">
          "This is the story I <span className="italic font-semibold">lived twice</span> – once while living it, and again while writing it."
        </p>
        <p className="text-orange-600 font-semibold mt-4">– Mahesh Manzar</p>
      </div>
    </section>
  );
}
