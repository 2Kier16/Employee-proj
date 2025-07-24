import React, {useState, useEffect} from'react';
import "./EmployeeList.css";
const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    try {
      const storedData = localStorage.getItem('employeeData');
      console.log('Raw stored data:', storedData);
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        if (Array.isArray(parsedData)) {
          setEmployees(parsedData);
        } else {
          console.warn('Stored data is not an array:', parsedData);
          setEmployees([]);
        }
      }
    } catch (error) {
      console.error('Error loading employee data:', error);
      setEmployees([]);
    }
  }, []);

  const getAvatarClass = (dept) => {
    switch ((dept || '').toLowerCase()) {
      case 'sales':
        return 'avatar-sales';
      case 'hr':
        return 'avatar-hr';
      case 'engineering':
      case 'tech':
        return 'avatar-tech';
      case 'admin':
        return 'avatar-admin';
      default:
        return 'avatar-sales';
    }
  };

  return (
    <div className="employee-list">
      <h2>Employee List</h2>
      {employees.length === 0 ? (
        <p>No employee data available.</p>
      ) : (
        employees.map((employee, index) => (
          <li key={index} className="employee-card">
            <span className={`employee-avatar ${getAvatarClass(employee.department)}`}>
              {employee.name?.split(' ').map((n) => n[0]).join('')}
            </span>
            <div className="employee-info">
              <strong>{employee.name}</strong>
              <div className="role-tag">{employee.position}</div>
              <div className="employee-detail">
                <span className="icon">📧</span> {employee.email}
              </div>
              <div className="employee-detail">
                <span className="icon">🏢</span> {employee.department}
              </div>
              <div className="employee-detail">
                <span className="icon">💰</span> {employee.salary}
              </div>
              <div className="employee-detail">
                <span className="icon">📅</span> {employee.startDate}
              </div>
              <span className="status-badge">Active</span>
            </div>
          </li>
        ))
      )}
    </div>
  );
};

export default EmployeeList;