const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");
// matches GET requests sent to /api/users
// (the prefix from server.js)
router.get("/:uid", (req, res) => {
  Controllers.postController.getUserPosts(req, res);
});
// matches POST requests sent to /api/users/create
router.post("/create", (req, res) => {
  Controllers.postController.createPosts(req.body, res);
});
module.exports = router;