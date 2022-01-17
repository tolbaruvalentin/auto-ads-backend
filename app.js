import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';


const app = express();

dotenv.config();

connectDB();
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());









export default app;