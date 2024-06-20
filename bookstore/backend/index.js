import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";

const app = express();

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("hello");
});



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
