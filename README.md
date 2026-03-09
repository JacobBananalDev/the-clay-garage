# 🏺 The Clay Garage

The Clay Garage is a full-stack web application for selling handmade pottery online.  
It provides a clean marketplace experience where users can browse ceramics, view product details, and purchase items directly from the studio.

This project is being built as a modern, scalable web application using a React-based frontend and a Python API backend.

---

## ✨ Features

- 🏺 Browse handmade pottery listings
- 📸 Product image galleries
- 🛒 Shopping cart and checkout
- 👤 User accounts
- 📦 Order management
- 💳 Secure payments (Stripe planned)
- 📱 Mobile-friendly responsive design

---

## 🧰 Tech Stack

### Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS

### Backend
- FastAPI (Python)
- SQLAlchemy
- PostgreSQL

### Infrastructure
- Docker
- AWS (planned)
- Terraform (planned)

---

## 📂 Project Structure

```bash
the-clay-garage
│
├── frontend # Next.js frontend application
│
├── backend # FastAPI backend API
│
├── infrastructure # Docker / deployment configs
│
├── docs # Architecture and documentation
│
└── README.md
```

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/JacobBananalDev/the-clay-garage.git

cd the-clay-garage
```

---

### Backend Setup

```bash
cd backend
python -m venv venv
venv\Scripts\activate # Windows
source venv/bin/activate # Mac/Linux

pip install fastapi uvicorn sqlalchemy psycopg2-binary python-dotenv
```

Run the API:

```bash
uvicorn main:app --reload
```

API will run at:

```bash
http://localhost:8000
```

---

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend will run at:

```bash
http://localhost:3000
```

---

## 🏗️ Planned Features

- Product inventory system
- Image uploads with cloud storage
- Stripe payment integration
- Order history
- Seller dashboard
- Review system

---

## 🎯 Project Goals

The Clay Garage aims to provide a simple and elegant storefront for handmade ceramics while serving as a modern full-stack web application demonstrating:

- scalable backend architecture
- REST API design
- cloud deployment
- modern frontend development

---

## 📜 License

This project is licensed under the MIT License.