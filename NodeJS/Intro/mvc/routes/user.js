const express = require("express");
const {createUser} = require("../controllers/user");
const router = express.Router();

// router.get("/", );
// router.get("/:id", );
router.post("/", createUser);
// router.put("/:id", );
// router.delete("/:id", );

module.exports = router;