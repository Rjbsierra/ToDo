import mongoose from "mongoose";


const connectDB = async (key) =>{
    try{
        await mongoose.connect(key);
        console.log('db has connected')
    }catch(e){
        console.log(e);
    }
}

export {connectDB};