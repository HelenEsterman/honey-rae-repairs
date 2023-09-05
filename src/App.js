import "./App.css";
import { CustomerList } from "./components/customers/CustomerList";
import { EmployeeList } from "./components/employees/EmployeeList";
import { NavBar } from "./components/nav/NavBar";
import { TicketList } from "./components/tickets/TicketList";
import { Outlet, Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route path="tickets" element={<TicketList />} />
        <Route path="customers" element={<CustomerList />} />
      </Route>
    </Routes>
  );
};
