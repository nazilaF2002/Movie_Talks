import dotenv from 'dotenv';
dotenv.config();
import dbConnect from './db.js';
import APP from "./app.js";
const PORT = process.env.PORT || 8000;

dbConnect();


APP.listen(()=>{
    console.log(`App is running on port ${PORT}`);
})