'use client';

import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: 'This Autobiography of Mahesh Manzar was truly a great read. It really made me Ponder. It gvs lessons of life as well..',
    author: 'Seema Dureja',
  },
  {
    quote: 'An eye opening autobiography by Mahesh Manzar sahib whose journey through the political landscape offers readers a unique glimpse into his life .With a blend of humility and Candor , he shares his experience, challenges and unwavering commitment. The writing style is accessible and engaging ,making complex political issues understandable for readers from all background.',
    author: 'Reyaz',
  },
  {
    quote: "This autobiography is a must-read for anyone . Readers will appreciate his honesty as he describes the obstacles he faced , including financial hardships and societal expectations , which shaped his worldview and fueled his desire to make a difference . Mahesh ji's anecdotes are peppered with humor and warmth , showcasing his personality and the relationships he has built along the way . These personal touches add depth to the narrative , allowing readers to connect with him on a human level",
    author: 'Madina',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200 mb-6">
            <Star className="w-4 h-4 text-yellow-500" fill="#facc15" />
            <span className="text-sm font-medium text-slate-600">Reader Reviews</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-orange-900 to-amber-800 bg-clip-text text-transparent mb-4">
            What Readers Are Saying
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover why readers can't put down this compelling autobiography
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className={`group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                idx === 1 ? 'lg:scale-105 lg:shadow-xl' : ''
              }`}
              style={{
                animationDelay: `${idx * 150}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-6">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex items-center justify-center space-x-1 mb-6">
                {Array(5).fill().map((_, i) => (
                  <Star 
                    key={i} 
                    size={20} 
                    className="text-yellow-400 drop-shadow-sm transform group-hover:scale-110 transition-transform duration-300"
                    fill="#fbbf24" 
                    stroke="#fbbf24"
                    style={{ animationDelay: `${i * 100}ms` }}
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-slate-700 leading-relaxed mb-6 text-center italic relative">
                <span className="text-4xl text-slate-300 absolute -top-2 -left-2 font-serif">"</span>
                {item.quote}
                <span className="text-4xl text-slate-300 absolute -bottom-4 -right-2 font-serif">"</span>
              </blockquote>

              {/* Author */}
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold text-lg shadow-lg">
                  {item.author.charAt(0)}
                </div>
                <p className="font-semibold text-slate-900 text-lg">
                  {item.author}
                </p>
                <p className="text-sm text-slate-500 mt-1">Verified Reader</p>
              </div>

              {/* Removed hover effect gradient border */}
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-200 shadow-sm">
            <div className="flex -space-x-2">
              {['S', 'R', 'M'].map((initial, i) => (
                <div key={i} className="w-8 h-8 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full flex items-center justify-center text-white text-xs font-semibold border-2 border-white">
                  {initial}
                </div>
              ))}
            </div>
            <span className="text-sm font-medium text-slate-600">
              Join 500+ satisfied readers
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .bg-grid-slate-100 {
          background-image: url("data:image/svg+xml,%3csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='grid' width='40' height='40' patternUnits='userSpaceOnUse'%3e%3cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='%23e2e8f0' stroke-width='1'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23grid)'/%3e%3c/svg%3e");
        }
      `}</style>
    </section>
  );
}