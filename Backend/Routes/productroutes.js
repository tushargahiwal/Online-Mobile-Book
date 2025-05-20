const { addProduct,getAllProduct,getOneProduct,deleteOneProduct,updateOneProduct} = require ('../Controllers/ProductController')
const express=require('express');
const route=express.Router();

route.post('/addproduct',addProduct);
route.get('/getproduct',getAllProduct);
route.get('/getoneproduct/:id',getOneProduct);
route.delete('/deleteproduct/:id',deleteOneProduct);
route.put('/updateproduct/:id',updateOneProduct);

module.exports=route;