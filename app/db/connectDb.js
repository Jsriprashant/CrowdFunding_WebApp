import mongoose from "mongoose";


const connectDb = async () => {
    try {
        const conn = await mongoose.connect(`mongodb://localhost:27017/chai`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error.message);

    }
}
export default connectDb;