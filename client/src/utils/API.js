import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getUser: function(email, password) {
    return axios.post("/auth/login", { email, password } );
  }
};
