const path = require("path");
const router = require("express").Router();
const gameRoutes = require("./games");


// Game Routes => ex: localhose:3000/api/games
router.use("/games", gameRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
