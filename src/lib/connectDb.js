import mongoose from "mongoose"
import { dbName } from "../../constant"

export async function dbConnect(){
    try {
        const connectionInstant = await mongoose.connect(`${process.env.MONGODB_URI}/${dbName}`)

        console.log(`\n Mongodb Connected!! Host: ${connectionInstant.connection.host}`);
        return connectionInstant;
    } catch (error) {
        console.error("Mongodb connection error ", error)
        process.exit(1)
    }
}