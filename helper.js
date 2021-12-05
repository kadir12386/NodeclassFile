import { client } from "./index.js";
import { ObjectId } from "mongodb";
export async function getMovie(filter) {
  return await client.db("b252we").collection("movies").find(filter).toArray();
}
export async function updateMovieById(id, data) {
  return await client
    .db("b252we")
    .collection("movies")
    .updateOne({ _id: ObjectId(id) }, { $set: data });
}
export async function insertMovie(data) {
  return await client.db("b252we").collection("movies").insertMany(data);
}
export async function insertUser(data) {
  return await client.db("b252we").collection("users").insertOne(data);
}
export async function deleteMovieById(id) {
  return await client
    .db("b252we")
    .collection("movies")
    .deleteOne({ _id: ObjectId(id) });
}
// export async function getMovieById(id) {
//   return await client.db("b252we").collection("movies").findOne({ id: id });
// }
export async function getMovieById(id) {
  return await client
    .db("b252we")
    .collection("movies")
    .findOne({ _id: ObjectId(id) });
}
export async function getUserByName(id) {
  return await client
    .db("b252we")
    .collection("users")
    .findOne({ username: id });
}
