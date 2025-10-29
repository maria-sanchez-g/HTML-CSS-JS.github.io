"use strict";
const Models = require("../models");
const getUserPosts = (req, res) => {
  // finds all posts for a given user and includes matching user details
  Models.Post.findAll({
    where: { userId: req.params.uid },
    include: {
      model: Models.User,
      as: "user",
    },
  })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
const createPosts = (data, res) => {
  // finds all posts for a given user and includes matching user details
  Models.Post.create(data)
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
module.exports = {
  getUserPosts,
  createPosts,
};