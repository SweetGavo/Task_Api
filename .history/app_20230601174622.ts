import express, { Express, Request, Response } from 'express'
import { router } from './src /routes/task';
import * as dotenv from "dotenv";
import http from 'http';
import mongoose from 'mongoose'
import {not}
import { errorHandlerMiddleware } from './src/middleware/error-handler';
// import {db} from './src/db/connect'
const tasks = router

const connected = 'CONNECTED TO MONGODB...'
const app = express();
const db = 'mongodb+srv://gavin:allieantisnode@cluster1.pxqwsfi.mongodb.net/'
mongoose.connect(db,{retryWrites:true ,w:'majority'}).then(()=>{console.log(connected)
}).catch((err)=>{console.log(err);
})

dotenv.config();
app.use(express.static('./src/public'));
app.use(express.json());



app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);


const port = process.env.PORT;


app.listen(port, () => console.log(`Server is Listening on port : ${port}`));


