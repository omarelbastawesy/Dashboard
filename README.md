# Dashboard Application

A comprehensive management dashboard application built with **Next.js 16**, **Tailwind CSS v4**, and **MongoDB**. This project features a robust authentication system, role-based access for Employees and Managers, and efficient project/task tracking.

## 🚀 Key Features

### 🔐 Authentication & Security

- **Secure Login/Signup**: Custom authentication flow with JWT.
- **Password Hashing**: Secure password storage using bcrypt.
- **Session Management**: Client-side session handling using `localStorage`.
- **Form Validation**: robust validation using **React Hook Form** and **Zod**.

### 👥 Role-Based Access

- **Employee Portal**: Dedicated view and tools for employees.
- **Manager Portal**: Administrative controls and overview for managers.
- **Permissions**: Route protection based on user roles.

### 📊 Project & Task Management

- **Projects**: Create, view, and manage ongoing projects.
- **Tasks**: Assign and track tasks within projects.
- **Status Tracking**: Real-time status updates for tasks.

### 🌐 Internationalization (i18n)

- **Language Support**: Built-in `LangContext` to support multiple languages.
- **Dynamic Content**: Application-wide language switching capability.

### 🎨 Modern UI/UX

- **Responsive Design**: Mobile-first approach using **Tailwind CSS v4**.
- **Icons**: Integrated **FontAwesome** for a clean, visual interface.
- **Animations**: Smooth transitions and interactive elements.

## 🛠️ Tech Stack

### Frontend

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/) / JavaScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Forms**: [React Hook Form](https://react-hook-form.com/)
- **Icons**: [FontAwesome](https://fontawesome.com/)

### Backend

- **Database**: [MongoDB Atlas](https://www.mongodb.com/atlas)
- **ODM**: [Mongoose](https://mongoosejs.com/)
- **Authentication**: JWT + bcrypt
- **API**: Next.js API Routes

## 🏁 Getting Started

### Prerequisites

- Node.js 20 or higher
- npm, yarn, pnpm, or bun
- MongoDB Atlas account (or local MongoDB)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd Dashboard
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Edit `.env` and add your credentials:

```env
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/?appName=Dashboard
JWT_SECRET=your_super_secret_jwt_key_here
```

4. **Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

- `app/`: Main application source (App Router).
  - `api/`: API routes for authentication and data operations.
  - `components/`: Reusable UI components (Navbar, Login, Alert, etc.).
  - `Data/`: Context providers and static data.
  - `employee/` & `manager/`: Role-specific pages.
  - `projects/` & `tasks/`: Feature-specific modules.
- `lib/`: Utility functions and database connection.
- `models/`: Mongoose schemas for MongoDB.

## 🚀 Deployment

This application is ready to deploy on **Netlify** with **MongoDB Atlas**.

### Quick Deploy

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Add environment variables in Netlify
4. Deploy!

📖 **For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)**

📋 **Use the [DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md) to track your progress**

## 🔒 Environment Variables

| Variable       | Description                      | Required |
| -------------- | -------------------------------- | -------- |
| `MONGO_URL`    | MongoDB connection string        | Yes      |
| `JWT_SECRET`   | Secret key for JWT tokens        | Yes      |
| `NODE_VERSION` | Node.js version (for deployment) | Yes (20) |

## 📝 License

This project is private and not licensed for public use.
