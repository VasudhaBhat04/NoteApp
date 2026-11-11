import mongoose from "mongoose";
import 'dotenv/config';


const connectDB = async () => {
  try{
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("Database connected");


  }catch(error){

    console.error("Error connecting to database",error);
    process.exit(1); //exit with failure


  

}
};

export default connectDB;