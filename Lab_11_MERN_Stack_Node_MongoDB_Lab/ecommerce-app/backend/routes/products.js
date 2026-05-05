const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET single product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST create a product
router.post('/', async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json({ message: 'Product added successfully', product });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT update a product
router.put('/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json({ message: 'Product updated', product });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE a product
router.delete('/:id', async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Seed sample data
router.get('/seed/data', async (req, res) => {
  try {
    await Product.deleteMany({});
    const sampleProducts = [
      { name: 'Wireless Headphones', description: 'Noise-cancelling Bluetooth headphones', price: 2999, category: 'Electronics', stock: 50, image: 'https://via.placeholder.com/300x200?text=Headphones' },
      { name: 'Running Shoes', description: 'Lightweight shoes for everyday running', price: 4500, category: 'Footwear', stock: 30, image: 'https://via.placeholder.com/300x200?text=Shoes' },
      { name: 'Backpack', description: 'Durable 30L travel backpack', price: 1800, category: 'Bags', stock: 20, image: 'https://via.placeholder.com/300x200?text=Backpack' },
      { name: 'Smartwatch', description: 'Fitness tracking smartwatch with heart rate monitor', price: 8999, category: 'Electronics', stock: 15, image: 'https://via.placeholder.com/300x200?text=Smartwatch' },
      { name: 'Laptop Stand', description: 'Adjustable aluminum laptop stand', price: 1200, category: 'Accessories', stock: 40, image: 'https://via.placeholder.com/300x200?text=Laptop+Stand' },
      { name: 'Cotton T-Shirt', description: '100% pure cotton premium t-shirt', price: 599, category: 'Clothing', stock: 100, image: 'https://via.placeholder.com/300x200?text=T-Shirt' },
    ];
    const inserted = await Product.insertMany(sampleProducts);
    res.json({ message: `${inserted.length} sample products seeded!`, products: inserted });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
