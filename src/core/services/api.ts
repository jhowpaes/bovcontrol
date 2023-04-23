import axios from "axios";

export const client = axios.create({
  baseURL: "http://challenge-front-end.bovcontrol.com/",
})