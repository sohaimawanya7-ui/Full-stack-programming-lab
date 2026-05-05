'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AddProduct() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: '', description: '', price: '', category: '', stock: '', image: ''
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, price: Number(form.price), stock: Number(form.stock) })
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setTimeout(() => router.push('/'), 1500);
      } else {
        setStatus('error: ' + data.error);
      }
    } catch {
      setStatus('error: Could not connect to backend.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="max-w-2xl mx-auto w-full px-6 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">➕ Add New Product</h1>

          {status === 'success' && (
            <div className="bg-green-100 text-green-700 rounded-lg p-3 mb-4">
              ✅ Product added! Redirecting...
            </div>
          )}
          {status.startsWith('error') && (
            <div className="bg-red-100 text-red-600 rounded-lg p-3 mb-4">⚠️ {status}</div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { label: 'Product Name', name: 'name', type: 'text', placeholder: 'e.g. Wireless Earbuds' },
              { label: 'Category', name: 'category', type: 'text', placeholder: 'e.g. Electronics' },
              { label: 'Price (Rs)', name: 'price', type: 'number', placeholder: 'e.g. 2500' },
              { label: 'Stock Quantity', name: 'stock', type: 'number', placeholder: 'e.g. 30' },
              { label: 'Image URL (optional)', name: 'image', type: 'text', placeholder: 'https://...' },
            ].map(field => (
              <div key={field.name}>
                <label className="block text-sm font-medium text-gray-700 mb-1">{field.label}</label>
                <input
                  type={field.type}
                  name={field.name}
                  value={form[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required={field.name !== 'image'}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            ))}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                required
                rows={3}
                placeholder="Short product description..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold disabled:opacity-50"
            >
              {loading ? 'Adding Product...' : '+ Add Product'}
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
