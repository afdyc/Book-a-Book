import express from "express";
import {
  saveBook,
  borrowedBookList,
  deleteBook,
} from "../controller/BookController.js";

const router = express.Router();

router.get("/borrowedbooklist", borrowedBookList);
router.post("/booksborrowed", saveBook);
router.delete("/deletebook/:id", deleteBook);

export default router;
