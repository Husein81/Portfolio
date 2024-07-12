import express from "express";
import dotenv from "dotenv";
import connectDB from "./data/connection.js";
import projectRouter from "./routes/project.js";
import skillRouter from "./routes/skill.js";
import experienceRouter from "./routes/experience.js";
import cors from "cors";
import cookieParser from "cookie-parser";


dotenv.config();

const app = express();

app.use(cors());  
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/projects',projectRouter);
app.use('/api/skills',skillRouter);
app.use('/api/experiences',experienceRouter);


const port = process.env.PORT || 4000;

connectDB();
app.listen(port, () => console.log(`Server is listening on port ${port} `));