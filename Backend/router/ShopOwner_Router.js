import express from "express"
import { ownerRegistration , ownerLogin , addShopDetails , profile, myDetails,editProfile, updateLocation} from "../controller/ShopOwner_Controller.js"
import { OwnerImageUpload } from "../middleware/OwnerImageUpload_Middleware.js"
import { ShopImageUpload } from "../middleware/ShopImageUpload_Middleware.js"

const shopownerRouter = express.Router()
shopownerRouter.post("/register" , OwnerImageUpload, ownerRegistration)
shopownerRouter.post("/ownerLogin" , ownerLogin)
shopownerRouter.get("/ownerProfile" , profile)
shopownerRouter.post("/addShopDetails" , ShopImageUpload,addShopDetails)
shopownerRouter.get("/myDetails" , myDetails)
shopownerRouter.put("/editProfile" , editProfile)
shopownerRouter.put("/updateLocation" , updateLocation)





export default shopownerRouter


