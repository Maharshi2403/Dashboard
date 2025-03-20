import express from "express";
import Users from "./authData.js";
const app = express();
import cors from "cors";


app.use(cors());

app.get("/signup", async (req, res) => {
    const Email = req.body.email;
    const Password = req.body.password;

    const user = Users.findOne({email: Email})
    if(user){
        return res.status(200).json({message: "User already exist"})
    }else{
        const newUser = new Users({email: Email, password: Password})
        await newUser.save()
        return res.status(200).json({message: "User created successfully"})
    }

   
})

app.get("/signin", async (req, res) => {
    const Email = req.body.email;
    const Password = req.body.password;

    const user = Users.findOne({email: Email})
    if(!user){
        return res.status(200).json({message: "User not found"})
    }else{
        if(user.password !== Password){
            return res.status(200).json({message: "Invalid password"})
        }
    }
    
})

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})





