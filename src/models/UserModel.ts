import mongoose, { Schema } from "mongoose";
import UserType from "../interface/UserType";

const UserSchema=new Schema<UserType>({
    username:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    firstname:{
        type:String,
        required:true,
        trim:true
    },
    lastname:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    }
})

const UserModel=mongoose.model<UserType>("user",UserSchema)

export default UserModel