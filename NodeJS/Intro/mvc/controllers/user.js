const userModel = require("../models/user");

exports.createUser = async(req, res) => {
    try{
    const {name, email} = req.body;
    const newUser = new userModel({email,name});
    await newUser.save();
    return res.json({
        message: "User created",
        data: newUser,
      });
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message: err.message
          });
    }
}