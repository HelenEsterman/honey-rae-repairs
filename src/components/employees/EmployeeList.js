import { getAllEmployeesInfo } from "../../services/employeeService";
import { User } from "../../user/User";
import "./Employees.css";
import { useEffect, useState } from "react";

export const EmployeeList = () => {
  const [employeeArray, setEmployeeArray] = useState([]);

  useEffect(() => {
    getAllEmployeesInfo().then((employeeObj) => {
      setEmployeeArray(employeeObj);
    });
  }, []);
  return (
    <div className="employees">
      {employeeArray.map((employee) => {
        return <User user={employee} />;
      })}
    </div>
  );
};
