const express = require("express")
const connect = require("./database/connect.js")
const app = express()
const router = require("./routers/router.js")


require("dotenv").config()



app.use(express.json())

app.use("/", router)

const start = async()=>{
    try{
        await connect(process.env.URL)
        app.listen(1000,()=>{
            console.log("server is up")
        })
    }
    catch(err){
        console.log(err)
    }
}

start()