import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import PengunjungRoute from "./routes/PengunjungRoute.js";
import DaftarbukuRoute from "./routes/DaftarbukuRoute.js";
import PinjambukuRoute from "./routes/PinjambukuRoute.js";
import path from "path";
import { fileURLToPath } from 'url';

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
app.use(express.urlencoded({ extended : false}));
app.use(PengunjungRoute);
app.use(DaftarbukuRoute);
app.use(PinjambukuRoute);

const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, './frontend/build')));

app.get("*", function (_, res) {
    res.sendFile(
        path.join(__dirname,'./frontend/build/index.html'),
        function (erorr) {
            if (erorr) {
                res.status(500).send(erorr);
            }
        }
    );
});

const port = process.env.PORT || 5000;
app.listen ( port, ()=> console.log('server up and running...'));
