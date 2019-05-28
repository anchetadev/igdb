const router = require("express").Router();
const gameController = require("../../controllers/igdbAPI");

// Matches with "/api/games"
router
  .route("/")
  .get(gameController.getGames);

  // router
  // .route("/photos")
  // .get(gameController.getPhotos);

module.exports = router;
