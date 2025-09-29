import mongoose from "mongoose";
const userSchema = new mongoose.Schema({

    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, length: 45 },
    name: { type: String, required: true, length: 45 },
    phone: { type: String, required: true, length: 13 },
    city: { type: String, required: true, length: 50 },
    address: { type: String, required: true, length: 100 },
    pic: { type: String, required: false, length: 250 },
    date: { type: Date , default:Date.now }

})

const UserModel = mongoose.model("User", userSchema)

export default UserModel


