'use client'
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'

export default function InvoicePage() {
  const [customers, setCustomers] = useState([])
  const [invoices, setInvoices] = useState([])
  const [form, setForm] = useState({ customerId: '', services: '', totalAmount: '', notes: '' })
  const [selectedInvoice, setSelectedInvoice] = useState(null)
  const [loading, setLoading] = useState(true)
  const [creating, setCreating] = useState(false)
  const invoiceRef = useRef(null)

  useEffect(() => {
    fetchAll()
  }, [])

  const fetchAll = async () => {
    const token = localStorage.getItem('crm_token')
    const headers = { Authorization: `Bearer ${token}` }
    try {
      const [custRes, invRes] = await Promise.all([
        axios.get(`${API_URL}/customers`, { headers }),
        axios.get(`${API_URL}/invoices`, { headers })
      ])
      setCustomers(custRes.data.customers || [])
      setInvoices(invRes.data || [])
    } catch (err) {
      toast.error('Failed to load data')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleCreate = async (e) => {
    e.preventDefault()
    if (!form.customerId || !form.services || !form.totalAmount) {
      toast.error('Customer, services, and amount are required')
      return
    }
    setCreating(true)
    try {
      const token = localStorage.getItem('crm_token')
      const res = await axios.post(`${API_URL}/invoices`, form, {
        headers: { Authorization: `Bearer ${token}` }
      })
      toast.success('Invoice created successfully! 🧾')
      setForm({ customerId: '', services: '', totalAmount: '', notes: '' })
      setSelectedInvoice(res.data.invoice)
      fetchAll()
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to create invoice')
    } finally {
      setCreating(false)
    }
  }

  const handleDelete = async (id) => {
    if (!confirm('Delete this invoice?')) return
    try {
      const token = localStorage.getItem('crm_token')
      await axios.delete(`${API_URL}/invoices/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      toast.success('Invoice deleted')
      if (selectedInvoice?._id === id) setSelectedInvoice(null)
      fetchAll()
    } catch {
      toast.error('Failed to delete invoice')
    }
  }

  const handleDownloadPDF = () => {
    if (!selectedInvoice) return
    const printContent = document.getElementById('invoice-print-area')
    const originalBody = document.body.innerHTML
    document.body.innerHTML = printContent.innerHTML
    window.print()
    document.body.innerHTML = originalBody
    window.location.reload()
  }

  const formatDate = (d) => new Date(d).toLocaleDateString('en-PK', {
    day: '2-digit', month: 'long', year: 'numeric'
  })

  return (
    <>
      <div className="topbar">
        <h1>Invoice Management</h1>
      </div>

      <div className="page-content">
        {loading ? <div className="spinner" /> : (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '24px' }}>
            {/* Left: Create Form + Invoice List */}
            <div>
              <div className="card" style={{ marginBottom: '24px' }}>
                <div className="card-header"><h2>Generate Invoice</h2></div>
                <div className="card-body">
                  <form onSubmit={handleCreate}>
                    <div className="form-group">
                      <label>Select Customer *</label>
                      <select name="customerId" value={form.customerId} onChange={handleChange} required>
                        <option value="">— Choose Customer —</option>
                        {customers.map(c => (
                          <option key={c._id} value={c._id}>{c.name} ({c.company || c.email})</option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Services *</label>
                      <input name="services" value={form.services} onChange={handleChange} placeholder="e.g. Web Development, SEO" required />
                    </div>
                    <div className="form-group">
                      <label>Total Amount (Rs) *</label>
                      <input type="number" name="totalAmount" value={form.totalAmount} onChange={handleChange} placeholder="0" required />
                    </div>
                    <div className="form-group">
                      <label>Notes</label>
                      <textarea name="notes" value={form.notes} onChange={handleChange} placeholder="Payment terms, etc." style={{ minHeight: '60px' }} />
                    </div>
                    <button type="submit" className="btn btn-primary" disabled={creating}>
                      {creating ? 'Creating...' : '🧾 Generate Invoice'}
                    </button>
                  </form>
                </div>
              </div>

              <div className="card">
                <div className="card-header"><h2>All Invoices ({invoices.length})</h2></div>
                {invoices.length === 0 ? (
                  <div className="empty-state" style={{ padding: '30px' }}>
                    <p>No invoices yet</p>
                  </div>
                ) : (
                  <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                    {invoices.map(inv => (
                      <div key={inv._id} style={{
                        padding: '12px 16px',
                        borderBottom: '1px solid #e2e8f0',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        cursor: 'pointer',
                        background: selectedInvoice?._id === inv._id ? '#eff6ff' : 'white'
                      }} onClick={() => setSelectedInvoice(inv)}>
                        <div>
                          <div style={{ fontWeight: '600', fontSize: '14px' }}>{inv.invoiceNumber}</div>
                          <div style={{ fontSize: '12px', color: '#64748b' }}>{inv.customerName}</div>
                          <div style={{ fontSize: '12px', color: '#64748b' }}>{formatDate(inv.date)}</div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <div style={{ fontWeight: '700', color: '#2563eb' }}>Rs {Number(inv.totalAmount).toLocaleString()}</div>
                          <button className="btn btn-danger btn-sm" style={{ marginTop: '6px' }} onClick={(e) => { e.stopPropagation(); handleDelete(inv._id) }}>🗑️</button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right: Invoice Preview */}
            <div>
              {selectedInvoice ? (
                <>
                  <div style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}>
                    <button className="btn btn-primary" onClick={handleDownloadPDF}>
                      📄 Download / Print PDF
                    </button>
                    <button className="btn btn-outline" onClick={() => setSelectedInvoice(null)}>
                      Close Preview
                    </button>
                  </div>
                  <div id="invoice-print-area">
                    <div className="invoice-preview">
                      <div className="invoice-header">
                        <div className="invoice-company">
                          <h2>🏢 CRM System</h2>
                          <p>Air University, Islamabad</p>
                          <p>crm@airuniversity.edu.pk</p>
                        </div>
                        <div className="invoice-meta">
                          <h3>INVOICE</h3>
                          <p><strong>{selectedInvoice.invoiceNumber}</strong></p>
                          <p>Date: {formatDate(selectedInvoice.date)}</p>
                        </div>
                      </div>

                      <div className="invoice-details">
                        <div className="detail-box">
                          <h4>Bill To</h4>
                          <p><strong>{selectedInvoice.customerName}</strong></p>
                          <p>{selectedInvoice.customerEmail}</p>
                          <p>{selectedInvoice.customerPhone}</p>
                        </div>
                        <div className="detail-box">
                          <h4>Invoice Details</h4>
                          <p>Invoice No: <strong>{selectedInvoice.invoiceNumber}</strong></p>
                          <p>Issue Date: {formatDate(selectedInvoice.date)}</p>
                          <p>Status: <span style={{ color: '#16a34a', fontWeight: 600 }}>Issued</span></p>
                        </div>
                      </div>

                      <div className="invoice-table">
                        <table>
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Description / Services</th>
                              <th style={{ textAlign: 'right' }}>Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>{selectedInvoice.services}</td>
                              <td style={{ textAlign: 'right', fontWeight: 600 }}>
                                Rs {Number(selectedInvoice.totalAmount).toLocaleString()}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div className="invoice-total">
                        <div className="total-box">
                          <div className="total-label">Total Amount</div>
                          <div className="total-amount">Rs {Number(selectedInvoice.totalAmount).toLocaleString()}</div>
                        </div>
                      </div>

                      {selectedInvoice.notes && (
                        <div style={{ marginTop: '24px', padding: '16px', background: '#f8fafc', borderRadius: '8px' }}>
                          <strong>Notes:</strong>
                          <p style={{ marginTop: '6px', fontSize: '13px', color: '#64748b' }}>{selectedInvoice.notes}</p>
                        </div>
                      )}

                      <div style={{ marginTop: '32px', textAlign: 'center', fontSize: '12px', color: '#94a3b8' }}>
                        Thank you for your business! — CRM System, Air University
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="card">
                  <div className="empty-state" style={{ padding: '60px' }}>
                    <div className="empty-icon">🧾</div>
                    <h3>Invoice Preview</h3>
                    <p>Create or select an invoice to preview it here</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
