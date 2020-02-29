import axios from "axios";

export default {
    getLunches: function() {
        return axios.get("/api/lunches");
    },

    saveLunch: function(lunch) {
        return axios.post("/api/lunches", lunch);
    }
};