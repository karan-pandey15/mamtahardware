import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import routes from "./routes/router.js";
import csv_route from "./routes/Uploadcsv.js";
// import { config } from "dotenv";
import session from "express-session";
// import router from "./routes/employeeRoutes.js";

const SESSION_SECRET = "SECRET_HERE";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// config();
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
  })
);

app.use(cookieParser());

// Set up your routes
app.use("/api", routes);
app.use("/api", csv_route)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
