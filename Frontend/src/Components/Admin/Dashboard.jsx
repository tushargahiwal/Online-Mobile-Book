import React, { useEffect, useState } from 'react';
import { getAllProduct, getAllBookings } from '../Service';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Dashboard = () => {
  const [productCount, setProductCount] = useState(0);
  const [bookingCount, setBookingCount] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const products = await getAllProduct();
        const bookings = await getAllBookings();
        setProductCount(products.length);
        setBookingCount(bookings.length);
      } catch (error) {
        console.error('Failed to fetch counts:', error);
      }
    };
    fetchCounts();
  }, []);

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4 text-primary">Admin Dashboard</h2>
      <Row className="justify-content-center g-4">
        <Col xs={12} md={5}>
          <Card className="shadow rounded-4 border-0 text-center py-4">
            <Card.Body>
              <Card.Title className="text-primary fs-3 fw-bold mb-3">Products</Card.Title>
              <Card.Text className="display-4 fw-bold text-success">{productCount}</Card.Text>
              <Card.Text className="text-muted">Total products available</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={5}>
          <Card className="shadow rounded-4 border-0 text-center py-4">
            <Card.Body>
              <Card.Title className="text-primary fs-3 fw-bold mb-3">Bookings</Card.Title>
              <Card.Text className="display-4 fw-bold text-warning">{bookingCount}</Card.Text>
              <Card.Text className="text-muted">Total bookings made</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
