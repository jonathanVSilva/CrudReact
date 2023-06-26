import mysql from "mysql"

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "arroz!@#",
  database: "crud",
})

db.connect((error) => {
  if(error) throw error;
  console.log("conneted")
})



