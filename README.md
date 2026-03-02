# Slooze — Commodities Management System

A full-stack web application for managing commodities with real-time analytics, user authentication, and a comprehensive dashboard. Built with **NestJS**, **GraphQL**, **PostgreSQL**, **Next.js**, **TypeScript**, and **Tailwind CSS v4**.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Running the Application](#running-the-application)
- [Demo Credentials](#-demo-credentials)
- [API Documentation](#api-documentation)
- [Authentication](#authentication)
- [Deployment](#deployment)
- [Contributing](#contributing)

---

## 🎯 Overview

**Slooze** is a comprehensive commodities management platform designed for both **Store Keepers** and **Managers**. It provides:

- User authentication with JWT tokens
- GraphQL API for querying and mutating data
- Real-time dashboard with charts and analytics
- Product management (CRUD operations)
- Role-based access control (RBAC)
- Beautiful, responsive UI with Tailwind CSS v4
- Full-page Footer with company branding
- Dynamic manager profile avatars

### User Roles

- **Store Keeper**: Can view and manage products, access inventory
- **Manager**: Full access to dashboard, analytics, financial reports, and user management

---

## ✨ Features

### Frontend (Next.js 16)
- ✅ **Authentication Pages**: Login with email/password  
- ✅ **Manager Dashboard**: 
  - Sales stats (Total Earning, Views, Total Sales, Subscriptions)
  - Revenue overview chart with custom Y-axis labels
  - Recent sales table
  - Multiple stats sections with sparkline charts
  - Subscriptions performers
  - Top sales products
  - Payment history
- ✅ **Sidebar Navigation**: Collapsible menu with role-based access
- ✅ **Product Management**: View, add, edit products
- ✅ **Responsive Design**: Works on desktop, tablet, mobile
- ✅ **Footer**: Full-width footer with links and newsletter signup
- ✅ **Dynamic Avatar**: Manager profile avatar from email using ui-avatars API
- ✅ **Dark Mode Support**: Theme toggle for light/dark mode

### Backend (NestJS 11)
- ✅ **GraphQL API**: Fully typed GraphQL schema with Apollo Server
- ✅ **Authentication**: JWT-based auth with bcrypt password hashing
- ✅ **Database**: PostgreSQL with Prisma ORM
- ✅ **User Management**: Create, read, update users with roles
- ✅ **Product Management**: Full CRUD operations
- ✅ **Dashboard Stats**: Aggregated data for charts and tables
- ✅ **Authorization**: Role-based middleware and guards

---

## 🛠 Tech Stack

### Frontend
- **Framework**: Next.js 16.1.6 (App Router)
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS v4 (use `bg-linear-to-*` not `bg-gradient-to-*`)
- **State Management**: Apollo Client v4 with subpath imports
- **Charts**: Recharts, Chart.js v4, react-chartjs-2
- **Icons**: Lucide React
- **Utilities**: js-cookie, next-themes
- **Components**: Custom shadcn-inspired components

### Backend
- **Framework**: NestJS 11.x
- **Language**: TypeScript 5.x
- **API**: GraphQL with Apollo Server
- **Database**: PostgreSQL 15+
- **ORM**: Prisma 7.4.2 (with PrismaPg adapter)
- **Authentication**: JWT, bcrypt
- **Validation**: class-transformer, class-validator
- **Testing**: Jest, @nestjs/testing

### DevOps & Tools
- **Version Control**: Git
- **Package Manager**: npm
- **Ports**:
  - Backend: `4000` (GraphQL at `/graphql`)
  - Frontend: `3000`
- **Database**: PostgreSQL

---

## 📁 Project Structure

```
slooze/
├── backend/                              # NestJS Backend
│   ├── src/
│   │   ├── main.ts
│   │   ├── app.module.ts
│   │   ├── auth/                         # Authentication
│   │   │   ├── auth.service.ts
│   │   │   ├── auth.resolver.ts
│   │   │   └── jwt.strategy.ts
│   │   ├── users/                        # User management
│   │   │   ├── users.service.ts
│   │   │   ├── users.resolver.ts
│   │   │   └── user.entity.ts
│   │   ├── products/                     # Products CRUD
│   │   │   ├── products.service.ts
│   │   │   ├── products.resolver.ts
│   │   │   └── product.entity.ts
│   │   └── dashboard/                    # Dashboard stats
│   │       ├── dashboard.service.ts
│   │       └── dashboard.resolver.ts
│   ├── prisma/
│   │   └── schema.prisma                 # Database schema
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/my-app/                      # Next.js Frontend
│   ├── app/
│   │   ├── (auth)/login/page.tsx         # Login (70/30 split with image)
│   │   ├── (dashboard)/
│   │   │   ├── layout.tsx                # Dashboard shell + footer
│   │   │   ├── dashboard/page.tsx        # Main dashboard
│   │   │   └── products/                 # Product pages
│   │   ├── layout.tsx                    # Root layout
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── ui/ThemeToggle.tsx
│   │   └── ...components
│   ├── lib/
│   │   ├── apollo-client.ts              # Apollo setup
│   │   ├── auth-context.tsx              # Auth context
│   │   └── graphql/                      # GraphQL queries
│   ├── public/
│   │   └── Screenshot 2026-03-03 001943.png
│   ├── middleware.ts                     # Auth guard
│   ├── package.json
│   └── tsconfig.json
│
└── README.md                              # This file
```

---

## 🔑 Demo Credentials

**Manager Role:**
- **Email:** `soumya384p@gmail.com`
- **Password:** `Soumya@123`
- *(Has access to analytics, financial data, dashboard, and can add products)*

**Store Keeper Role:**
- **Email:** `keeper@slooze.com`
- **Password:** `Password@123`
- *(Can view and manage product inventory)*

---

## Prerequisites

- **Node.js** 18+ and **npm** 9+
- **PostgreSQL** 15+ (running locally or accessible)
- **Git**

---

## 🚀 Running the Project Locally

To run the full stack locally, you will need to open **two terminal windows**: one for the backend and one for the frontend.

### 1. Backend Setup (NestJS + GraphQL)

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file with your PostgreSQL connection
# DATABASE_URL="postgresql://postgres:Soumya@123@localhost:5432/snooze"

# Generate Prisma Client
npx prisma generate

# Run database migrations (creates tables)
npx prisma migrate dev

# (Optional) Seed initial data
npx prisma db seed

# Start development server
npm start  # or npm run start:dev for watch mode
```

**Backend starts on:** `http://localhost:4000`  
**GraphQL Playground:** `http://localhost:4000/graphql`

### 2. Frontend Setup (Next.js)

```bash
# Open new terminal and navigate to frontend
cd frontend/my-app

# Install dependencies
npm install

# Create .env.local (if needed)
# NEXT_PUBLIC_GRAPHQL_URL="http://localhost:4000/graphql"

# Start development server
npm run dev
```

**Frontend available at:** `http://localhost:3000`

---

## 🔐 Authentication

### Login Flow

1. User enters email/password on login page
2. Frontend sends credentials to GraphQL `login` mutation
3. Backend validates credentials and returns JWT token
4. Token stored in `localStorage` and `httpOnly` cookie
5. Apollo Client includes token in `Authorization` header for all requests
6. Protected routes redirect unauthenticated users to login page

### Role-Based Access Control (RBAC)

- **Middleware Protection**: Routes checked in `middleware.ts`
- **PUBLIC_ROUTES**: `['/login']`
- **MANAGER_ONLY_ROUTES**: `['/dashboard', '/products/add']`
- **Layout Guards**: Dashboard layout redirects STORE_KEEPER to products

---

## 🎨 Dashboard UI

### Components
- **Stat Cards**: 4 metric cards (Earning, Views, Sales, Subscriptions)
- **Overview Chart**: Bar chart with Y-axis labels positioned at 3.6%, 25.4%, 47.3%, 69.2%, 91.1%
- **Recent Sales Table**: Email, amount, status columns
- **Stats Grid**: 2×2 with line charts, bar charts, and earning sparklines
- **Bottom Tables**: Subscriptions, Products, Payment History
- **Footer**: Full-width with branding, links, social icons, newsletter

### Key Features
- Custom recharts shapes (no border radius on bars)
- Chart.js stacked bar charts for earnings
- HTML overlay for Y-axis labels (prevents overlapping)
- Sticky sidebar (top-0 h-screen, overflow-y-auto)
- Sticky header (top-0 z-10)
- Full-page scrolling layout (min-h-screen flex flex-col)

---

## 🔌 API Documentation

### Login (GraphQL Mutation)
```graphql
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    access_token
    user {
      id
      email
      role
    }
  }
}
```

### Register (GraphQL Mutation)
```graphql
mutation Register($email: String!, $password: String!, $role: String!) {
  register(email: $email, password: $password, role: $role) {
    access_token
    user {
      id
      email
      role
    }
  }
}
```

### Dashboard Stats (GraphQL Query)
```graphql
query GetDashboardStats {
  dashboardStats {
    totalEarnings
    totalSales
    totalRevenue
    subscriptions
    monthlySalesData { month value }
    recentSales { id amount date }
  }
}
```

### Products
```graphql
query GetProducts {
  products {
    id name price quantity description createdAt
  }
}

mutation CreateProduct($name: String!, $price: Float!, $quantity: Int!) {
  createProduct(name: $name, price: $price, quantity: $quantity) {
    id name price quantity
  }
}
```

---

## 📚 Key Commands

### Backend
```bash
npm start              # Start development server
npm run build          # Build for production
npx prisma generate   # Generate Prisma client
npx prisma migrate    # Run migrations
npx prisma db push    # Push schema changes
npx prisma studio    # Open Prisma Studio
```

### Frontend
```bash
npm run dev           # Start development server
npm run build         # Build for production
npm run lint          # Run ESLint
npm run type-check    # TypeScript check
```

---

## 🌐 Environment Variables

### Backend (.env)
```env
DATABASE_URL="postgresql://user:password@localhost:5432/snooze"
JWT_SECRET="your-secret-key-here"
PORT=4000
NODE_ENV="development"
```

### Frontend (.env.local)
```env
NEXT_PUBLIC_GRAPHQL_URL="http://localhost:4000/graphql"
```

---

## 🚢 Deployment

### Backend (NestJS)
1. Build: `npm run build`
2. Deploy to: Vercel, Railway, Render, or Heroku
3. Set `DATABASE_URL` and `JWT_SECRET` in environment
4. Run migrations: `npx prisma migrate deploy`

### Frontend (Next.js)
1. Best option: **Vercel** (seamless Next.js deployment)
   ```bash
   vercel deploy
   ```
2. Alternative: **Docker** or traditional Node hosting

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

MIT License — feel free to use this project in your applications.

---

## 👨‍💼 Author

**Soumya** - [GitHub Profile](https://github.com/Soumya975p)

---

## 📞 Support

For issues, questions, or suggestions:
- Open an issue on GitHub
- Email: soumya384p@gmail.com

---

**Happy coding! 🎉**
