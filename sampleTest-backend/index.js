import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import logger from 'morgan';
import router from './server/routes/index';
import mongoose from 'mongoose';
const hostname = '127.0.0.1';
const mongoDB = 'mongodb://localhost:27017/sample-test';
const port = 4000;

mongoose.connect(mongoDB,{useNewUrlParser: true});
var db = mongoose.connection;

const app = express()// setup express application

const server = http.createServer(app);
app.use(cors());

app.use(logger('dev'));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(router);

app.get('*', (req,res)=>{
    res.status(200).send({message: `Welcome to the default api route`})
});

db.on('error', console.error.bind(console, 'MongoDB connection error:'));


server.listen(port, hostname, () => { 
	console.log(`Server running at http://${hostname}:${port}/`);
     });
     
export default app;