import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import PengunjungRoute from "./routes/PengunjungRoute.js";
import DaftarbukuRoute from "./routes/DaftarbukuRoute.js";
import PinjambukuRoute from "./routes/PinjambukuRoute.js";
import path from "path";

const app = express();
mongoose.connect('mongodb+srv://tasya:tasya@perpustakaan.ull9f.mongodb.net/perpustakaan?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology:true
});

const db = mongoose.connection;
db.on('error', (erorr) => console.log(erorr));
db.once('open', () => console.log('Database Connected.....'));

app.use(cors());
app.use(express.json());
app.use(PengunjungRoute);
app.use(DaftarbukuRoute);
app.use(PinjambukuRoute);

if (process.env.NODE_ENV=='production'){
    const path = require('path')
    
    app.get('/',(req,res)=>{
    app.use(express.static(path.resolve(__dirname,'frontend',build')))
    res.sendFile(path.resolve(__dirname,'frontend',build','index.html'))
    })
}

const port = process.env.PORT || 5000;
app.listen ( port, ()=> console.log('server up and running...'));
