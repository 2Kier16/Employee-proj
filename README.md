# 💼 Employee Management System

This React project features a responsive, accessible employee form and dynamic employee list. Built as part of a multi-week assignment, it demonstrates form handling, component organization, styling, validation, and persistent data storage using `localStorage`.

## 🧩 Features

- Fully controlled form using `useState`
- Input fields for name, email, position, department, salary, and start date
- Validation logic for:
  - Required fields
  - Positive salary values
  - No future start dates
  - No duplicate emails
  - Name field restricted to letters, spaces, hyphens, and apostrophes
- Dynamic Employee List component that displays saved entries
- Persistent data storage using `localStorage`
- Responsive card-style layout using custom CSS
- Keyboard and screen reader-friendly
- Clean, accessible form structure

## 🚀 Getting Started

To run this project locally:

```bash
git clone https://github.com/2Kier16/Employee-proj.git
cd employee-management
npm install
npm start

Folder Structure

employee-management/
├── src/
│   ├── components/
│   │   ├── EmployeeForm.js
│   │   └── EmployeeList.js
│   ├── EmployeeForm.css
│   └── EmployeeList.css
├── App.js
├── index.js
└── README.md

Author
Built by Kier Turpin — developer, designer, and accessibility advocate. GitHub Profile: https://github.com/2Kier16