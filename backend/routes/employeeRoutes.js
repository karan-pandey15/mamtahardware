import express from "express";
import db from "../database/db.js";
const router = express.Router();
import {
  registerEmployee,
  loginEmployee,
  logoutEmployee,
  verifyUser,
  getUserData,
  Carpenterdata,
} from "../controllers/employeeControllers.js";



router.post("/emp_register", registerEmployee);
router.post("/emp_login", loginEmployee);
router.get("/emp_logout", logoutEmployee);
router.get("/get_user_data",verifyUser,getUserData)
router.get("/get_carpenter",Carpenterdata)





router.post('/submit-carpenter-data', (req, res) => {
  
  const { name, address, mobile, skills, description } = req.body;
  if (
    !req.body.name ||
    !req.body.address ||
    !req.body.mobile ||
    !req.body.skills ||
    !req.body.description
  ) {
    return res.json({
      Error: "All fields are required. Please fill in all the fields.",
    });
  }
  const sql = 'INSERT INTO carpenterRegister (name, address, mobile, skills, description) VALUES (?, ?, ?, ?, ?)';
  
  db.query(sql, [name, address, mobile, skills, description], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ success: false });
    } else {
      res.status(200).json({ success: true });
    }
  });
});


export default router;
