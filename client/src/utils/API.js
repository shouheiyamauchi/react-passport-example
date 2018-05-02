import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  login: userData => 
     axios.post("/auth/login",  userData),
  signUp: userData => 
  	 axios.post('/auth/signup', userData),
  dashboard: token =>
     axios.get('/api/dashboard', {headers: {Authorization: `bearer ${token}`}})
};
