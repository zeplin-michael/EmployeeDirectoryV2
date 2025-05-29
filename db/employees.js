const employees = [
  { id: 1, name: "Carolynn McGinlay" },
  { id: 2, name: "Lodovico Filon" },
  { id: 3, name: "Jefferey Wahlberg" },
  { id: 4, name: "Kayley Tures" },
  { id: 5, name: "Rickard Carver" },
  { id: 6, name: "Michael Stryde" },
  { id: 7, name: "Averell Santino" },
  { id: 8, name: "Constantina Connue" },
  { id: 9, name: "Verile Bondesen" },
  { id: 10, name: "Gwen Grollmann" },
];

export default employees;

export function getEmployees() {
  return employees;
}

export function getEmployeeById(id) {
  const result = employees.find((employee) => employee.id == id);
  return result;
}

export function addEmployee(name) {
  const newEmployee = { id: employees[employees.length - 1].id + 1, name };
  employees.push(newEmployee);
  return newEmployee;
}

export function randomEmployee() {
  const randomIndex = Math.floor(Math.random() * employees.length);
  return employees[randomIndex];
}
