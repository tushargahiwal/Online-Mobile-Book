import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UpdateproductData,getoneProductData } from '../Service';

const ProductUpdate = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [brand, setBrand] = useState('');
  const storedUserId = localStorage.getItem('userId');
  const UpdateproductId = localStorage.getItem('updateproductid');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getoneProductData(UpdateproductId);
        console.log("getone......", data);
        if (data) {
          setName(data.name);
          setDescription(data.description);
          setPrice(data.price);
          setBrand(data.brand);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, []);

  const handleUpdate = async () => {
    const productdata = {
      name,
      description,
      price,
      brand,
      createdBy: storedUserId,
    };
  
    const res = await UpdateproductData(productdata, UpdateproductId);
    if (res.success) {
      navigate("/head/productlist");
    }
  };
  

  return (
    <div className="container mt-5">
      <h3>Update Product</h3>
      <div className="form-group mb-3">
        <label>Name</label>
        <input 
          className="form-control" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </div>
      <div className="form-group mb-3">
        <label>Description</label>
        <textarea 
          className="form-control" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
        />
      </div>
      <div className="form-group mb-3">
        <label>Price</label>
        <input 
          type="number" 
          className="form-control" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)} 
        />
      </div>
      <div className="form-group mb-3">
        <label>Brand</label>
        <input 
          className="form-control" 
          value={brand} 
          onChange={(e) => setBrand(e.target.value)} 
        />
      </div>
      <button className="btn btn-primary" onClick={handleUpdate}>
        Update Product
      </button>
    </div>
  );
};

export default ProductUpdate;
