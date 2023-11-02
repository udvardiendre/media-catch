import mongoose, { ConnectOptions } from "mongoose"

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true)

    if(isConnected){
        console.log("MongoDB is already connected!")
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI as string,{
            dbName: "media_catch",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as ConnectOptions)

        isConnected = true;
        console.log("MongoDB is connected!")
    } catch (error) {
        console.log(error)
    }
}