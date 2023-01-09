const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserRouter = require("./routes/UserRoutes.js");
const BookRouter = require("./routes/BookRoutes.js");

const app = express();

mongoose.connect(
  "mongodb+srv://afdy:afdy59@cluster1.bimcsod.mongodb.net/book-a-book?retryWrites=true&w=majority"
);
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to database..."));

app.use(cors());
app.use(express.json());
app.use(UserRouter);
app.use(BookRouter);

app.get("/", function (req, res) {
  res.send("book a book!!!!!!!!!!!!!!");
});

app.listen(5000, () => console.log("Database is running..."));
