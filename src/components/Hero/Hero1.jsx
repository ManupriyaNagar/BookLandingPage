'use client';
import Image from 'next/image';
import { useState } from 'react';
import BookOrderForm from './BookOrderForm';

export default function Hero1() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="font-roboto text-[#959595] text-[18px] leading-8">
      {/* Header */}
      <header
        className="relative bg-cover bg-center bg-no-repeat min-h-screen flex flex-col"
        style={{ backgroundImage: 'url(/images/bg-header1.jpg)' }}
      >
        <div className="absolute inset-0 bg-black/30 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#ed9a9a] via-[#ed9a9a] to-[#fac673] opacity-40 z-0"></div>

        {/* Navigation */}
        <div className="relative border-b border-white/30 py-6">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex-shrink-0">
              <a href="#idz-header"></a>
            </div>
            <nav className="md:flex space-x-6">
              <a href="#idz-header" className="text-white hover:text-yellow-500">Home</a>
              <a href="#idz-features" className="text-white hover:text-yellow-500">About</a>
              <a href="#idz-about" className="text-white hover:text-yellow-500">Meet Author</a>
              <a href="#idz-pricing" className="text-white hover:text-yellow-500">Pricing</a>
            </nav>

            <div className="md:hidden">
              <button className="text-white text-2xl">&#9776;</button>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="flex-grow container mx-auto relative z-10 flex flex-col md:flex-row justify-between items-end md:items-center pb-0 pt-12">
          {/* Left Text */}
          <div className="md:w-1/2 space-y-6 text-white">
            <h1 className="text-4xl md:text-[42px] font-bold leading-tight">
              An Untold Life in Indian Politics & Poetry – Read the Story That Was Never Officially Written
            </h1>
            <div>
              <p className="font-bold mb-0">Read the Story That Was Never Officially Written</p>
              <p className="uppercase text-sm">
                From the inner circles of power to poetic introspection – Mahesh Manzar’s life story is a journey through politics, poetry, love, loss, and redemption.
              </p>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => setShowForm(true)}
                className="bg-[#c36829] text-white px-6 py-3 text-lg font-bold rounded hover:opacity-80 flex items-center"
              >
                <i className="fas fa-shopping-cart mr-2"></i> Buy Now for <span className='text-xl'> ₹695 </span>
              </button>
            </div>
          </div>

          {/* Book Image */}
          <div className="md:w-1/2 flex justify-center items-end md:mt-0 h-[60vh]">
            <Image
              src="/bookmockup.png"
              alt="book cover"
              width={400}
              height={600}
              className="h-[125vh] w-full object-contain -mb-69"
            />
          </div>
        </div>
      </header>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0  bg-opacity-60 z-50 flex items-center justify-center">
          <div className="relative bg-white max-w-xl w-full p-6 rounded-xl shadow-lg">
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
    </div>
  );
}
