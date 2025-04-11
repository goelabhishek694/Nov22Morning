const userRouter = require("express").Router();
// const User = require("../models/userModel");
const {registerUser, loginUser} = require("../controller/user")
//register a user
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

module.exports = userRouter;