import db from "../database/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const salt = 10;

export const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({
      Error: "You are not authenticated",
    });
  } else {
    jwt.verify(token, "jwt-secret-key", (err, decoded) => {
      if (err) {
        return res.json({
          Error: "Token is not Okay",
        });
      } else {
        req.name = decoded.name;
        next();
      }
    });
  }
};

export const getUserData = (req, res) => {
  return res.json({
    Status: "Success",
    name: req.name,
  });
};

export const registerEmployee = (req, res) => {
  // Check if any of the required fields is empty
  if (
    !req.body.name ||
    !req.body.email ||
    !req.body.phone ||
    !req.body.password
  ) {
    return res.json({
      Error: "All fields are required. Please fill in all the fields.",
    });
  }

  // Check if the password is at least 6 characters or digits
  if (req.body.password.length < 6 || !/^\d+$/.test(req.body.password)) {
    return res.json({
      Error: "Password must be at least 6 characters or digits.",
    });
  }

  const sqlCheckExisting =
    "SELECT COUNT(*) AS count FROM employee WHERE email = ? OR phone = ?";
  const checkValues = [req.body.email, req.body.phone];

  // Check if email or phone already exist
  db.query(sqlCheckExisting, checkValues, (err, result) => {
    if (err) {
      return res.json({
        Error: "Error while checking for existing user",
      });
    }

    if (result[0].count > 0) {
      return res.json({
        Error:
          "User already exists. Please use a different email or phone number.",
      });
    }

    // If email and phone are unique and password is valid, proceed with registration
    const sql =
      "INSERT INTO employee (`name`, `email`, `phone`, `password`) VALUES (?)";
    bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
      if (err) {
        return res.json({
          Error: "Error for hashing Password",
        });
      }
      const values = [req.body.name, req.body.email, req.body.phone, hash];
      db.query(sql, [values], (err, result) => {
        if (err) {
          return res.json({
            Error: "Inserting data Error in Server",
          });
        }
        return res.json({
          Status: "Success",
        });
      });
    });
  });
};

export const loginEmployee = (req, res) => {
  const sql = "SELECT * FROM employee WHERE email = ?";
  db.query(sql, [req.body.email], (err, data) => {
    if (err) {
      console.log("Database query Error" + err);
      return res.json({ Erorr: "Login error in Server" });
    }
    if (data.length > 1) {
      bcrypt.compare(
        req.body.password.toString(),
        data[0].password,
        (err, response) => {
          if (err)
            return res.json({
              Error: "Password Compare Error..",
            });
          if (response) {
            const name = data[0].name;
            try {
              const token = jwt.sign({ name }, "jwt-secret-key", {
                expiresIn: "1d",
              });
              console.log("Generated Token:", token);
              res.cookie("token", token);
            } catch (error) {
              console.error("JWT Token Generation Error:", error);
              return res.json({
                Error: "JWT Token Generation Error",
              });
            }

            // res.cookie("token", token);
            return res.json({ Status: "Success" });
          } else {
            return res.json({ Error: "Password not Matched" });
          }
        }
      );
    } else {
      return res.json({ Error: "No Such Email Existed" });
    }
  });
};

export const logoutEmployee = (req, res) => {
  // Clear the cookie
  res.clearCookie("token");
  res.json({ Status: "Success" });
};



// ********** Fetch Carpenter data with this API *************
export const Carpenterdata = (req, res) => {
  db.query("SELECT * FROM carpenterregister", (err, rows) => {
    if (err) {
      console.error("Error fetching data:", err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      console.log("Customer data retrieved");
      res.status(200).json(rows);
    }
  });
};

