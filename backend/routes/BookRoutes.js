const saveBook = require("../controller/BookController.js").saveBook;
const borrowedBookList =
  require("../controller/BookController.js").borrowedBookList;
const deleteBook = require("../controller/BookController.js").deleteBook;
const express = require("express");

const router = express.Router();

router.get("/borrowedbooklist", borrowedBookList);
router.post("/booksborrowed", saveBook);
router.delete("/deletebook/:id", deleteBook);

module.exports = router;
