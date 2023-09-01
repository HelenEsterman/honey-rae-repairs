import { useEffect, useState } from "react";
import { getNonStaffUsers } from "../../services/userService";
import { User } from "../../user/User";
import "./Customers.css";

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
        return <User user={customerObj} />;
      })}
    </div>
  );
};
