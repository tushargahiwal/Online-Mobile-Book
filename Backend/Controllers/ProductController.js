const model = require('../Models/Product')

// post api
const addProduct= async(req,res)=>{
    const { 
        name,
        description,
        price,
        brand,
        createdBy
    }=req.body;

    try{

        const userData=new model({
            name,
            description,
            price,
            brand,
            createdBy
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
const getAllProduct=async(req,res)=>{
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
const getOneProduct=async(req,res)=>{
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
const deleteOneProduct=async(req,res)=>{
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
const updateOneProduct = async (req, res) => {
    const { name, description, price, brand, createdBy } = req.body;
  
    try {
      const productId = req.params.id;
  
      // Optional: Check if product exists before updating
      const existingProduct = await model.findById(productId);
      if (!existingProduct) {
        return res.status(404).send({ message: "Product not found" });
      }
  
      const updatedProduct = await model.updateOne(
        { _id: productId },
        {
          $set: {
            name,
            description,
            price,
            brand,
            createdBy,
          },
        }
      );
  
      res.status(200).send(updatedProduct);
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  };
  

module.exports={addProduct,getOneProduct,getAllProduct,deleteOneProduct,updateOneProduct};
