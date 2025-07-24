# 💼 Employee Management System

This React application is a fully responsive, accessible Employee Management System built for the INT304 final project. It allows users to enter, store, and display employee details in a sleek, card-style layout with personalized styling based on department and role.

Built using ReactJS, CSS3, and `localStorage`, it showcases advanced form handling, visual design, state management with Hooks, and ethical user experience principles.

---

## 🧩 Features

- Fully controlled form using `useState` and `useEffect`
- Persistent storage with `localStorage`
- Validation logic for:
  - Required fields
  - Positive salary values
  - No future start dates
  - Unique emails only
  - Clean name input with limited characters
- Department-based avatar colors
- Fade-in animations and strong visual hierarchy
- Semantic icons for email, department, salary, start date
- Responsive grid layout and mobile optimization
- Ethical accessibility practices and contrast compliance

---

## 🎯 Architecture Overview

- React Hooks manage state
- CSS3 Grid and Flexbox center layout and style components
- Avatar class dynamically assigned per department
- Optional Redux architecture planned for future scaling
- Ready for integration with Python backend API or RESTful services

---

## 🔧 Setup

```bash
git clone https://github.com/2Kier16/Employee-proj.git
cd employee-proj
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