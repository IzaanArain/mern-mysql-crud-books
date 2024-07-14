const db = require("../config/db");

exports.getBooks = (req, res) => {
  let sql = `SELECT * FROM books;`;
  db.query(sql, (err, result, fields) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(result);
  });
};

exports.addBooks = (req, res) => {
  const { title, description, cover } = req.body;
  let sql = `
  INSERT INTO books(title, description, cover)
  VALUES (?,?,?);
  `;
  let values = [title, description, cover];
  db.query(sql, values, (err, result, fields) => {
    if (err) return res.status(400).json(err);
    return res.status(200).json({ msg: "Book created successfully", result });
  });
};
