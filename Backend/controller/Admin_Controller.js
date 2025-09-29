import mongoose from "mongoose";
import ContactModel from "../model/Contact_Model.js";
import AdminModel from "../model/Admin_Model.js";
import FeedbackModel from "../model/Feedback_Model.js";



// admin Login code
export async function adminLogin(request, response) {

  const loginData = request.body
  const { email, password } = loginData
  console.log(email,password);
  
  try {
    const adminDoc = await AdminModel.findOne({ email: email, password: password })    // left email from model and right email from here
    if (adminDoc != null) {

      response.json({ "message": "Login successful", "token": email,"status":"success" })

    } else {
      
      response.json({ "message": "Invalid Credentails" })
    }


  } catch (error) {
    console.log(error);

  }

}

export async function allContacts(request, response) {
  try {

    const contactDocs = await ContactModel.find() // select * from contact same as
    console.log(`all contacts ${contactDocs}`);
    response.json({ "contactDetails": contactDocs })




  } catch (err) {
    console.log(err);

  }

}

export async function allFeedback(request, response) {
  try {

    const FeedbackDocs = await FeedbackModel.find() // select * from contact same as
    console.log(`all Feedback ${FeedbackDocs}`);
    response.json({ "FeedbackDetails": FeedbackDocs })




  } catch (err) {
    console.log(err);

  }

}


export async  function profile(request , response){

  const email = request.query.email
  console.log(`email of user is ${email}`);

  try{

   const  AdminDoc = await AdminModel.findOne({email : email})

   response.json({"profileData" : AdminDoc})


  }
  catch(err){
    console.log(err);
    
  }



}
