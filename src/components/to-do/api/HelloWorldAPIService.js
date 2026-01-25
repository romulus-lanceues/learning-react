import axios from "axios";

//Simplfying base URL

const BASE_URL = axios.create({
  baseURL: "http://localhost:8080",
});

export const retrieveHelloWorld = () => BASE_URL.get("/hello-world");

export function retrieveHelloWorldBean() {
  return BASE_URL.get("/hello-world-bean");
}

export const retrieveHelloWorldPathVariable = (name) =>
  BASE_URL.get(`/hello-world/path-variable/${name}`);
