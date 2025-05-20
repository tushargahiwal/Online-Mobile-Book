import React, { useEffect, useState } from 'react';
import { getoneUserProductData,deleteoneUserProductData } from '../Service';
import { Table, Button, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const ProductList = () => {
  const [productData, setProductData] = useState([]);
  const id = localStorage.getItem('userId');
  const navigate=useNavigate();

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const data = await getoneUserProductData(id);
        setProductData(data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProductData();
  }, [id]);

  const handleUpdate = (productId) => {
  localStorage.setItem('updateproductid',productId);
  navigate("/head/updateproduct");
  };

  const handleDelete = async (productId) => {
    const isDeleted = await deleteoneUserProductData(productId);
    if (isDeleted) {
      setProductData((prevData) => prevData.filter((item) => item.id !== productId));
    }
  };
  

  return (
    <Container className="my-5">
      <h3 className="text-center mb-4 text-primary fw-bold">Your Products</h3>
      <div className='d-flex justify-content-end mb-3'>
        <Link to="/head/addproduct"><Button className='btn btn-primary'>Add</Button></Link>
      </div>
      <Table striped bordered hover responsive className="shadow rounded-4">
        <thead className="table-dark text-center">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Brand</th>
            <th>Price (₹)</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="text-center align-middle">
          {productData.length > 0 ? (
            productData.map((product, index) => (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.brand}</td>
                <td>{product.price}</td>
                <td>
                  {product.description?.length > 60
                    ? product.description.slice(0, 60) + '...'
                    : product.description}
                </td>
                <td>
                  <Button
                    variant="warning"
                    size="sm"
                    className="me-2"
                    onClick={() => handleUpdate(product._id)}
                  >
                    Update
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center text-muted">
                No products found.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default ProductList;
