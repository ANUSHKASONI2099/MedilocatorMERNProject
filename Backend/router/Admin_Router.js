import express from "express"
import {adminLogin, allContacts , allFeedback,profile} from "../controller/Admin_Controller.js"


const adminRouter = express.Router()

adminRouter.get("/allContacts" , allContacts)

adminRouter.get("/allFeedbacks" , allFeedback)

adminRouter.get("/adminProfile" , profile)

adminRouter.post("/adminLogin" , adminLogin)




export default  adminRouter
