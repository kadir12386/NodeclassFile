// const { request } = require("express");
// const express = require("express");
import express from "express";
const app = express();

const PORT = 9000;
const movies = [
  {
    id: "101",
    name: "Master",
    pic: "https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/master-et00110368-08-01-2021-07-41-32.jpg",
    des: "JD, an alcoholic professor, is enrolled to teach at a juvenile facility, unbeknownst to him. He soon clashes with a ruthless gangster, who uses the children as scapegoats for his crimes.",
    trailer: "https://www.youtube.com/embed/UTiXQcrLlv4",
    rating: "7.9",
    language: "tamil",
  },
  {
    id: "102",
    name: "Life Of Pi",
    pic: "https://m.media-amazon.com/images/M/MV5BNTg2OTY2ODg5OF5BMl5BanBnXkFtZTcwODM5MTYxOA@@._V1_.jpg",
    des: "Pi Patel finds a way to survive in a lifeboat that is adrift in the middle of nowhere. His fight against the odds is heightened by the company of a hyena and a male Bengal tiger.",
    trailer: "https://www.youtube.com/embed/3mMN693-F3U",
    rating: "7.9",
    language: "english",
  },
  {
    id: "103",
    name: "M.S. Dhoni",
    pic: "https://www.scrolldroll.com/wp-content/uploads/2021/01/ms-dhoni-bollywood-biopics.jpg",
    des: "M S Dhoni, a boy from Ranchi, aspires to play cricket for India. Though he initially tries to please his father by working for the Indian Railways, he ultimately decides to chase his dreams.",
    trailer: "https://www.youtube.com/embed/6L6XqWoS8tw",
    rating: "8",
    language: "telugu",
  },
  {
    id: "104",
    name: "WALL-E",
    pic: "https://lumiere-a.akamaihd.net/v1/images/p_walle_19753_69f7ff00.jpeg",
    des: "A robot who is responsible for cleaning a waste-covered Earth meets another robot and falls in love with her. Together, they set out on a journey that will alter the fate of mankind.",
    trailer:
      "https://play-lh.googleusercontent.com/QOwYeu-cYlmPV7nT8yETQjM4YUdVGcbGQ2xI-gxk--FlZmFTNEy8KASSdbhMM7QSTL-J",
    rating: "8.4",
    language: "english",
  },
];

app.get("/", (request, response) => {
  response.send("Hello , !!!");
});

app.get("/movies", (request, response) => {
  console.log(request.query);
  const { language } = request.query;
  response.send(movies.filter((mv) => mv.language === language));
});

//=======================filter method===================
// app.get("/movies/:id", (request, response) => {
//   console.log(request.params);
//   const { id } = request.params;
//   const movie = movies.filter((mv) => mv.id === id)[0];
//   console.log(movie);
//   response.send(movie);
// });

//=======================find method===================
// app.get("/movies/:id", (request, response) => {
//   console.log(request.params);
//   const { id } = request.params;
//   const movie = movies.find((mv) => mv.id === id);
//   console.log(movie);
//   response.send(movie);
// });

//=======================find method with error message not Found===================
app.get("/movies/:id", (request, response) => {
  console.log(request.params);
  const { id } = request.params;
  const movie = movies.find((mv) => mv.id === id);
  const notFound = { message: "No matching movies" };
  console.log(movie);
  movie ? response.send(movie) : response.status(404).send(notFound);
  response.send(movie);
});

app.listen(PORT, () => console.log("APP is started on", PORT));
