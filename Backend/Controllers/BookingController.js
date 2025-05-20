const model = require('../Models/Bookingmodel')

// post api
const Booking= async(req,res)=>{
    const { 
        paymenttype,
        productId,
        UserId
    }=req.body;

    try{

        const userData=new model({
            paymenttype,
        productId,
        UserId
        })

        const data=await userData.save();
        res.status(200).send({data});

    }

    catch(error)
    {
        console.log(error);
    }
}

// get api
const getAllBookings=async(req,res)=>{
    try{
        const data=await model.find({});
        res.status(200).send({data});
    }

    catch(error)
    {
        console.log(error);
    }
}

// get one api from id
const getOneBookingDetails=async(req,res)=>{
    try{
        const{id}=req.params;
        const data=await model.findById(id);
        res.status(200).send(data);
    }
    catch(error)
    {
        console.log(error);
    }
}

// delete the data from with id
const deleteOneBooking=async(req,res)=>{
    try{
        const{id}=req.params;
        const data=await model.deleteOne({ _id: id });
        res.status(200).send(data);
    }
    catch(error)
    {
        console.log(error);
    }
}


// update data with id
const updateOneBooking=async(req,res)=>{
    const { paymenttype,
        productId,
        UserId } = req.body;
  
    try {
      const BookingId = req.params.id;
  
      // Optional: Check if product exists before updating
      const existingProduct = await model.findById(BookingId);
      if (!existingProduct) {
        return res.status(404).send({ message: "Product not found" });
      }
  
      const updatedBooking = await model.updateOne(
        { _id: BookingId },
        {
          $set: {
            paymenttype,
            productId,
            UserId
          },
        }
      );
  
      res.status(200).send(updatedBooking);
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }


}

module.exports={Booking,getAllBookings,getOneBookingDetails,deleteOneBooking,updateOneBooking};
