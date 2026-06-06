# 🏢 CRM System — Final Term Project
**Air University | Creative Technology | Spring 2026**
**Subject:** Full Stack Programming Lab | **Class:** BSSE VI-B

---

## 📁 Project Structure

```
Final_Term_Project_CRM/
├── backend/                   # Node.js + Express + MongoDB
│   ├── controllers/           # Route logic
│   ├── middleware/            # JWT auth middleware
│   ├── models/                # Mongoose schemas
│   ├── routes/                # API routes
│   ├── .env                   # Environment variables
│   └── server.js              # Entry point
│
└── frontend/                  # Next.js App
    ├── app/
    │   ├── components/        # Reusable components
    │   │   ├── Sidebar.js
    │   │   └── Chatbot.js
    │   ├── login/page.js
    │   ├── register/page.js
    │   ├── dashboard/
    │   │   ├── page.js              # Dashboard overview
    │   │   ├── customers/page.js    # Customer list + Search/Filter
    │   │   ├── add-customer/page.js
    │   │   ├── edit-customer/[id]/page.js
    │   │   └── invoice/page.js
    │   ├── globals.css
    │   └── layout.js
    └── .env.local
```

---

## 🚀 Setup & Run Instructions

### Prerequisites
- Node.js v18+
- MongoDB (local or MongoDB Atlas)
- npm or yarn

---

### Step 1: Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/Full-Stack-Programming-Lab.git
cd Full-Stack-Programming-Lab/Final_Term_Project_CRM
```

---

### Step 2: Setup Backend

```bash
cd backend
npm install
```

Edit `.env` file:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/crm_db
JWT_SECRET=your_super_secret_key
```

Run the backend:
```bash
npm run dev
```
Backend will run on: `http://localhost:5000`

---

### Step 3: Setup Frontend

```bash
cd ../frontend
npm install
npm run dev
```
Frontend will run on: `http://localhost:3000`

---

### Step 4: Load Sample Data

1. Register/Login to the app
2. Go to **Customers** page
3. Click **"🌱 Load Sample Data"** to insert 15 customers

---

## ✅ Features Implemented

| # | Feature | Status |
|---|---------|--------|
| I | Authentication (JWT + bcrypt) | ✅ Complete |
| II | Customer CRUD (15 records) | ✅ Complete |
| III | Search & Filter System | ✅ Complete |
| IV | Next.js Frontend (SSR/CSR) | ✅ Complete |
| V | Invoice Generation + PDF Download | ✅ Complete |
| VI | Notification System (react-hot-toast) | ✅ Complete |
| VII | Chatbot (rule-based, no external API) | ✅ Complete |
| VIII | Clean UI + Code Quality | ✅ Complete |

---

## 🔌 API Endpoints

### Auth
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/auth/me` | Get current user |

### Customers (Protected)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/customers` | Get all (search & filter) |
| POST | `/api/customers` | Add customer |
| GET | `/api/customers/:id` | Get one |
| PUT | `/api/customers/:id` | Update |
| DELETE | `/api/customers/:id` | Delete |
| POST | `/api/customers/seed` | Insert 15 samples |

### Invoices (Protected)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/invoices` | Get all invoices |
| POST | `/api/invoices` | Create invoice |
| GET | `/api/invoices/:id` | Get one |
| DELETE | `/api/invoices/:id` | Delete |

---

## 🤖 Chatbot Commands

| Command | Action |
|---------|--------|
| `help` | Show all commands |
| `show customers` | List top 5 customers |
| `add customer` | Navigate to add form |
| `open invoices` | Open invoice module |
| `dashboard` | Go to dashboard |

---

## 🛡️ Security
- Passwords hashed with **bcryptjs** (salt rounds: 10)
- JWT tokens expire in **7 days**
- All customer/invoice routes protected with `protect` middleware
- Unauthorized API access returns `401`

---

## 👨‍💻 Tech Stack
- **Frontend:** Next.js 13, React 18, Axios, react-hot-toast
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose ODM
- **Auth:** JWT + bcryptjs
