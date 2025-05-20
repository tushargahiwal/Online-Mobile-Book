const mongoose=require('mongoose');

const userschema= new mongoose.Schema({
 firstname:String,
 lastname:String,
 email:String,
 password:String,
 role:String
})

module.exports=mongoose.model('User',userschema);