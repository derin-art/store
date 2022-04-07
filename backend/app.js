const express = require("express")
const connect = require("./database/connect.js")
const app = express()
const router = require("./routers/router.js")
const {basicError, notFoundError} = require("./errors/BasicErrors.js")
require("express-async-errors")


require("dotenv").config()



app.use(express.json())

app.use("/", router)


app.use(notFoundError)
app.use(basicError)


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