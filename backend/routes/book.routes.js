const express = require("express");
const router = express.Router();
const { getBooks, addBooks } = require("../controller/book.controller");

router.get("/", getBooks);
router.post("/", addBooks);

module.exports = router;
