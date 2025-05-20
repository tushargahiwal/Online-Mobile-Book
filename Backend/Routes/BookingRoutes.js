const { Booking,getAllBookings,getOneBookingDetails,deleteOneBooking,updateOneBooking} = require ('../Controllers/BookingController')
const express=require('express');
const route=express.Router();

route.post('/bookproduct',Booking);
route.get('/getallbooking',getAllBookings);
route.get('/getonebooking/:id',getOneBookingDetails);
route.delete('/deletebooking/:id',deleteOneBooking);
route.put('/updatebooking/:id',updateOneBooking);

module.exports=route;