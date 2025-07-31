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

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch('http://localhost:5001/api/book-orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage({ type: 'success', text: '✅ Order submitted successfully!' });
        setFormData({ name: '', email: '', mobile: '', copies: '', city: '' });
      } else {
        setMessage({ type: 'error', text: data.error || 'Something went wrong' });
      }
    } catch (err) {
      console.error('Submission error:', err);
      setMessage({ type: 'error', text: '❌ Could not connect to server.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white py-12 px-6 md:px-12 max-w-3xl mx-auto rounded-2xl shadow-lg">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">
        Book Order Form
      </h2>

      {message && (
        <div
          className={`mb-4 px-4 py-2 rounded text-sm font-medium text-center ${
            message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}
        >
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Full Name */}
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

        {/* Email Address */}
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

        {/* Number of Copies */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Number of Copies
          </label>
          <input
            type="number"
            name="copies"
            required
            min="1"
            onChange={handleChange}
            value={formData.copies}
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

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={loading}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition duration-200 disabled:opacity-50"
          >
            {loading ? 'Submitting...' : 'Submit Order'}
          </button>
        </div>
        <div>Have a nice day</div>
      </form>
    </section>
  );
}
