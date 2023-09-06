export const getAllEmployees = () => {
  return fetch("http://localhost:8088/employees?_expand=user").then((res) =>
    res.json()
  );
};

// this is only used when trying to fine assigned employee through the employee ID
export const getEmployeeById = (employeeId) => {
  return fetch(
    `http://localhost:8088/employees/${employeeId}?_expand=user`
  ).then((res) => res.json());
};

export const getAllEmployeesInfo = () => {
  return fetch("http://localhost:8088/users?isStaff=true").then((res) =>
    res.json()
  );
};
