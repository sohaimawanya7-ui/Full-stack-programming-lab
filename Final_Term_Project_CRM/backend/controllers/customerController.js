const Customer = require('../models/Customer');

// @desc  Get all customers (with search & filter)
// @route GET /api/customers
const getCustomers = async (req, res) => {
  try {
    const { search, status } = req.query;
    let query = {};

    // Search by name
    if (search) {
      query.name = { $regex: search, $options: 'i' };
    }

    // Filter by status
    if (status && ['Lead', 'Active', 'Inactive'].includes(status)) {
      query.status = status;
    }

    const customers = await Customer.find(query).sort({ createdAt: -1 });
    res.json({ customers, total: customers.length });
  } catch (error) {
    res.status(500).json({ message: 'Server error: ' + error.message });
  }
};

// @desc  Get single customer
// @route GET /api/customers/:id
const getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    res.json(customer);
  } catch (error) {
    res.status(500).json({ message: 'Server error: ' + error.message });
  }
};

// @desc  Add new customer
// @route POST /api/customers
const createCustomer = async (req, res) => {
  const { name, email, phone, company, address, status, services, totalAmount, notes } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ message: 'Name, email, and phone are required' });
  }

  try {
    const customer = await Customer.create({
      name, email, phone, company, address, status, services, totalAmount, notes
    });
    res.status(201).json({ message: 'Customer added successfully', customer });
  } catch (error) {
    res.status(500).json({ message: 'Server error: ' + error.message });
  }
};

// @desc  Update customer
// @route PUT /api/customers/:id
const updateCustomer = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    const updated = await Customer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.json({ message: 'Customer updated successfully', customer: updated });
  } catch (error) {
    res.status(500).json({ message: 'Server error: ' + error.message });
  }
};

// @desc  Delete customer
// @route DELETE /api/customers/:id
const deleteCustomer = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    await Customer.findByIdAndDelete(req.params.id);
    res.json({ message: 'Customer deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error: ' + error.message });
  }
};

// @desc  Seed 15 sample customers
// @route POST /api/customers/seed
const seedCustomers = async (req, res) => {
  const sampleCustomers = [
    { name: 'Ahmed Khan', email: 'ahmed.khan@email.com', phone: '0300-1234567', company: 'TechCorp', address: 'Lahore, Pakistan', status: 'Active', services: 'Web Development', totalAmount: 150000, notes: 'Regular client' },
    { name: 'Sara Ali', email: 'sara.ali@email.com', phone: '0301-2345678', company: 'DesignHub', address: 'Karachi, Pakistan', status: 'Lead', services: 'UI/UX Design', totalAmount: 80000, notes: 'Interested in redesign' },
    { name: 'Bilal Ahmed', email: 'bilal.ahmed@email.com', phone: '0302-3456789', company: 'StartupX', address: 'Islamabad, Pakistan', status: 'Active', services: 'Mobile App', totalAmount: 200000, notes: 'Long-term project' },
    { name: 'Fatima Malik', email: 'fatima.malik@email.com', phone: '0303-4567890', company: 'EduTech', address: 'Rawalpindi, Pakistan', status: 'Inactive', services: 'SEO Services', totalAmount: 50000, notes: 'Contract ended' },
    { name: 'Usman Sheikh', email: 'usman.sheikh@email.com', phone: '0304-5678901', company: 'FinanceGroup', address: 'Faisalabad, Pakistan', status: 'Active', services: 'Cloud Services', totalAmount: 300000, notes: 'Enterprise plan' },
    { name: 'Aisha Raza', email: 'aisha.raza@email.com', phone: '0305-6789012', company: 'RetailPro', address: 'Multan, Pakistan', status: 'Lead', services: 'E-commerce Setup', totalAmount: 120000, notes: 'New prospect' },
    { name: 'Hassan Mirza', email: 'hassan.mirza@email.com', phone: '0306-7890123', company: 'LogisTech', address: 'Peshawar, Pakistan', status: 'Active', services: 'ERP System', totalAmount: 450000, notes: 'Phase 2 ongoing' },
    { name: 'Zainab Qureshi', email: 'zainab.qureshi@email.com', phone: '0307-8901234', company: 'MediaWorks', address: 'Quetta, Pakistan', status: 'Inactive', services: 'Social Media Management', totalAmount: 40000, notes: 'Paused campaign' },
    { name: 'Tariq Hussain', email: 'tariq.hussain@email.com', phone: '0308-9012345', company: 'BuildCo', address: 'Sialkot, Pakistan', status: 'Active', services: 'CRM Setup', totalAmount: 180000, notes: 'Implementation phase' },
    { name: 'Nadia Farooq', email: 'nadia.farooq@email.com', phone: '0309-0123456', company: 'HealthPlus', address: 'Gujranwala, Pakistan', status: 'Lead', services: 'Healthcare Portal', totalAmount: 250000, notes: 'Proposal sent' },
    { name: 'Omar Siddiqui', email: 'omar.siddiqui@email.com', phone: '0310-1234567', company: 'AgriTech', address: 'Hyderabad, Pakistan', status: 'Active', services: 'Data Analytics', totalAmount: 95000, notes: 'Monthly retainer' },
    { name: 'Maryam Javed', email: 'maryam.javed@email.com', phone: '0311-2345678', company: 'FoodChain', address: 'Bahawalpur, Pakistan', status: 'Lead', services: 'POS Integration', totalAmount: 70000, notes: 'Meeting scheduled' },
    { name: 'Kamran Iqbal', email: 'kamran.iqbal@email.com', phone: '0312-3456789', company: 'TravelEase', address: 'Abbottabad, Pakistan', status: 'Active', services: 'Booking System', totalAmount: 160000, notes: 'Live and running' },
    { name: 'Sana Butt', email: 'sana.butt@email.com', phone: '0313-4567890', company: 'LegalEdge', address: 'Lahore, Pakistan', status: 'Inactive', services: 'Document Management', totalAmount: 85000, notes: 'On hold' },
    { name: 'Rizwan Chaudhry', email: 'rizwan.chaudhry@email.com', phone: '0314-5678901', company: 'PowerSol', address: 'Islamabad, Pakistan', status: 'Active', services: 'IoT Solutions', totalAmount: 380000, notes: 'Pilot project success' }
  ];

  try {
    await Customer.deleteMany({});
    const customers = await Customer.insertMany(sampleCustomers);
    res.status(201).json({ message: `${customers.length} customers seeded successfully`, customers });
  } catch (error) {
    res.status(500).json({ message: 'Seeding failed: ' + error.message });
  }
};

module.exports = { getCustomers, getCustomerById, createCustomer, updateCustomer, deleteCustomer, seedCustomers };
