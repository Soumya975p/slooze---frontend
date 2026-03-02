# Slooze Commodities Management System

[Click here to view the deployed webpage](https://slooze-frontend-ruby.vercel.app/)

## 🔑 Demo Credentials

**Manager Role:**
- **Email:** `manager@slooze.com`
- **Password:** `Password@123`
*(Has access to analytics, financial data, and can add new products)*

**Store Keeper Role:**
- **Email:** `keeper@slooze.com`
- **Password:** `Password@123`
*(Can view and manage the product inventory)*

---

This repository contains the source code for the Slooze Commodities Management System, which is split into a **Frontend** (Next.js) and a **Backend** (NestJS).

## Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or another package manager (yarn/pnpm)

---

## 🚀 Running the Project Locally

To run the full stack locally, you will need to open **two terminal windows**: one for the backend and one for the frontend.

### 1. Start the Backend Server
The backend is built with NestJS, Prisma, and GraphQL.

```bash
# 1. Navigate to the backend directory
cd backend

# 2. Install dependencies
npm install

# 3. Setup the database (if needed)
# Ensure your .env file is configured with the correct DATABASE_URL
npx prisma generate
npx prisma db push
npm run seed  # To seed the database with initial users and products

# 4. Start the development server
npm run start:dev
```
The backend server will typically start on `http://localhost:4000` or the port specified in your environment variables.

### 2. Start the Frontend App
The frontend is built with Next.js 15, React 19, and Tailwind CSS.

```bash
# 1. Open a new terminal and navigate to the frontend directory
cd frontend/my-app

# 2. Install dependencies
npm install

# 3. Start the Next.js development server
npm run dev
```

The frontend application will now be available at **[http://localhost:3000](http://localhost:3000)**.
