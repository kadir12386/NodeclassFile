import express from "express";
import {
  getMovie,
  getMovieById,
  deleteMovieById,
  insertMovie,
  updateMovieById,
} from "../helper.js";
import { auth } from "./middleware/auth.js";

const router = express.Router();

router
  .route("/")
  .get(auth, async (request, response) => {
    // .get(async (request, response) => {
    console.log("Query", request.query);
    const filter = request.query;
    const filterMovies = await getMovie(filter);
    console.log(filter);
    response.send(filterMovies);
  })
  //=======================post method===================
  .post(auth, async (request, response) => {
    // .post(async (request, response) => {
    const data = request.body;
    console.log("data", data);
    const result = await insertMovie(data);
    response.send(result);
  });

//=======================filter method===================
router
  .route("/:id")
  .get(auth, async (request, response) => {
    // .get(async (request, response) => {
    console.log(request.params);
    const { id } = request.params;
    const movie = await getMovieById(id);
    const notFound = { message: "No matching movies" };
    console.log(movie);
    movie ? response.send(movie) : response.status(404).send(notFound);
  })
  //=======================Delete method===================
  .delete(auth, async (request, response) => {
    // .delete(async (request, response) => {
    console.log(request.params);
    const { id } = request.params;
    const movie = await deleteMovieById(id);
    const notFound = { message: "No matching movies" };
    console.log(movie);
    movie ? response.send(movie) : response.status(404).send(notFound);
  })
  //=======================updated method =================== //similary to post
  .put(auth, async (request, response) => {
    // .put(async (request, response) => {
    const { id } = request.params;
    const data = request.body;
    console.log("data", data);
    const result = await updateMovieById(id, data);
    response.send(result);
  });

export const moviesRouter = router;
