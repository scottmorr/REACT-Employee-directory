import axios from "axios";
const APIURL = "https://randomuser.me/api/?results=200&nat=us=";
// Export an object containing methods we'll use for accessing the Wikipedia API


export default {
    searchRandomUsers: function() {
        return axios.get(APIURL);
    }
}



