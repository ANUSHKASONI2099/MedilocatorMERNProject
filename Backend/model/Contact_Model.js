import mongoose from "mongoose";
const ContactSchema = new mongoose.Schema({
    name:{type : String , required : true},
    email:{type : String , required : true},
    phone:{type : String , required : true , length:13},
    question:{type : String , required : true , default:""},
    date:{type : Date , default:Date.now},


})

const ContactModel = mongoose.model("Contact" , ContactSchema )
export default  ContactModel