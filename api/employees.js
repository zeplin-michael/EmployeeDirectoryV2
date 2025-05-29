import express from "express";
const employeesRouter = express.Router();
import {
  getEmployees,
  getEmployeeById,
  addEmployee,
  randomEmployee,
} from "#db/employees";

// GET - employees
employeesRouter.get("/", (req, res, next) => {
  const employees = getEmployees();
  res.status(200).send(employees);
});

// GET - random id
employeesRouter.get("/random", (req, res) => {
  const employee = randomEmployee();
  res.send(employee);
});

// GET - employee id
employeesRouter.get("/:id", (req, res, next) => {
  const result = getEmployeeById(Number(req.params.id));
  if (!result) {
    res.status(404).send("not found");
  }
  console.log(result);
  res.json(result);
});

// POST - new employee
employeesRouter.post("/", (req, res, next) => {
  if (!req.body) {
    res.status(400).send("Request must have a body.");
  } else if (!req.body.name) {
    res.status(400).send("New employee must have name.");
  } else {
    const newEmployee = addEmployee(req.body.name);
    res.status(201).send(newEmployee);
  }
});

export default employeesRouter;
