import { useEffect, useState } from "react";
import {
  getAllEmployees,
  getEmployeeById,
} from "../../services/employeeService";

export const Ticket = ({ ticket }) => {
  //don't need employees useState when trying to fine assigned employee through the employee ID
  const [employees, setEmployees] = useState([]);
  const [assignedEmployee, setAssignedEmployee] = useState({}); //nothing in parenthesis when trying to fine assigned employee through the employee ID

  //don't need all this when trying to fine assigned employee through the employee ID
  useEffect(() => {
    getAllEmployees().then((employeesArray) => {
      setEmployees(employeesArray);
    });
  }, []);

  useEffect(() => {
    const foundEmployee = employees.find(
      (employee) => employee.id === ticket.employeeTickets[0]?.employeeId
    );
    setAssignedEmployee(foundEmployee);
  }, [employees, ticket]);

  //this function can be used when trying to fine assigned employee through the employee ID
  //   useEffect(() => {
  //     if (ticket.employeeTickets.length) {
  //       getEmployeeById(ticket.employeeTickets[0].employeeId).then(
  //         (employeeObj) => {
  //           setAssignedEmployee(employeeObj);
  //         }
  //       );
  //     }
  //   }, [ticket]);
  return (
    <section className="ticket">
      <header className="ticket-info">#{ticket.id}</header>
      <div>{ticket.description}</div>
      <footer>
        <div>
          <div className="ticket-info">Assignee</div>
          <div>
            {assignedEmployee ? assignedEmployee.user?.fullName : "none"}
          </div>
        </div>
        <div>
          <div className="ticket-info">Emergency</div>
          <div>{ticket.emergency ? "yes" : "no"}</div>
        </div>
      </footer>
    </section>
  );
};
