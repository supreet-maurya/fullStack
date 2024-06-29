
import express from 'express';
import Connection  from './database/db.js';
import dotenv from 'dotenv';
import DefaultData from './default.js';
import Router from './routes/routes.js';
import cors from 'cors';
import bodyParser from 'body-parser';
  
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended:true}));
app.use('/' , Router )


const PORT = 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
console.log(USERNAME , PASSWORD);
Connection(USERNAME, PASSWORD);

app.listen(PORT , () => console.log(`server is running on port ${PORT}`))

DefaultData();

// export default app;