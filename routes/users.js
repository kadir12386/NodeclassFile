import express from "express";
import bcryt from "bcrypt";
import { getUserByName } from "../helper.js";
import { insertUser } from "../helper.js";
const router = express.Router();

router.route("/signup").post(async (request, response) => {
  const { username, password } = request.body;
  //   console.log("data", data);
  //   response.send(data);
  const hashedPassword = await genPassword(password);
  console.log(hashedPassword);
  const isUserExist = await getUserByName(username);
  console.log(isUserExist);
  //if the username already exits then thrown an error message
  if (isUserExist) {
    response.send({ message: "user already exists" });
    return;
  }
  //checking the password length is long or short
  if (password.length < 8) {
    response.send({ message: "provide a longer password" });
    return;
  }
  if (
    !/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@!#%&]).{8,}$/g.test(password)
  ) {
    response.send({ message: "Password pattern does not match" });
    return;
  }
  const result = await insertUser({ username, password: hashedPassword });
  response.send(result);
});

export const usersRouter = router;
async function genPassword(password) {
  const NO_OF_ROUNDS = 10;
  const salt = await bcryt.genSalt(NO_OF_ROUNDS); //no.of.rote
  const hashedPassword = await bcryt.hash(password, salt);
  return hashedPassword;
}
