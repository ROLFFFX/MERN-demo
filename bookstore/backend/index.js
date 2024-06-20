import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();

// Middleware for parsing request body
app.use(express.json());

// allow all origins
app.use(cors());

// allow only custom origin with liimited methods and content header
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("hello");
});

app.use("/books", booksRoute);

// Mongoose connection
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App is connected");
    app.listen(PORT, () => {
      console.log("App is running now.");
    });
  })
  .catch((error) => {
    console.log(error);
  });
