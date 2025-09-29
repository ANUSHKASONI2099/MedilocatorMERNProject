
import UserModel from "../model/User_Model.js";

import ShopDetailModel from "../model/ShopDetailModel.js";

import mongoose from "mongoose";

export async function searchShops(request , response) {
  try{

    const shopDoc = await ShopDetailModel.find()
    if(shopDoc == null){
      response.json({"message":"shop not found"})
    }else{
      response.json({"message":"shop found" , "shop":shopDoc})
    }

  }
  catch(err)
 {
  console.log(err);
  
 } 
}













export async function viewShops(request , response){

  try{

    const detailDoc = await ShopDetailModel.find().populate('owner','name  phone  city' ).exec()
    response.send({"objectData":detailDoc})



  }catch(err){
    console.log(err);
    
  }

}








// export async function addfeedback(request , response) {
// const feedbackObject = request.body
// const{name , email , rating , remark} = feedbackObject
// try{
// const feedbackDoc = new FeedbackModel({name ,email , rating , remark})
// await feedbackDoc.save()
// console.log("Feedback added");
// response.json({"message" : "Thank You for Feedback"})
// }catch(err){
// console.log(err);
// }
// }


export async function addfeedback(request, response) {
  try {
    const feedbackDoc = await FeedbackModel.find()
    console.log(`all feedback ${feedbackDoc}`);
    response.json({ "feedbackDetails": feedbackDoc })
  } catch (error) {
    console.log(error);
  }
}

export async function registration(request, response) {

  const registrationData = request.body
  const { email, password, name, phone, city, address } = registrationData
  const pic = request.file.filename

  console.log(`picname is ${pic}`);
  try {
    const regDoc = new UserModel({email,password,name,phone,city,address,pic})
    await regDoc.save()
    response.json({ "message": "Registration done" })

  } catch (error) {
    console.log(error);

  }
}

// ...............///////// User Profile Code.....................///
export async  function profile(request , response){

  const email = request.query.email
  console.log(`email of user is ${email}`);

  try{

   const UserDoc = await UserModel.findOne({email : email})

   response.json({"profileData" : UserDoc})


  }
  catch(err){
    console.log(err);
    
  }



}

export const editProfile=async(request , response)=>{

  const newData = request.body
  const email = request.query.email

  try{

    const {name,phone,city,address} = newData
    const filterCondition = {email:email}

    const modifiedData = {
      $set:
      {

      name:name,
      phone:phone,
      city:city,
      address:address
      }

    }

  const status =  await ShopOwnerModel.updateOne(filterCondition , modifiedData)
  console.log(`status is ${status}`);
  
    response.json({"updateStatus": status})
    

  }catch(err){
    console.log(err);
    
  }

}














export async function userLogin(request, response) {

  const loginData = request.body
  const { email, password } = loginData
  try {
    const UserDoc = await UserModel.findOne({ email: email, password: password })    // left email from model and right email from here
    if (UserDoc != null) {

      response.json({ "message": "Login successful", "token": email , "status" : "success" })

    } else {
      response.json({ "message": "Invalid Credentails" })
    }


  } catch (error) {
    console.log(error);

  }

}
































