const express =require('express')
const app=express()
const cors=require('cors')
const connectDB=require('./connectDB/connectDB')
require('dotenv').config()

const port=process.env.PORT ||4000;

app.use(cors())
app.use(express.json())


const start=async ()=>{
    await connectDB(process.env.MONGO_URI)
    app.listen(port,()=>{
        console.log(`server is listening on port ${port}`);
    })
}
start()