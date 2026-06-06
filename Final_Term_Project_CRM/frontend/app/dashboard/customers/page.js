'use client'
import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import Chatbot from '../../components/Chatbot'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'

export default function CustomersPage() {
  const router = useRouter()
  const [customers, setCustomers] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [deleting, setDeleting] = useState(null)
  const [seeding, setSeeding] = useState(false)

  const fetchCustomers = useCallback(async () => {
    try {
      const token = localStorage.getItem('crm_token')
      const params = {}
      if (search) params.search = search
      if (statusFilter) params.status = statusFilter

      const res = await axios.get(`${API_URL}/customers`, {
        headers: { Authorization: `Bearer ${token}` },
        params
      })
      setCustomers(res.data.customers || [])
    } catch (err) {
      toast.error('Failed to load customers')
    } finally {
      setLoading(false)
    }
  }, [search, statusFilter])

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => fetchCustomers(), 300)
    return () => clearTimeout(timer)
  }, [fetchCustomers])

  const handleDelete = async (id, name) => {
    if (!confirm(`Are you sure you want to delete ${name}?`)) return
    setDeleting(id)
    try {
      const token = localStorage.getItem('crm_token')
      await axios.delete(`${API_URL}/customers/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      toast.success(`Customer "${name}" deleted successfully`)
      fetchCustomers()
    } catch (err) {
      toast.error('Failed to delete customer')
    } finally {
      setDeleting(null)
    }
  }

  const handleSeed = async () => {
    setSeeding(true)
    try {
      const token = localStorage.getItem('crm_token')
      await axios.post(`${API_URL}/customers/seed`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      })
      toast.success('15 sample customers loaded successfully!')
      fetchCustomers()
    } catch (err) {
      toast.error('Failed to seed customers')
    } finally {
      setSeeding(false)
    }
  }

  return (
    <>
      <div className="topbar">
        <h1>Customer Management</h1>
        <div className="topbar-right">
          <button className="btn btn-outline btn-sm" onClick={handleSeed} disabled={seeding}>
            {seeding ? 'Loading...' : '🌱 Load Sample Data'}
          </button>
          <button className="btn btn-primary btn-sm" onClick={() => router.push('/dashboard/add-customer')}>
            ➕ Add Customer
          </button>
        </div>
      </div>

      <div className="page-content">
        <div className="search-bar">
          <div className="search-input-wrapper">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search customers by name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <select
            className="filter-select"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="">All Statuses</option>
            <option value="Lead">Lead</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        <div className="card">
          <div className="card-header">
            <h2>Customers ({customers.length})</h2>
          </div>
          {loading ? (
            <div className="spinner" />
          ) : customers.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">👥</div>
              <h3>No customers found</h3>
              <p>Try loading sample data or add a new customer</p>
            </div>
          ) : (
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Company</th>
                    <th>Status</th>
                    <th>Amount (Rs)</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((c, i) => (
                    <tr key={c._id}>
                      <td>{i + 1}</td>
                      <td><strong>{c.name}</strong></td>
                      <td>{c.email}</td>
                      <td>{c.phone}</td>
                      <td>{c.company || '—'}</td>
                      <td>
                        <span className={`badge badge-${c.status.toLowerCase()}`}>
                          {c.status}
                        </span>
                      </td>
                      <td>{c.totalAmount ? `Rs ${c.totalAmount.toLocaleString()}` : '—'}</td>
                      <td>
                        <div style={{ display: 'flex', gap: '6px' }}>
                          <button
                            className="btn btn-outline btn-sm"
                            onClick={() => router.push(`/dashboard/edit-customer/${c._id}`)}
                          >✏️ Edit</button>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => handleDelete(c._id, c.name)}
                            disabled={deleting === c._id}
                          >🗑️ {deleting === c._id ? '...' : 'Delete'}</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      <Chatbot customers={customers} />
    </>
  )
}
