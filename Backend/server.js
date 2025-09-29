// console.log("hi Anushka");

import cors from "cors"

import express from "express"
import commonRouter from "./router/Common_Router.js"
import { dbConnect } from "./database/dbInfo.js"
import userRouter from "./router/User_Router.js"
import adminRouter from "./router/Admin_Router.js"
import shopownerRouter from "./router/ShopOwner_Router.js"



const serverApp = express()

const PORTNUMBER = 4000

dbConnect()

serverApp.use(cors())
serverApp.use(express.json())
serverApp.use(express.static("public")) // to tell the server that all docs
serverApp.use("/" , commonRouter)
serverApp.use("/user" , userRouter)
serverApp.use("/admin" , adminRouter) 
serverApp.use("/owner" , shopownerRouter)





serverApp.listen(PORTNUMBER , ()=>{
    console.log(`Server is listening on http://localhost:${PORTNUMBER}`);
    
})


