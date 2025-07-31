"use client";

import Image from "next/image";
import { Users, Award, BookOpen, Heart } from "lucide-react";

export default function MeetAuthor() {
  return (
    <section className="bg-[#fefcf9] py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Text Section */}
        <div className="flex-1 space-y-6 max-w-2xl">
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
                  Former associate to three times chief Minister of NCR Delhi
                  Sheila Dikshit & close to Rajiv Gandhi and Rajesh Khanna.
                </p>
                <p className="text-gray-500 text-sm">
                  Witnessed history from the corridors of power
                </p>
              </div>
            </li>

            <li className="flex gap-4">
              <BookOpen className="text-orange-600 h-auto w-12 -ml-1" />
              <div>
                <p className="font-semibold text-gray-900">
                  The French translation of the poetry book was launched and
                  received by the Honourable President of India in 2017 at
                  Rashtrapati Bhavan, while the English translation was launched
                  by HE, the Vice President of India in 2014.
                </p>
                <p className="text-gray-500 text-sm">
                  Literary achievements recognized at the highest levels
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <Heart className="text-orange-600 mt-1 w-12 -ml-1" />
              <div>
                <p className="font-semibold text-gray-900">
                  He dedicated 32 years of service to the Congress Party,
                  establishing himself as a key figure. He was part of Sonia
                  Gandhi's speech-writing team, where Mani Shankar Aiyar often
                  relied on him to translate political works from English to
                  Hindi-Urdu.
                </p>
                <p className="text-gray-500 text-sm">
                  A journey of love, loss, and self-discovery
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <BookOpen className="text-orange-600 h-auto w-12 -ml-1" />
              <div>
                <p className="font-semibold text-gray-900">
                  He was among the select three entrusted with crafting speeches
                  for the Honourable Congress leader, Smt. Sonia Gandhi, during
                  the pivotal 1999 General Elections.
                </p>
                <p className="text-gray-500 text-sm">
                  Literary achievements recognized at the highest levels
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Right Image Section */}
        <div className="flex-1 max-w-sm">
          <div className="rounded-xl overflow-hidden shadow-md">
            <Image
              src="/maheshji.png" // Update path accordingly
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
