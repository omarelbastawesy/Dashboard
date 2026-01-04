# Dashboard Application

A comprehensive management dashboard application built with **Next.js 16** and **Tailwind CSS v4**. This project features a robust authentication system, role-based access for Employees and Managers, and efficient project/task tracking.

## 🚀 Key Features

### 🔐 Authentication & Security

- **Secure Login/Signup**: Custom authentication flow.
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

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/) / JavaScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Forms**: [React Hook Form](https://react-hook-form.com/)
- **Icons**: [FontAwesome](https://fontawesome.com/)

## 🏁 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

- `app/`: Main application source (App Router).
  - `components/`: Reusable UI components (Navbar, Login, Alert, etc.).
  - `Data/`: Context providers and static data.
  - `employee/` & `manager/`: Role-specific pages.
  - `projects/` & `tasks/`: Feature-specific modules.
