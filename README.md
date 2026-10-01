# Peer-to-Peer Developer Mentorship and Code Review Portal

This project is a localized, asynchronous peer-to-peer code review platform designed specifically for university students. It bridges the gap between theoretical computing lectures and practical, collaborative software engineering by allowing junior students to receive direct, line-by-line mentorship from advanced peers.

## 🚀 Tech Stack
- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MySQL (via XAMPP)
- **Authentication:** JWT (JSON Web Tokens)

## 📁 Folder Structure
- `/backend`: Node.js Express server, API routes, controllers, and database configuration.
- `/frontend`: React application and UI components (to be implemented).

## 🛠️ Setup Instructions

### 1. Prerequisites
- [Node.js](https://nodejs.org/) installed
- [XAMPP](https://www.apachefriends.org/index.html) installed (for MySQL)
- Git

### 2. Database Setup
1. Open XAMPP Control Panel and start **MySQL**.
2. Open phpMyAdmin (usually `http://localhost/phpmyadmin`).
3. Run the SQL script located in `backend/database/schema.sql` to generate the `mentorship_portal_db` database and all required tables.

### 3. Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Environment Configuration:
   - Ensure the `.env` file exists (use `.env.example` as a template).
   - Ensure `DB_NAME` is set to `mentorship_portal_db`.
4. Start the development server:
   ```bash
   npm run dev
   ```
   The backend will run at `http://localhost:5000`.

## 📌 Project Objectives
- Provide a text submission form with automatic code syntax highlighting.
- Enable a threaded comment system linked directly to user-submitted code snippets.
- Secure database structure distinguishing between 'learner' and 'mentor' roles.
- Implement filtering systems to sort code posts by programming language or course unit.

## 👨‍💻 Author
- **Lazaro Otieno** (Mount Kenya University)
