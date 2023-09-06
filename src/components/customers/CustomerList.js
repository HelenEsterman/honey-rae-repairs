import { useEffect, useState } from "react";
import { getNonStaffUsers } from "../../services/userService";
import { User } from "../user/User";
import "./Customers.css";
import { Link } from "react-router-dom";

export const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getNonStaffUsers().then((nonStaffUsersArray) => {
      setCustomers(nonStaffUsersArray);
    });
  }, []);

  return (
    <div className="customers">
      {customers.map((customerObj) => {
        return (
          <Link to={`/customers/${customerObj.id}`} key={customerObj.id}>
            <User user={customerObj} />
          </Link>
        );
      })}
    </div>
  );
};
