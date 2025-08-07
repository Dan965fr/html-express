import express from 'express';
import {config} from 'dotenv';
config();
import { connect } from './db/connect.js';


const app = express();
const PORT = 3000;


await connect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use(express.static('./public'));





app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
});