import mongoose from "mongoose";

let isConnected = false;

export const ConnecttoDb = async () => {
  mongoose.set('strictQuery', true);

  if (isConnected) {
    console.log("Mongoose is already connected!");
    return;
  }

  try {
    await mongoose.connect("mongodb://localhost:27017/login", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
