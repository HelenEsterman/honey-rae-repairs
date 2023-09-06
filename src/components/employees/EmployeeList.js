import { getAllEmployees } from "../../services/employeeService";
import { User } from "../user/User";
import "./Employees.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const EmployeeList = () => {
  const [employeeArray, setEmployeeArray] = useState([]);

  useEffect(() => {
    getAllEmployees().then((employeeObj) => {
      setEmployeeArray(employeeObj);
    });
  }, []);
  return (
    <div className="employees">
      {employeeArray.map((employee) => {
        return (
          <Link to={`/employees/${employee.id}`} key={employee.id}>
            <User user={employee.user} />
          </Link>
        );
      })}
    </div>
  );
};
