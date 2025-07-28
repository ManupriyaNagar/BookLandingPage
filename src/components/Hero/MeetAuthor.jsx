'use client';

import Image from 'next/image';
import { Users, Award, BookOpen, Heart } from 'lucide-react';

export default function MeetAuthor() {
  return (
    <section className="bg-[#fefcf9] py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Text Section */}
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl font-bold text-gray-900">Meet the Author</h2>
          <h3 className="text-xl font-semibold text-orange-600">
            Who is Mahesh Manzar?
          </h3>

          <ul className="space-y-6 mt-6">
            <li className="flex items-start gap-4">
              <Users className="text-orange-600 mt-1" />
              <div>
                <p className="font-semibold text-gray-900">
                  Lifelong Congressman, poet, and public speaker
                </p>
                <p className="text-gray-500 text-sm">
                  Dedicated decades to public service and literary pursuits
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <Award className="text-orange-600 mt-1" />
              <div>
                <p className="font-semibold text-gray-900">
                  Former aide to Sheila Dikshit & close to Rajiv Gandhi
                </p>
                <p className="text-gray-500 text-sm">
                  Witnessed history from the corridors of power
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <BookOpen className="text-orange-600 mt-1" />
              <div>
                <p className="font-semibold text-gray-900">
                  Poetry books launched by President & Vice President of India
                </p>
                <p className="text-gray-500 text-sm">
                  Literary achievements recognized at the highest levels
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <Heart className="text-orange-600 mt-1" />
              <div>
                <p className="font-semibold text-gray-900">
                  Spiritual seeker and lifelong romantic
                </p>
                <p className="text-gray-500 text-sm">
                  A journey of love, loss, and self-discovery
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Right Image Section */}
        <div className="flex-1 max-w-sm">
          <div className="rounded-xl overflow-hidden shadow-md">
            <Image
              src="/sir.png" // Update path accordingly
              alt="Author Mahesh Manzar"
              width={500}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
