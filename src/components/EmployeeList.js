import React, {useState, useEffect} from'react';
import "./EmployeeList.css";

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

   useEffect(() => {
  try {
    const storedData = localStorage.getItem("employeeData");
    console.log("Raw stored data:", storedData);
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      if (Array.isArray(parsedData)) {
        setEmployees(parsedData);
      } else {
        console.warn("Stored data is not an array:", parsedData);
        setEmployees([]);
      }
    }
  } catch (error) {
    console.error("Error loading employee data:", error);
    setEmployees([]);
  }
}, []);

return (
    <div className="employee-list">
        <h2>Employee List</h2>
        {employees.length === 0 ? (
            <p>No employee data available.</p>
        ) : (
            <ul>
                {employees.map((employee, index) => (
                    <li key={index}>
                        <strong>Name:</strong> {employee.name} <br />
                        <strong>Email:</strong> {employee.email} <br />
                        <strong>Position:</strong> {employee.position} <br />
                        <strong>Department:</strong> {employee.department} <br />
                        <strong>Salary:</strong> {employee.salary} <br />
                        <strong>Start Date:</strong> {employee.startDate}
                    </li>
                ))}
            </ul>
        )}
    </div>
    );

};

export default EmployeeList;