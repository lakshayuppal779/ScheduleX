import dotenv from 'dotenv';
import mongoose from "mongoose";
dotenv.config()

const connectDB=async()=>{
    try{
        console.log(process.env.MONGO_URL);
        const connection = await mongoose.connect( `${process.env.MONGO_URL}`)
        console.log('Mongodb connected')
        console.log("Mongodb connected to:", connection.connection.host);
        console.log("Database name:", connection.connection.name);
    }catch(error){
        console.log('Mongodb connection failed')
        process.exit(1)
    }
}

export default connectDB