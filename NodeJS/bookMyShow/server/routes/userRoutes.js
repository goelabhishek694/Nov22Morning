const userRouter = require("express").Router();
// const User = require("../models/userModel");
const {registerUser, loginUser, currentUser} = require("../controller/user");
const authMiddleware = require("../middleware/authMIddleware");
//register a user
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/get-current-user", authMiddleware, currentUser);

module.exports = userRouter;