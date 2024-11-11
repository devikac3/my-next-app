import mongoose from "mongoose"

console.log("hi")
 const connectDb = async () => {
    console.log("hi")
    console.log(process.env.MONGO_URL,process.env.DATABASE_NAME)
    const DB_OPTIONS = {
        dbName: process.env.DATABASE_NAME
    }
    try {
      const con =  await mongoose.connect('mongodb://localhost:27017',DB_OPTIONS)
      if (con) {
        console.log("Database connected.")
      }
    } catch (error) {
        console.log("Database not connected.")
        console.log(error)
    }
}
export default connectDb;