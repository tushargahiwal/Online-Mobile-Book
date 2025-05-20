const {addUser,login,getAllUserData,getOneUserData,updateuserData,deleteUserData} = require ('../Controllers/UserController')
const express=require("express");
const route=express.Router();

route.post('/register',addUser);
route.post('/logincheck',login);
route.get('/getdata',getAllUserData);
route.get('/getonedata/:_id',getOneUserData);
route.delete('/deleteuser/:_id',deleteUserData);
route.put('/updateuser/:id',updateuserData);

module.exports=route;