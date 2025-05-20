import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col, Spinner, Navbar } from 'react-bootstrap';
import { getoneUserData } from './Service';
import CustomNavbar from './User/Navbar';
import Footer from './User/Footer';

const Profile = () => {
  const userId = localStorage.getItem('userId');
  const [userdata, setUserdata] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getoneUserData(userId);
        setUserdata(data);
      } catch (err) {
        console.error('Error fetching user:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [userId]);

  return (
    <>
    <CustomNavbar/>
    <Container className="mt-5">
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="shadow p-4 border-0 rounded-4">
              <Card.Body>
                <h3 className="mb-4 text-center fw-bold text-primary">My Profile</h3>
                <p><strong>First Name:</strong> {userdata.firstname}</p>
                <p><strong>Last Name:</strong> {userdata.lastname}</p>
                <p><strong>Email:</strong> {userdata.email}</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
    <Footer/>
    </>
  );
};

export default Profile;
