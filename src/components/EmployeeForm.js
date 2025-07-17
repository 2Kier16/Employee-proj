import React, { useState, useEffect } from'react';
import './EmployeeForm.css';


function EmployeeForm() {
   const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: '',
    department: '',
    salary: '',
    startDate: ''
  });

const handleChange =(e) => {
    const { name, value } = e.target;
    setFormData(prev => ({...prev, [name]: value }));
};

useEffect(() => {
    const savedData = localStorage.getItem('employeeData');
    if (savedData) {
        setFormData(JSON.parse(savedData));
    }
}, []);

const handleSubmit = (e) => {
  e.preventDefault();

  // Basic validation
  const nameRegex = /^[a-zA-Z\s'-]+$/;
  if (!nameRegex.test(formData.name)) {
    alert("Name can only contain letters, spaces, hyphens, and apostrophes.");
    return;
  }

  if (formData.salary <= 0) {
    alert("Salary must be a positive number.");
    return;
  }

  const today = new Date();
  const startDate = new Date(formData.startDate);
  if (startDate > today) {
    alert("Start date cannot be in the future.");
    return;
  }

  const existingData = JSON.parse(localStorage.getItem("employeeData")) || [];

 
  const duplicate = existingData.find(emp => emp.email === formData.email);
  if (duplicate) {
    alert("An employee with this email already exists.");
    return;
  }

  const updatedData = [...existingData, formData];
  localStorage.setItem("employeeData", JSON.stringify(updatedData));
  console.log("Submitted Employee:", formData);

  setFormData({
    name: '',
    email: '',
    position: '',
    department: '',
    salary: '',
    startDate: ''
  });
};
  return (
    <form className='employee-form' onSubmit={handleSubmit}>
        <h2>Employee Info</h2>

        <label>Name:
            <input type='text' name='name' value={formData.name} onChange={handleChange} required />
        </label>

        <label>Email:
            <input type='email' name='email' value={formData.email} onChange={handleChange} required />
        </label>

        <label>Position:
            <input type='text' name='position' value={formData.position} onChange={handleChange} required />
        </label>

        <label>Department:
            <input type='text' name='department' value={formData.department} onChange={handleChange} required />
        </label>

        <label>Salary:
            <input type='number' name='salary' value={formData.salary} onChange={handleChange} required />
        </label>

        <label>Start Date:
            <input type='date' name='startDate' value={formData.startDate} onChange={handleChange} required />
        </label>

        <button type='submit'>Add Employee</button>
    </form>
  );


}

export default EmployeeForm;