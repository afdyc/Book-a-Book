const express = require("express");
const Users = require("../models/UserModel.js");
const getUser = require("../controller/UserController.js").getUser;
const getUserById = require("../controller/UserController.js").getUserById;
const saveUser = require("../controller/UserController.js").saveUser;
const deleteUser = require("../controller/UserController.js").deleteUser;

const router = express.Router();

router.get("/users", getUser);
router.get("/users/:id", getUserById);
router.post("/users", saveUser);
router.delete("/users/:id", deleteUser);

router.post("/login", function (req, res) {
  let usernm = req.body.username;
  let passwd = req.body.password;

  Users.findOne({ username: usernm }, function (err, user) {
    if (err) {
      res.redirect("/");
      console.log(err);
      return res.status(500).send();
    }

    if (!user) {
      // console.log("User not exist");
      return res.status(404).send();
    }

    if (user) {
      if (user.password === passwd) {
        console.log("logged in");
        return res.json(user._id);
      } else if (user.password !== passwd) {
        // console.log("Password is incorrect");
        return res.status(404).send();
      }
    }
  });
});

module.exports = router;
