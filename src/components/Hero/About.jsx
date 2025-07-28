'use client';

import { BookOpen, Heart, Award } from 'lucide-react';

export default function AboutBook() {
  return (
    <section className="bg-[#fdfcf9] py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Left Column */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">About the Book</h2>
          <p className="text-lg text-gray-500 mb-6">
            An honest and intimate account of a life lived in the shadows of power
          </p>
          <p className="text-gray-800 mb-4">
            "Confessions of an Unknown Congressman" is not just another political memoir. It's a deeply personal journey through seven decades of Indian history, told through the eyes of a man who witnessed it all from the inside.
          </p>
          <p className="text-gray-800">
            From his early days with the Youth Congress to intimate moments with Rajiv and Sonia Gandhi, from the heights of political influence to spiritual pilgrimages to Mt. Kailash, Mahesh Manzar's story is one of unfiltered truth, poetic beauty, and human resilience.
          </p>
        </div>

        {/* Right Box */}
        <div className="flex-1 max-w-md p-6 bg-white border border-gray-200 rounded-2xl shadow-sm space-y-6">
          <div className="flex items-start gap-4">
            <BookOpen className="text-orange-600 mt-1" />
            <div>
              <h4 className="text-lg font-semibold text-gray-800">Political Insider</h4>
              <p className="text-sm text-gray-500">Autobiography</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Heart className="text-orange-600 mt-1" />
            <div>
              <h4 className="text-lg font-semibold text-gray-800">Poetic Journey</h4>
              <p className="text-sm text-gray-500">Unfiltered Reflections</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Award className="text-orange-600 mt-1" />
            <div>
              <h4 className="text-lg font-semibold text-gray-800">Seven Decades</h4>
              <p className="text-sm text-gray-500">A Nation's History</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
