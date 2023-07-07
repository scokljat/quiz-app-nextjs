"use client";
import axios from "../http";

export const getQuestions = (startIndex, endIndex) => {
  const url = `api/questions?start=${startIndex}&end=${endIndex}`;
  return axios.get(url);
};

export const getQuestionById = (id) => {
  const url = `api/questions/${id}`;
  return axios.get(url);
};

export const getAnswers = (id) => {
  const url = `api/answers/${id}`;
  return axios.get(url);
};
