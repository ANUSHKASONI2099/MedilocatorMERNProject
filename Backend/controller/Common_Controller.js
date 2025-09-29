import { json, response } from "express";
import ContactModel from "../model/Contact_Model.js"
import mongoose from "mongoose";



export async function addContact(request , response) {

    const contactObject = request.body
    const {name , email , phone  , question} = contactObject

    try{
        const contactDoc = new ContactModel({name , email , phone , question})
        await contactDoc.save()
        console.log("contact added");

        response.json({"message" : "Contact added successfully"})
        
    }
    catch(error){
        console.log(error);
        
    }
    
}



export function addAddress(request , response){
    response.send("<h1> Address added successfully !! </h1>")
}

export function viewNews(request,response){
    const newsArray = [

        {
            "title" : "Sindoor Operation",
            "date" : "7 May 2025",
             "content" : "It launched missile and air strikes"



        },

        {
            "title" : "Holiday",
            "date" : "9 August 2025",
            "content" : "RakshaBandhan"


        },

        {
            "title" : "LeetCode Weekly Contest 161",
            "date" : "20 July",
            "content"  : "Practice Session"



        }




    ]
    response.json(newsArray)
}