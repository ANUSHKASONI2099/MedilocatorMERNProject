import { request } from "express";
import ShopDetailModel from "../model/ShopDetailModel.js";
import ShopOwnerModel from "../model/ShopOwner_Model.js"
import mongoose from "mongoose"

// Owner Edit Profile code............

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
























export async function myDetails(request, response) {
  try {
    
    const Id=request.query.id;
    

    const detailsDoc = await ShopDetailModel.find({ owner:Id }).populate("owner",("name")).exec();
    response.json({ objectData: detailsDoc });

  } catch (error) {
    console.error(error);
    response.status(500).json({ message: "Internal Server Error" });
  }
}


export async function ownerRegistration(request, response) {

  console.log(request.file);
  
  const ownerRegistrationData = request.body
  const { email, password, name, phone, city, address } = ownerRegistrationData
  const pic = request.file.filename

  console.log(`picname is ${pic}`);
  try {
    const ownDoc = new ShopOwnerModel({email,password,name,phone,city,address,pic})
    await ownDoc.save()
    response.json({ "message": "Registration done" })

  } catch (error) {
    console.log(error);

  }




}

export async function ownerLogin(request, response) {

  const OwnerLoginData = request.body
  const { email, password } = OwnerLoginData
  try {
    const OwnerDoc = await ShopOwnerModel.findOne({ email: email, password: password })    // left email from model and right email from here
    if (OwnerDoc != null) {

      response.json({ "message": "Login successful", "token": email , "status":"success" })

    } else {
      response.json({ "message": "Invalid Credentails" })
    }


  } catch (error) {
    console.log(error);

  }

}

export async function addShopDetails(request , response){
  try{
    const {owner , shopName , description , phone ,city , address } = request.body
    const newDetails = new ShopDetailModel({owner, shopName , description , phone,city , address})
    await newDetails.save()
    response.json({"message":"Shop Details added successfully" , "details":newDetails})

  }catch(error){
    console.log(error);
    
  }
}

export async  function profile(request , response){

  const email = request.query.email
  console.log(`email of user is ${email}`);

  try{

   const OwnerDoc = await ShopOwnerModel.findOne({email : email})

   response.json({"profileData" : OwnerDoc})


  }
  catch(err){
    console.log(err);
    
  }



}





export async function updateLocation(request,response){
   const locationData=request.body
   const shopId = request.query.id
   const{longitude,latitude}=locationData
   
   console.log(longitude);
   console.log(latitude);
   console.log(shopId);
  try {
   const filterCondition = {_id:shopId}
   const modifiedData ={$set : {locationLat : parseFloat(latitude) , locationLong : parseFloat(longitude)}}
   const updateStatus = await ShopDetailModel.updateOne(filterCondition , modifiedData)
  // console.log(await ShopDetailModel.findById(shopId))

   
     console.log(`status is updated ${updateStatus}`);
  
    response.json({"updateStatus": updateStatus})
   
   

   // const locDoc=new ShopDetailModel({long})


    //  response.json({"objectData":"Location updated"} )
   
    
  } catch (error) {
    console.log(error);
    
  }
}





