import express, { urlencoded } from 'express';
import cors from 'cors'
const app=express();
import Route from './routes/route.js';

//component import 
import Connection from './connection/db.js'
Connection();
import DefaultData from './default.js'
DefaultData()

app.use(cors())
app.use('/',Route)
app.use(urlencoded({extended:true}))





const PORT=Number(5000);
app.listen(PORT,()=>{
    console.log("serve is running on port " + PORT)
})