import axios from "axios";

const instance = axios.create({
  baseURL: "https://intereactlive.herokuapp.com/",
});

// https://classroomsrvr.herokuapp.com/
//https://intereactlive.herokuapp.com/
export default instance;
