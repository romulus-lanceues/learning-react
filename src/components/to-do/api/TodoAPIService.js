import axios from "axios";

const BASE_URL = axios.create({
  baseURL: "http://localhost:8080",
});

export const retrieveTodoForUser = (username) =>
  BASE_URL.get(`/user/${username}/todos`);

const deleteTodoForUser = (username, id) =>
  BASE_URL.delete(`/user/${username}/todos/${id}`);

const retrieveTodoForUserById = (username, id) =>
  BASE_URL.get(`/user/${username}/todos/${id}`);

export { deleteTodoForUser, retrieveTodoForUserById };
