const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

exports.registerUser = async(req, res) => {
    try{
        const {email} = req.body;
        const userExists =  await User.findOne({email});
        if(userExists){
            return res.json({
                message: "User Already exists",
                success: false
            })
        }
        const newUser = new User(req.body);
        await newUser.save();

        res.json({
            message: "User created successfully",
            success: true,
            data: newUser
        })

    }catch(err){
        console.log("hello", JSON.stringify(err));
        if(err._message == "user validation failed"){
            return res.status(400).json({
                message: err.errors.name.message,
                success: false
            })
        }
        res.status(500).json({
            message: err.message,
            success: false
        })
    }
}

exports.loginUser = async(req, res) => {
    try{
        const {email,password} = req.body;
        const user =  await User.findOne({email});
        if(!user){
            return res.status(401).json({
                message: "User does not exist. Please register",
                success: false
            })
        }
        //simplified password validation where we are storing passwords in plain text
        if(password !== user.password){
            return res.status(401).json({
                message: "Invalid Credentials",
                success: false
            })
        }

        const token = jwt.sign({userId: user["_id"], name: user.name}, process.env.jwt_secret, {expiresIn: "1d"});
        console.log("jwt token lgin route ",token);
        

        res.json({
            message: "User logged in",
            success: true,
            data: token
        })

    }catch(err){
        console.log("hello", err.message);
        return res.status(500).json({
            message: err.message,
            success: false
        })
    }
}