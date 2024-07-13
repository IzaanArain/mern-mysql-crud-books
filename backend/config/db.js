const mysql = require("mysql2");
// require("dotenv").config({ path: "../.env" });

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
});

// let sql = `
// SELECT * FROM books;
// `;
// db.query(sql,(err,result,fields)=>{
//     if(err) console.error("Error: ",err.message);
//     console.log(result,fields);
// });
//// **** After wrapping connction in promise by .Promise() **** 
// const getBooks = async () => {
//   try {
//     let sql = `
//     SELECT * FROM books
//     WHERE id = ?;
//     `;
//     values = [1]
//     const [result, fields] = await db.query(sql,values);
//     console.log("result", result);
//     console.log("fields", fields);
//   } catch (err) {
//     console.error(err);
//   }
// };
// getBooks();

module.exports = db;
