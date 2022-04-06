import axios from "axios";
const BASEURL = provide backend baseurl
const TOKEN =provide token here

console.log(
  JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
    .accessToken
);
export const publicRequest = axios.create({
  baseURL: BASEURL,
});

export const userRequest = axios.create({
  baseURL: BASEURL,
  headers: { token: `Bearer ${TOKEN}` },
});
