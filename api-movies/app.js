import express from "express";
import mongoose from "mongoose";
import Movie from "./models/Movies.js";
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/api-themovies");

app.get("/", async(req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json({ movies : movies});
  } catch(error) {
    console.log (error);
    res.status(500).json({error: "Internal error in server"})
  }
});
const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`API rodando em http:localhost:${port}`);
});
