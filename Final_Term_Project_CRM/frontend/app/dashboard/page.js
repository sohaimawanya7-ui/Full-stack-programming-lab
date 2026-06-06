'use client'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Chatbot from '../components/Chatbot'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'

export default function DashboardPage() {
  const [stats, setStats] = useState({ total: 0, active: 0, lead: 0, inactive: 0 })
  const [recent, setRecent] = useState([])
  const [customers, setCustomers] = useState([])
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const userData = localStorage.getItem('crm_user')
    if (userData) setUser(JSON.parse(userData))
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('crm_token')
      const res = await axios.get(`${API_URL}/customers`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      const data = res.data.customers || []
      setCustomers(data)
      setRecent(data.slice(0, 5))
      setStats({
        total: data.length,
        active: data.filter(c => c.status === 'Active').length,
        lead: data.filter(c => c.status === 'Lead').length,
        inactive: data.filter(c => c.status === 'Inactive').length,
      })
    } catch (err) {
      console.error('Failed to fetch stats')
    } finally {
      setLoading(false)
    }
  }

  const statCards = [
    { label: 'Total Customers', value: stats.total, icon: '👥', color: '#eff6ff', iconBg: '#dbeafe' },
    { label: 'Active Customers', value: stats.active, icon: '✅', color: '#f0fdf4', iconBg: '#dcfce7' },
    { label: 'Leads', value: stats.lead, icon: '🎯', color: '#eff6ff', iconBg: '#bfdbfe' },
    { label: 'Inactive', value: stats.inactive, icon: '⏸️', color: '#fff7ed', iconBg: '#fed7aa' },
  ]

  return (
    <>
      <div className="topbar">
        <h1>Dashboard Overview</h1>
        <div className="topbar-right">
          <span style={{ fontSize: '14px', color: '#64748b' }}>
            Welcome back, <strong>{user?.name}</strong> 👋
          </span>
        </div>
      </div>

      <div className="page-content">
        {loading ? (
          <div className="spinner" />
        ) : (
          <>
            <div className="stats-grid">
              {statCards.map((s) => (
                <div className="stat-card" key={s.label} style={{ background: s.color }}>
                  <div className="stat-icon" style={{ background: s.iconBg }}>
                    {s.icon}
                  </div>
                  <div className="stat-info">
                    <h3>{s.value}</h3>
                    <p>{s.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="card">
              <div className="card-header">
                <h2>Recent Customers</h2>
                <a href="/dashboard/customers" className="btn btn-outline btn-sm">View All</a>
              </div>
              {recent.length === 0 ? (
                <div className="empty-state">
                  <div className="empty-icon">📭</div>
                  <h3>No customers yet</h3>
                  <p>Start by adding customers or seeding sample data</p>
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
                      </tr>
                    </thead>
                    <tbody>
                      {recent.map((c, i) => (
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
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </>
        )}
      </div>

      <Chatbot customers={customers} />
    </>
  )
}
