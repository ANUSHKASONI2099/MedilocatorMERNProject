import express from "express"
import {addfeedback  , registration , userLogin , profile, viewShops,editProfile,searchShops} from "../controller/User_Controller.js"
import { imageUpload } from "../middleware/ImageUpload_Middleware.js"

const userRouter = express.Router()
userRouter.post("/addfeedback" , addfeedback)
userRouter.post("/register" , imageUpload, registration)  // adding middleware of name : imageUpload for image upload 
userRouter.post("/userLogin" , userLogin)
userRouter.get("/userProfile" , profile)
userRouter.get("/viewShops" , viewShops)
userRouter.put("/editProfile" , editProfile)
userRouter.get("/searchShops" , searchShops)







export default userRouter


