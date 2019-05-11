const express = require("express");
const axios = require("axios")
const keys = require("./keys")

const mongoose = require("mongoose");
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const gamectrl = require('./controllers/igdbAPI')

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// // Add routes, both API and view
// // app.use(routes);
// app.get("/games", function(req,res){
//     console.log("see the games")
    axios({
        url: "https://api-v3.igdb.com/games",
        method: "POST",
        headers: {
          Accept: "application/json",
          "user-key": keys.igdbKey
        },
        data:
          "fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,collection,cover,created_at,dlcs,expansions,external_games,first_release_date,follows,franchise,franchises,game_engines,game_modes,genres,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,popularity,pulse_count,rating,rating_count,release_dates,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,time_to_beat,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;"
      })
        .then(response => {
          console.log(response.data)
  
        })
        .catch(err => {
          console.error(err);
        });
    // gamectrl.getGames
    // res.send('hello')
// })

// // Connect to the Mongo DB
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/gamedb",
//   {
//     useCreateIndex: true,
//     useNewUrlParser: true
//   }
// );




// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
