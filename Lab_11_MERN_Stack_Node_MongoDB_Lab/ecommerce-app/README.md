# 🛒 ShopMERN — Ecommerce App (Lab_11)

A full-stack ecommerce application built with the **MERN Stack**:
- **M**ongoDB — NoSQL Database
- **E**xpress.js — Backend Framework
- **R**eact (Next.js) — Frontend Framework
- **N**ode.js — Runtime Environment

---

## 📁 Project Structure

```
ecommerce-app/
├── backend/            ← Node.js + Express.js + MongoDB
│   ├── models/
│   │   └── Product.js  ← Mongoose schema
│   ├── routes/
│   │   └── products.js ← CRUD API routes
│   ├── server.js       ← Entry point
│   ├── .env            ← Environment variables
│   └── package.json
│
└── frontend/           ← Next.js + Tailwind CSS
    ├── app/
    │   ├── page.js             ← Home page (all products)
    │   ├── product/[id]/page.js ← Product detail page
    │   └── add-product/page.js ← Add product form
    ├── components/
    │   ├── Header.js
    │   ├── Footer.js
    │   └── ProductCard.js
    └── package.json
```

---

## ⚙️ Setup Instructions

### Prerequisites
- Node.js (LTS) installed
- MongoDB running locally on port 27017
- MongoDB Compass (optional, for visual DB management)

---

### 1. Start the Backend

```bash
cd backend
npm install
npm start
```

Server runs at: **http://localhost:5000**

---

### 2. Start the Frontend

```bash
cd frontend
npm install
npm run dev
```

App runs at: **http://localhost:3000**

---

## 🌐 API Endpoints

| Method | Endpoint                    | Description          |
|--------|-----------------------------|----------------------|
| GET    | /api/products               | Get all products     |
| GET    | /api/products/:id           | Get single product   |
| POST   | /api/products               | Create new product   |
| PUT    | /api/products/:id           | Update a product     |
| DELETE | /api/products/:id           | Delete a product     |
| GET    | /api/products/seed/data     | Seed sample data     |

---

## 🧪 Testing the API

1. `http://localhost:5000/` → Server check
2. `http://localhost:5000/api/products/seed/data` → Insert sample products
3. `http://localhost:5000/api/products` → View all products

---

## 📸 Screenshots

Add screenshots of:
- MongoDB Compass showing the `ecommerce` database
- Terminal showing server running
- Browser showing product listing
- Browser showing product detail

---

## 👨‍💻 Submitted by

- **Class:** BSSE-VI-B & A
- **Lab:** Lab_11 — MERN Stack Node MongoDB Lab
- **Instructor:** Mr. Sharif Hussain
