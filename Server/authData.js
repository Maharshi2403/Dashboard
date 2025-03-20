import mongoose from "mongoose";

const key =
  "mongodb+srv://Maha7178:yA203784@cluster0.xthh0zw.mongodb.net/Dashboard";

async function connect() {
  try {
    await mongoose.connect(key);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
  }
}

connect();

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const Users = mongoose.models.User || mongoose.model("Data", userSchema);

export default Users;
