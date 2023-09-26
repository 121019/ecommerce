const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

const espaceControllers = require("./controllers/espaceControllers");

const usersControllers = require("./controllers/usersControllers");


//ROUTES ITEMS
router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);


//Routes USERS 
router.get("/users", usersControllers.browse);
router.get("/users/:id",  usersControllers.read);
router.put("/users/:id", usersControllers.edit);
router.post("/users", usersControllers.add);

router.delete("/users/:id",usersControllers.destroy);

router.get("/inscription", (req, res) => {
    res.send("Page d'inscription");
});

//route pour Espace.jsx
//router.post("/Espace", espaceControllers.someAction);

//router.get("/logout", logout);


module.exports = router;