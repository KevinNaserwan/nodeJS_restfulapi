import express from 'express';

//buat setup web servicenya
export const web = express();
web.use(express.json());