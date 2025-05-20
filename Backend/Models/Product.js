const mongoose=require('mongoose');

const productschema= new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    brand: String,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

module.exports=mongoose.model('Product',productschema);


