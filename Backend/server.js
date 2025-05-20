const express=require('express');
const app=express();

const cors=require('cors');
app.use(cors());

const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/mobileapp")

app.use(express.json());

const userroute=require('./Routes/Userroutes');
const productroute=require('./Routes/productroutes');
const bookingroute=require('./Routes/BookingRoutes');
app.use('/',userroute);
app.use('/',productroute);
app.use('/',bookingroute);

const port=8000;

app.listen(port, ()=>{
    console.log(`port is running on ${port}`);
})

