'use client';
import { useState } from 'react';

export default function BookOrderForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    copies: '',
    city: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // TODO: Add API call or action here
  };

  return (
    <section className="bg-white py-12 px-6 md:px-12 max-w-3xl mx-auto rounded-2xl shadow-lg">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">
        Book Order Form
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            required
            onChange={handleChange}
            value={formData.name}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            required
            onChange={handleChange}
            value={formData.email}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Mobile Number
          </label>
          <input
            type="tel"
            name="mobile"
            required
            onChange={handleChange}
            value={formData.mobile}
            pattern="[0-9]{10}"
            maxLength={10}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* No. of Copies */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Number of Copies
          </label>
          <input
            type="number"
            name="copies"
            required
            onChange={handleChange}
            value={formData.copies}
            min="1"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* City */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            City
          </label>
          <input
            type="text"
            name="city"
            required
            onChange={handleChange}
            value={formData.city}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition duration-200"
          >
            Submit Order
          </button>
        </div>
      </form>
    </section>
  );
}
