const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

const usersControllers = require("./controllers/usersControllers");

//ROUTES ITEMS
router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

//Routes USERS
router.post("/users", usersControllers.add);
router.get("/users", usersControllers.browse);
router.get("/users/:id", usersControllers.read);
router.put("/users/:id", usersControllers.edit);
router.delete("/users/:id", usersControllers.destroy);

router.post("/login", usersControllers.login);
//router.get("/logout", logout);

module.exports = router;
