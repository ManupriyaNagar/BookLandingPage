'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-black/60 to-black/90 text-white">
      <Image
        src="/bg.webp" // Replace with your actual background image
        alt="Backdrop"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 -z-10 opacity-90"
      />

      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between w-full z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 space-y-6"
        >
          <div className="inline-block bg-yellow-400 text-black font-semibold text-sm px-4 py-1 rounded-full">
            Limited First Edition • 2025 Release
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            An Untold Life in <span className="text-yellow-400">Indian Politics & Poetry</span>
          </h1>

          <h2 className="text-lg md:text-xl text-gray-200">
            Read the Story That Was Never Officially Written
          </h2>

          <p className="text-md text-gray-300 max-w-lg">
            From the inner circles of power to poetic introspection – Mahesh Manzar’s life story is a journey through politics, poetry, love, loss, and redemption.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-medium hover:bg-yellow-500 transition">
              Buy Now for ₹695
            </button>
            <button className="bg-transparent border border-yellow-400 text-yellow-400 px-6 py-3 rounded-lg font-medium hover:bg-yellow-400 hover:text-black transition">
              Preview Inside
            </button>
          </div>
        </motion.div>

        {/* Right: Book Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center relative"
        >
          <div className="relative w-[280px] md:w-[300px] lg:w-[340px]">
            <Image
              src="/cover.jpg"
              alt="Book Cover"
              width={340}
              height={480}
              className="rounded-xl shadow-lg"
            />
            <div className="absolute bottom-[-10px] right-[-10px] bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold shadow-md">
              ₹695
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
