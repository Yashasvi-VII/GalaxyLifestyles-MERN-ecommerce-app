import axios from "axios";
const BASEURL = provide backend base url
const TOKEN =provide token here
export const publicRequest = axios.create({
  baseURL: BASEURL,
});

export const userRequest = axios.create({
  baseURL: BASEURL,
  header: { token: `Bearer ${TOKEN}` },
});
