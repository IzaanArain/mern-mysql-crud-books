const db = require("../config/db");

exports.getBooks = (req, res) => {
  let sql = `SELECT * FROM books;`;
  db.query(sql, (err, result, fields) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(result);
  });
};

