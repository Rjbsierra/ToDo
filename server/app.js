import express, { json } from 'express';
import 'dotenv/config';
import { connectDB } from './db.js';
import routes from './routes/routes.js'
import cors from 'cors'

const app = express();
app.use(express.json())

app.use(cors({
    origin:'http://localhost:3000',
    methods: ['GET', 'POST', 'DELETE','PATCH' , 'OPTIONS'],
    allowedHeaders: ['Content-Type']
}))
app.use(routes)


const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URI)

        app.listen(process.env.PORT, ()=>{
            console.log(`Server is now running on port ${process.env.PORT}`)
        })
    }catch(e){
        console.log(err)
    }
}


start();