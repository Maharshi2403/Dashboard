import mongoose from "mongoose";

const key =
  "mongodb+srv://Maha7178:yA203784@cluster0.xthh0zw.mongodb.net/Dashboard";

async function Dbconnect() {
  try {
    await mongoose.connect(key);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
  }
}

Dbconnect();

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  id: {
    type: String,
  },
});

const Users = mongoose.models.User || mongoose.model("user", userSchema);

export default Users;
