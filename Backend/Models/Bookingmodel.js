const mongoose=require('mongoose');

const productschema= new mongoose.Schema({
    paymenttype: String,
    productId:{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    UserId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

module.exports=mongoose.model('Booking',productschema);
