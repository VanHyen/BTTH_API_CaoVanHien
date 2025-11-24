import { employeeRepo } from "../repositories/employee.js";

export const getEmployees = async (req, res) => {
  try {
    const rows = await employeeRepo.getEmployees();
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getEmployeeById = async (req, res) => {
  try {
    const row = await employeeRepo.getEmployeeById(req.params.id);
    res.json(row);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
