const model =require('../Models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// post api
const addUser = async (req, res) => {
    const { firstname,
        lastname,
        email,
        password,
        role } = req.body;

    try {
        let user = await model.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new model({
            firstname, lastname, email, password:hashedPassword,role
        });

        await newUser.save();

        // Generate JWT Token
        const token = jwt.sign(
            { userId: newUser._id },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(201).json({ msg: "User registered successfully", token, userId: newUser._id, });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Server Error" });
    }
};

// POST API: Login User
const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        let user = await model.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        // Compare the hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        // Generate JWT Token
        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(200).json({
            msg: "Login successful",
            token,
            userId: user._id,
            role:user.role,
            firstname:user.firstname,
            lastname:user.lastname
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Server Error" });
    }
};

// get all data
const getAllUserData= async(req,res)=>{
    try{
        const data=await model.find({});
        res.status(200).send({data});
    }
    catch(err)
    {
        console.log(err);
    }
}

// get one user data
const getOneUserData= async(req,res)=>{

    try{
        const _id=req.params
    const data=await model.findOne({_id:_id});
    res.status(200).send(data);
    }

    catch(err){
        console.log(err);
    }  
}

// const update data
const updateuserData = async (req, res) => {
    const { firstname, lastname, email, password, role } = req.body;
  
    try {
      const userId = req.params.id;
  
      const existingUser = await model.findById(userId); 
      if (!existingUser) {
        return res.status(404).send({ message: "User not found" });
      }
  
      const updatedata = await model.updateOne(
        { _id: userId },
        {
          $set: {
            firstname,
            lastname,
            email,
            password,
            role,
          },
        }
      );
  
      res.status(200).send(updatedata);
    } catch (er) {
      console.log(er);
      res.status(500).send({ error: er.message });
    }
  };
  

// const delete user
const deleteUserData=async(req,res)=>{
    try{
     const _id=req.params;
     const data=await model.deleteOne({_id:_id});
     res.status(200).send("user deleted successfully",data);
    }
    catch(err){
        console.log(err);
    }
}

module.exports={getAllUserData,getOneUserData,updateuserData,deleteUserData,addUser,login}