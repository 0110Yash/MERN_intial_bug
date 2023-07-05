const asyncHandler=require('express-async-handler');
const bcrypt=require("bcrypt");
const User=require("../models/userModels");

const registerUser= asyncHandler(async (req, res) => {
    const {username, email, password}=req.body;
    if(!username, !email, !password){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const UserAvailable=await User.findOne({email});
    if(UserAvailable){
        res.status(400);
        throw new Error("User already registered")
    }

    const hashedPassword=await bycrypt.hash(password,10);

    console.log("Hashed Password",hashedPassword);
    const user=await User.create({
        username,
        email,
        password: hashedPassword,
    });

    console.log(`User created ${user}`);
    if(user){
        res.status(201).json({_id: user.id, email: user.email});
    }
    else{
        res.status(400);
        throw new Error("User data is not defined");
    }

    res.json({message: "Register the user"});
});

const loginUser= asyncHandler((req,res) =>{
    res.json({message: "Login user"});
});

const currentUser= asyncHandler((req,res) =>{
    res.json({message: "Login user"});
});

module.exports={registerUser,loginUser,currentUser};