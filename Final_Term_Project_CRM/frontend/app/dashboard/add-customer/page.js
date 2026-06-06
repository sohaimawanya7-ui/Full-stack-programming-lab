'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import toast from 'react-hot-toast'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'

const initialForm = {
  name: '', email: '', phone: '', company: '',
  address: '', status: 'Lead', services: '', totalAmount: '', notes: ''
}

export default function AddCustomerPage() {
  const router = useRouter()
  const [form, setForm] = useState(initialForm)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.phone) {
      toast.error('Name, email, and phone are required')
      return
    }
    setLoading(true)
    try {
      const token = localStorage.getItem('crm_token')
      await axios.post(`${API_URL}/customers`, form, {
        headers: { Authorization: `Bearer ${token}` }
      })
      toast.success('Customer added successfully! 🎉')
      router.push('/dashboard/customers')
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to add customer')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="topbar">
        <h1>Add New Customer</h1>
        <button className="btn btn-outline btn-sm" onClick={() => router.back()}>
          ← Back
        </button>
      </div>

      <div className="page-content">
        <div className="form-page">
          <div className="card">
            <div className="card-header">
              <h2>Customer Information</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Customer name" required />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="customer@email.com" required />
                  </div>
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="0300-1234567" required />
                  </div>
                  <div className="form-group">
                    <label>Company</label>
                    <input name="company" value={form.company} onChange={handleChange} placeholder="Company name" />
                  </div>
                  <div className="form-group full-width">
                    <label>Address</label>
                    <input name="address" value={form.address} onChange={handleChange} placeholder="City, Country" />
                  </div>
                  <div className="form-group">
                    <label>Status</label>
                    <select name="status" value={form.status} onChange={handleChange}>
                      <option value="Lead">Lead</option>
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Services</label>
                    <input name="services" value={form.services} onChange={handleChange} placeholder="e.g. Web Development" />
                  </div>
                  <div className="form-group">
                    <label>Total Amount (Rs)</label>
                    <input type="number" name="totalAmount" value={form.totalAmount} onChange={handleChange} placeholder="0" />
                  </div>
                  <div className="form-group full-width">
                    <label>Notes</label>
                    <textarea name="notes" value={form.notes} onChange={handleChange} placeholder="Any additional notes..." />
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
                  <button type="submit" className="btn btn-success" disabled={loading}>
                    {loading ? 'Saving...' : '✅ Save Customer'}
                  </button>
                  <button type="button" className="btn btn-outline" onClick={() => router.back()}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
