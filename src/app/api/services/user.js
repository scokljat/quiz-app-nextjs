"use client";
import axios from "../http";

export const register = (user) => {
  const url = "api/users/register";
  return axios.post(url, user);
};

export const login = (user) => {
  const url = "api/users/login";
  return axios.post(url, user);
};

export const editUser = (user) => {
  const url = "api/users";
  return axios.put(url, user);
};

export const getUsers = () => {
  const url = "api/users";
  return axios.get(url);
};

export const getUserById = (id) => {
  const url = `api/users/${id}`;
  return axios.get(url);
};
