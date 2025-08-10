import mongoose from "mongoose";

export async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URL!);
        const connection =  mongoose.connection

        connection.on('connected',()=>{
          console.log("connection is on with db")
        })

        connection.on('error',(error)=>{
            console.log("connection filed with db" + error);
            process.exit();
        })
    } catch (error) {
        console.log('something went wrong in the db connection ')
        console.log(error)
    }
}