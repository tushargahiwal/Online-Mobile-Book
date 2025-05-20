import React, { useEffect, useState } from 'react';
import CustomNavbar from './Navbar';
import Footer from './Footer';
import { getAllProduct, bookProduct } from '../Service';
import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';

const Home = () => {
  const [productdata, setProductData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [paymenttype, setPaymentType] = useState('online');

  const firstname = localStorage.getItem('firstname');
  const lastname = localStorage.getItem('lastname');
  const userId=localStorage.getItem('userId');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllProduct();
      setProductData(data);
    };
    fetchData();
  }, []);

  const handleBuyNow = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedProduct(null);
    setPaymentType('Card');
  };

  const handleSubmit = async () => {
    const bookingData = {
      productId: selectedProduct._id,
      UserId: userId,
      paymenttype:paymenttype
    };

    try {
      await bookProduct(bookingData);
      alert('Booking Successful!');
      handleClose();
    } catch (err) {
      console.error('Booking failed:', err);
      alert('Booking failed. Try again.');
    }
  };

  return (
    <div>
      <CustomNavbar />
      <Container className="my-5">
        <h2 className="text-center mb-4 text-primary">Our Products</h2>
        <Row>
          {productdata.map((product, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="h-100 shadow-lg rounded-4 border-0">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title className="fw-bold text-primary text-center fs-4 mb-3">
                      {product.name}
                    </Card.Title>
                    <p className="text-center text-success fw-semibold fs-5 mb-3">
                      ₹{product.price}
                    </p>

                    <Card.Text className="text-muted">
                      <strong>Description:</strong> <br />
                      {product.description.length > 100
                        ? `${product.description.slice(0, 100)}...`
                        : product.description}
                    </Card.Text>
                    <p className="mb-1"><strong>Brand:</strong> {product.brand}</p>
                  </div>
                </Card.Body>

                <Card.Footer className="bg-transparent border-0 text-center">
                  <Button
                    variant="outline-primary"
                    className="w-75 fw-bold rounded-pill"
                    onClick={() => handleBuyNow(product)}
                  >
                    Buy Now
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Buy Now Modal */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Buy Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Product:</strong> {selectedProduct?.name}</p>
          <p><strong>Username:</strong> {firstname} {lastname}</p>
          <Form.Group controlId="paymentType">
            <Form.Label><strong>Payment Type</strong></Form.Label>
            <Form.Select
              value={paymenttype}
              onChange={(e) => setPaymentType(e.target.value)}
            >
              <option value="Card">Card</option>
              <option value="Phone Pay">Phone Pay</option>
              <option value="Cash">Cash</option>
            </Form.Select>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button variant="primary" onClick={handleSubmit}>Confirm Purchase</Button>
        </Modal.Footer>
      </Modal>

      <Footer />
    </div>
  );
};

export default Home;
