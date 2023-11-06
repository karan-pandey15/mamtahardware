import mysql from "mysql";

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "mamtahardware",
});

// db.connect((err)=>{
//   if(err){
//     console.log("error");
//   }
//   else{
//     console.log("Database connected");
//   }
// })


export default db;
