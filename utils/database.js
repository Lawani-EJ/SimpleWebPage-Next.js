import mongoose from "mongoose";

let isConnected = false

export const ConnecttoDb = async() =>{
   mongoose.set('strictQuery',true)

       if(isConnected){
           console.log("Mongoose is already connected!")
           return
       }

       try{
           //url goes here
           await mongoose.connect('mongodb://localhost:27017/LoginUser')
           isConnected=true
           console.log("Connecting to monogoDB")
       }

       catch(e){
        console.log(e)
       }
}