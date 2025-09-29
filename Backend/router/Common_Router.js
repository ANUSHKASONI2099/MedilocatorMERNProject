import express from "express"
import {viewNews , addAddress, addContact } from "../controller/Common_Controller.js"

const commonRouter = express.Router()
commonRouter.get("/viewnews" , viewNews)
commonRouter.get("/addaddress" , addAddress)
commonRouter.post("/addcontact" , addContact)


export default commonRouter