import mongoose from "mongoose";

const FeedbackSchema =  new mongoose.Schema({
    name:{type : String , required : true},
    email:{type:String , required : true},
    rating:{type  : String , required : true , length:5},
    remark:{type : String , required : true},
    date:{type : Date , default:Date.now}
})

const FeedbackModel = mongoose.model("Feedback" , FeedbackSchema)
export default FeedbackModel