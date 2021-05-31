import cors from 'cors';
import express from 'express';

export const setHeaders = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,PATCH,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.end();
  } else {
    next();
  }
};


const middlewares = (app) => {
  app.use(setHeaders);
  app.use(cors());
  app.use(express.json());
};

export default middlewares;
