import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRouter from "./routes/UserRoutes.js";

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

app.listen(5000, () => console.log("Database is running..."));
