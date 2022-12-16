import Books from "../models/BookModel.js";

export const borrowedBookList = async (req, res) => {
  try {
    const borrowedList = await Books.find();
    res.json(borrowedList);
  } catch (error) {
    const status = res.status(404).json({ message: error.message });
    console.log(status);
  }
};

export const saveBook = async (req, res) => {
  const book = new Books(req.body);
  try {
    const newBook = await book.save();
    res.status(201).json(newBook);
  } catch (error) {
    const status = res.status(400).json({ message: error.message });
    console.log(status);
  }
};

export const deleteBook = async (req, res) => {
  try {
    const discardBook = await Books.deleteOne({ _id: req.params.id });
    res.status(200).json(discardBook);
  } catch (error) {
    const status = res.status(400).json({ message: error.message });
    console.log(status);
  }
};
