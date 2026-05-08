# 🚀 iExperts Academy - Modern Full-Stack Landing Page

iExperts Academy is a comprehensive **Educational Hub** designed to bridge the gap between aspiring learners and industry experts. The platform serves as a professional gateway where students can explore a curated list of tech courses, get to know their highly experienced instructors, and read verified testimonials from successful alumni. 

By leveraging a powerful **.NET 10** backend and a high-end **Angular 21** interface, iExperts Academy provides a streamlined path from discovery to enrollment, complete with automated notifications to guide students through their learning journey.

![Tech Stack](https://img.shields.io/badge/Stack-.NET%2010%20%2B%20Angular%2021-blue)
![License](https://img.shields.io/badge/License-MIT-green)

---

## ⚡ Quick Start

Open **two terminals** from the root of the project:

**Terminal 1 — Backend:**
```bash
dotnet run --project backend/Backend.API/Backend.API.csproj
```
> Runs on `http://localhost:5085` — Swagger UI available at `http://localhost:5085/swagger`

**Terminal 2 — Frontend:**
```bash
cd frontend
npm install   # first time only
npm start
```
> Runs on `http://localhost:4200`

---

## ✨ Key Features

- **🎯 Dynamic Data (GET):** Real-time fetching of Courses, Instructors, and Testimonials via optimized **GET** endpoints.
- **📩 Enrollment Engine (POST):** Robust **POST** API handling student registrations with data validation.
- **✅ Email Confirmation:** Instant automated **Confirmation Messages** sent to students' emails upon successful enrollment using a custom **SMTP Email Service**.
- **💎 Premium UI/UX:** Modern **Glassmorphism** design, custom animated dropdowns, and professional **Font Awesome 6** integration.
- **🏗️ Clean Architecture:** The backend follows the **CQRS** pattern with **MediatR**, ensuring scalability and maintainability.
- **📱 Fully Responsive:** Optimized for all devices, from desktops to mobile phones.
- **🔗 Official Integration:** The Footer is fully integrated with **iExperts official website** links and social media platforms (LinkedIn, X, Facebook).
- **🔄 Auto-Seeding:** The database is automatically populated with sample data on the first run.

---

> [!IMPORTANT]
> ### 📧 Email Confirmation — Working Feature (Credentials Required)
> The email confirmation feature is **fully implemented** and working. However, the SMTP credentials were **intentionally left out** for security reasons.
> To test it, open `backend/Backend.API/appsettings.json` and fill in your own Gmail credentials:
> - **Username & FromEmail:** Your Gmail address.
> - **Password:** A **16-character Gmail App Password** (not your regular password).
>   - Generate one here: [Google App Passwords](https://myaccount.google.com/apppasswords) *(requires 2-Step Verification to be enabled).*


## 🛠️ Tech Stack

### Backend
- **Framework:** .NET 10 (ASP.NET Core Web API)
- **Database:** Entity Framework Core with SQL Server
- **Patterns:** CQRS, MediatR, Repository Pattern, Dependency Injection
- **Services:** SMTP Email Service, Auto-Seeding System

### Frontend
- **Framework:** Angular 21
- **Styling:** Vanilla CSS3 (Custom Glassmorphism Design)
- **Icons:** Font Awesome 6
- **Reactive Programming:** RxJS & Angular Signals

---

## 🚀 Getting Started

### Prerequisites
- [.NET 10 SDK](https://dotnet.microsoft.com/download)
- [Node.js & npm](https://nodejs.org/)
- [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/kerollos-Mansour/iexpert.git
   cd iexpert
   ```

2. **Setup Backend:**
   - Navigate to the API project:
     ```bash
     cd backend/Backend.API
     ```
   - Update `appsettings.json` with your SQL Connection String and SMTP settings.
   - Run the project (Migrations and Seeding will happen automatically):
     ```bash
     dotnet run
     ```


3. **Setup Frontend:**
   - Navigate to the frontend directory:
     ```bash
     cd ../../frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the development server:
     ```bash
     npm start
     ```

4. **Open in Browser:**
   - Go to `http://localhost:4200`

---

## 📂 Project Structure

- `backend/`: Contains the .NET solution with Clean Architecture layers (API, Core, Infrastructure, Data, Service).
- `frontend/`: Contains the Angular application with modular components and services.

---

## 🤝 Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.

---

## 👤 Author
**Kerollos Mansour**
- LinkedIn: [kerollos-morcos](https://www.linkedin.com/in/kerollos-morcos-3b56a927b)
- Website: [iExperts Academy](https://www.iexperts.co/)

---
*Developed with ❤️ for iExperts Academy Internship Assessment.*
