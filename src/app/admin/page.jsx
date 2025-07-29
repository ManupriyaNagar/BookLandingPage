'use client';

import { useEffect, useState } from 'react';

export default function AdminPanel() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const res = await fetch('http://localhost:5001/api/book-orders');
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      console.log("Fetched orders:", data);
      setOrders(data);
    } catch (err) {
      console.error("Fetch error in frontend:", err);
    }
  };
  

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">📚 Book Orders Admin Panel</h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-orange-100 text-left">
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Mobile</th>
              <th className="p-3 border">Copies</th>
              <th className="p-3 border">City</th>
              <th className="p-3 border">Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order._id} className="hover:bg-orange-50">
                <td className="p-3 border">{order.name}</td>
                <td className="p-3 border">{order.email}</td>
                <td className="p-3 border">{order.mobile}</td>
                <td className="p-3 border">{order.copies}</td>
                <td className="p-3 border">{order.city}</td>
                <td className="p-3 border">{new Date(order.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
