import axios from "axios";

export default {
    // Gets games from the IGDB API
    getGames: function() {
      return axios.get("/api/games",);
    },
    // fetchPhotos: function (q) {
    //   return axios.get("/api/games/photos")
    // }
};