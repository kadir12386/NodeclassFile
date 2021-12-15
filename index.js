import dotenv from "dotenv";
import express from "express";
import { MongoClient } from "mongodb";
import { moviesRouter } from "./routes/movies.js";
import { usersRouter } from "./routes/users.js";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 9000;
// const PORT = 9000;
//Process.env
// console.log(process.env);
const MONGO_URL = process.env.MONGO_URL;

// const RECIPT_LIST = [
//   {
//     food_name: "garlic, pepper,veg pizza ",
//     food_pic:
//       "http://www.wallpapers-full-hd.com/backgrounds/garlic-pizza-pepper-vegetables.jpg",
//   },
//   {
//     food_name: "Spicy chicken biryani",
//     food_pic:
//       "https://c.ndtvimg.com/2019-06/s71ihu9_biryani_625x300_05_June_19.jpg",
//   },
//   {
//     food_name: "Masal Dosa",
//     food_pic:
//       "https://ameyy.in/wp-content/uploads/2021/07/pexels-photo-5560763-1.jpeg",
//   },
//   {
//     food_name: "Pongal with Vadai",
//     food_pic:
//       "https://thumbs.dreamstime.com/b/ven-pongal-sambar-coconut-chutney-popular-indian-breakfast-food-tamil-nadu-festival-made-rava-semolina-banana-leaf-198229429.jpg",
//   },
// ];
app.use(express.json());
app.use(cors()); //third-party middleware

async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();

  console.log("MongoDB connected");
  return client;
}

export const client = await createConnection();

app.get("/", (request, response) => {
  response.send("Hello World 🌎🌎🌎!!!");
});

app.use("/movies", moviesRouter);
// /users/signup
app.use("/users", usersRouter);

app.get("/recipes", async (request, response) => {
  const recipes = await client
    .db("b252we")
    .collection("recipe")
    .find({})
    .toArray();
  response.send(recipes);
});
app.post("/recipes", async (request, response) => {
  const data = request.body;
  const result = await client
    .db("b252we")
    .collection("recipe")
    .insertMany(data);
  response.send(result);
});

app.listen(PORT, () => console.log("APP is started on", PORT));
