# NexUMS - Next University Management System

![NexUMS Logo](./public/logo.png)

## 📌 Overview

**NexUMS (Next University Management System)** is a modern full-stack university management platform designed to improve communication between universities, students, lecturers, administrators, and parents.

Unlike traditional University Management Systems that mainly focus on lecturer-student interactions, NexUMS introduces a dedicated **parental monitoring system** that provides parents with real-time visibility into their child's academic progress, attendance, assignments, and important university updates.

The system aims to improve transparency, reduce communication delays, and create stronger engagement between universities and families through a secure role-based platform.

---

# 🎯 Problem Statement

Existing University Management Systems such as Moodle, Blackboard, Google Classroom, and Canvas primarily focus on student and lecturer interactions. These platforms provide limited support for parental involvement, resulting in several challenges:

## Limited Transparency

- Parents often have no direct access to real-time academic performance data.
- Academic updates depend on students sharing information or occasional university meetings.

## Lack of Real-Time Parent Notifications

Existing systems do not provide automated alerts for:

- Low attendance
- Missing assignments
- Upcoming examinations
- Academic performance updates

## Limited Attendance Visibility

- Parents cannot directly monitor daily attendance.
- Lecturers must manually communicate attendance concerns.

## Increased Lecturer Workload

- Lecturer-parent communication is often manual and time-consuming.
- There is no centralised platform for parents to monitor student progress.

---

# 💡 Proposed Solution

NexUMS addresses these limitations by introducing a modern University Management System with enhanced parental access.

The system provides:

- Dedicated parent dashboard
- Real-time academic monitoring
- Automated notifications
- Attendance tracking
- Secure role-based access control
- Centralised communication platform

---

# ✨ Key Features

## 👨‍👩‍👧 Dedicated Parent Dashboard

Parents have their own secure portal where they can:

- View student academic progress
- Monitor grades and assignments
- Check attendance records
- View upcoming exams and university events
- Receive important announcements

Parents can only access information related to their registered child.

---

## 📊 Student Performance Monitoring

Students and parents can access:

- Academic results
- Assignment progress
- Course information
- Class schedules

Information is updated dynamically to ensure transparency.

---

## 🔔 Automated Notifications & Alerts

The system provides alerts for:

- Missing assignments
- Upcoming deadlines
- Examination schedules
- Results publication
- Important university announcements

---

## 📅 Event & Announcement Management

Universities can publish:

- Exam announcements
- Parent meetings
- Academic events
- University updates

Parents and students receive relevant notifications.

---

## 🔐 Role-Based Access Control (RBAC)

NexUMS implements secure role-based permissions.

### Admin

- Manage users
- Manage roles and permissions
- Maintain system configuration

### Lecturer

- Manage student records
- Update attendance
- Upload grades
- Manage assignments

### Student

- View academic information
- Access assignments
- View schedules

### Parent

- Monitor linked student's:
  - Attendance
  - Grades
  - Assignments
  - Events

Parents cannot edit student information or access other students' data.

---

# 🏗️ System Architecture

```
                    Users

 Admin   Lecturer   Student   Parent

          |
          |
     Next.js Application

          |
 -----------------------------
 |                           |
Frontend UI             Backend Logic

          |
      Prisma ORM

          |
     PostgreSQL Database

          |
        Docker
```

---

# 🛠️ Technology Stack

| Component | Technology |
|---|---|
| Frontend | Next.js, React, Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | PostgreSQL |
| ORM | Prisma |
| Authentication | Clerk / JWT Authentication |
| Validation | Zod |
| Forms | React Hook Form |
| Notifications | React Toastify |
| Charts | Recharts |
| Calendar | React Big Calendar |
| Containerisation | Docker |
| Language | TypeScript |

---

# 📦 Core Dependencies

## Authentication

### Clerk (@clerk/nextjs)

Used for:

- User authentication
- Login and registration
- Session management
- Secure user identity handling

---

## Database Management

### Prisma

Used as the ORM layer for:

- Database schema management
- Type-safe database queries
- Migration handling
- Database seeding

---

## Form Management & Validation

### React Hook Form

Used for:

- Efficient form handling
- Managing user inputs
- Improving form performance

### Zod

Used for:

- Schema validation
- Type-safe data validation
- Error handling

---

## UI & User Experience

### Tailwind CSS

Provides:

- Responsive UI design
- Utility-based styling
- Consistent interface components

### React Toastify

Provides:

- Success notifications
- Error messages
- User feedback alerts

---

## Data Visualisation

### Recharts

Used for:

- Academic performance charts
- Dashboard analytics
- Data representation

---

## Calendar Management

### React Big Calendar

Used for:

- Event scheduling
- Academic calendars
- University activities

---

# 📁 Project Structure

```
NexUMS/

│
├── app/
│   ├── dashboard/
│   ├── parent/
│   ├── student/
│   ├── lecturer/
│   ├── admin/
│   └── api/
│
├── components/
│   ├── forms/
│   ├── tables/
│   ├── charts/
│   ├── calendar/
│   └── navigation/
│
├── prisma/
│   └── schema.prisma
│
├── public/
│
├── lib/
│
├── package.json
└── README.md
```

---

# 🚀 Getting Started

## Prerequisites

Install:

- Node.js v18+
- PostgreSQL
- Docker
- npm/yarn/pnpm

Check installation:

```bash
node -v
npm -v
```

---

# Installation

Clone repository:

```bash
git clone https://github.com/yourusername/nexums.git
```

Navigate:

```bash
cd nexums
```

Install dependencies:

```bash
npm install
```

---

# Environment Configuration

Create `.env` file:

```env
DATABASE_URL="postgresql_database_url"

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_key"

CLERK_SECRET_KEY="your_secret"

JWT_SECRET="your_secret"
```

---

# Database Setup

Generate Prisma client:

```bash
npx prisma generate
```

Run migrations:

```bash
npx prisma migrate dev
```

Open Prisma database viewer:

```bash
npx prisma studio
```

---

# Running the Application

Start development server:

```bash
npm run dev
```

Application available at:

```
http://localhost:3000
```

---

# Production Build

Create production build:

```bash
npm run build
```

Start production server:

```bash
npm start
```

---

# 📸 Screenshots

Add screenshots:

```
/screenshots/dashboard.png
/screenshots/student-dashboard.png
/screenshots/parent-dashboard.png
/screenshots/lecturer-dashboard.png
```

---

# 🚧 Future Improvements

Future enhancements include:

- AI-powered student performance prediction
- Mobile application
- Email and SMS notifications
- Advanced analytics dashboards
- Attendance prediction models
- Integration with existing university systems
- Cloud deployment

---

# 👨‍💻 Author

**Ahmed Anuf**
