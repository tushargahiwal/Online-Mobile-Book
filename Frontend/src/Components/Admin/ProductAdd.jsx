import React, { useState } from 'react';
import { productAdd } from '../Service';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';

const ProductAdd = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [brand, setBrand] = useState('');
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = {
      name,
      description,
      price,
      brand,
      createdBy: userId,
    };

    console.log("added data",productData);

    try {
      const res = await productAdd(productData);
      if (res.success) {
        navigate('/head/productlist');
      } else {
        alert('Failed to add product');
      }
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <Container className="my-5">
      <h3 className="text-center text-primary fw-bold mb-4">Add New Product</h3>
      <Form onSubmit={handleSubmit} className="shadow p-4 rounded-4">
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter product name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={description}
            required
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter product description"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price (₹)</Form.Label>
          <Form.Control
            type="number"
            value={price}
            required
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter product price"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Brand</Form.Label>
          <Form.Control
            type="text"
            value={brand}
            required
            onChange={(e) => setBrand(e.target.value)}
            placeholder="Enter product brand"
          />
        </Form.Group>

        <div className="text-center">
          <Button variant="primary" type="submit">
            Add Product
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default ProductAdd;
