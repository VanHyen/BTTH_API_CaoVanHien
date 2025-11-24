import express from "express";
import { getUsers } from "../controllers/userController.js";
import { getEmployees } from "../controllers/employeeController.js";

const router = express.Router();  // ← phải đứng trước khi dùng

// Welcome route
router.get("/", (req, res) => {
  res.json({ message: "Welcome to API route" });
});

// -----------------------users---------------------------
router.get("/users", getUsers);
// router.get("/users/:id", getUserById);  // nếu có

// -----------------------employee---------------------------
router.get("/employee", getEmployees);
// router.get("/employee/:id", getEmployeeById);  // nếu có

export default router;
