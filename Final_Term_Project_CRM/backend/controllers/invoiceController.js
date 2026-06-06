const Invoice = require('../models/Invoice');
const Customer = require('../models/Customer');

// @desc  Get all invoices
// @route GET /api/invoices
const getInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find().populate('customer', 'name email phone').sort({ createdAt: -1 });
    res.json(invoices);
  } catch (error) {
    res.status(500).json({ message: 'Server error: ' + error.message });
  }
};

// @desc  Get single invoice
// @route GET /api/invoices/:id
const getInvoiceById = async (req, res) => {
  try {
    const invoice = await Invoice.findById(req.params.id).populate('customer');
    if (!invoice) {
      return res.status(404).json({ message: 'Invoice not found' });
    }
    res.json(invoice);
  } catch (error) {
    res.status(500).json({ message: 'Server error: ' + error.message });
  }
};

// @desc  Create invoice
// @route POST /api/invoices
const createInvoice = async (req, res) => {
  const { customerId, services, totalAmount, notes } = req.body;

  if (!customerId || !services || !totalAmount) {
    return res.status(400).json({ message: 'Customer, services, and amount are required' });
  }

  try {
    const customer = await Customer.findById(customerId);
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    const invoice = await Invoice.create({
      customer: customerId,
      customerName: customer.name,
      customerEmail: customer.email,
      customerPhone: customer.phone,
      services,
      totalAmount,
      notes
    });

    res.status(201).json({ message: 'Invoice created successfully', invoice });
  } catch (error) {
    res.status(500).json({ message: 'Server error: ' + error.message });
  }
};

// @desc  Delete invoice
// @route DELETE /api/invoices/:id
const deleteInvoice = async (req, res) => {
  try {
    const invoice = await Invoice.findById(req.params.id);
    if (!invoice) {
      return res.status(404).json({ message: 'Invoice not found' });
    }
    await Invoice.findByIdAndDelete(req.params.id);
    res.json({ message: 'Invoice deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error: ' + error.message });
  }
};

module.exports = { getInvoices, getInvoiceById, createInvoice, deleteInvoice };
