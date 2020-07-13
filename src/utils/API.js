import axios from "axios";

// Export an object containing methods we'll use for accessing the Wikipedia API

export default {
  searchTerms: function(query) {
    return axios.get(

      "https://randomuser.me/api/?results=200&nat=us=" +
        query +
        "&limit=1&format=json&origin=*"
    );
  }
};
