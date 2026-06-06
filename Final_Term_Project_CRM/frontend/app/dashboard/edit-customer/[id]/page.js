'use client'
import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import axios from 'axios'
import toast from 'react-hot-toast'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'

export default function EditCustomerPage() {
  const router = useRouter()
  const params = useParams()
  const id = params.id
  const [form, setForm] = useState(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const token = localStorage.getItem('crm_token')
        const res = await axios.get(`${API_URL}/customers/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        })
        setForm(res.data)
      } catch (err) {
        toast.error('Failed to load customer')
        router.push('/dashboard/customers')
      } finally {
        setLoading(false)
      }
    }
    if (id) fetchCustomer()
  }, [id, router])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.phone) {
      toast.error('Name, email, and phone are required')
      return
    }
    setSaving(true)
    try {
      const token = localStorage.getItem('crm_token')
      await axios.put(`${API_URL}/customers/${id}`, form, {
        headers: { Authorization: `Bearer ${token}` }
      })
      toast.success('Customer updated successfully! ✅')
      router.push('/dashboard/customers')
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to update customer')
    } finally {
      setSaving(false)
    }
  }

  if (loading) return <div className="spinner" style={{ marginTop: '80px' }} />

  return (
    <>
      <div className="topbar">
        <h1>Edit Customer</h1>
        <button className="btn btn-outline btn-sm" onClick={() => router.back()}>← Back</button>
      </div>

      <div className="page-content">
        <div className="form-page">
          <div className="card">
            <div className="card-header">
              <h2>Update Customer: {form?.name}</h2>
            </div>
            <div className="card-body">
              {form && (
                <form onSubmit={handleSubmit}>
                  <div className="form-grid">
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label>Email Address *</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label>Phone Number *</label>
                      <input name="phone" value={form.phone} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label>Company</label>
                      <input name="company" value={form.company || ''} onChange={handleChange} />
                    </div>
                    <div className="form-group full-width">
                      <label>Address</label>
                      <input name="address" value={form.address || ''} onChange={handleChange} />
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
                      <input name="services" value={form.services || ''} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label>Total Amount (Rs)</label>
                      <input type="number" name="totalAmount" value={form.totalAmount || ''} onChange={handleChange} />
                    </div>
                    <div className="form-group full-width">
                      <label>Notes</label>
                      <textarea name="notes" value={form.notes || ''} onChange={handleChange} />
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
                    <button type="submit" className="btn btn-primary" disabled={saving}>
                      {saving ? 'Updating...' : '💾 Update Customer'}
                    </button>
                    <button type="button" className="btn btn-outline" onClick={() => router.back()}>
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
