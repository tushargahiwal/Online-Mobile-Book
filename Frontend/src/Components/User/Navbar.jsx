import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CustomNavbar = () => {
  const firstname = localStorage.getItem('firstname') || 'Guest';
  const lastname = localStorage.getItem('lastname') || '';
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm py-2">
      <Container>
        <Navbar.Brand 
          onClick={() => navigate('/home')} 
          style={{ cursor: 'pointer' }} 
          className="fw-bold fs-3 text-white"
        >
          ShopMart
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className="align-items-center">
          <Nav.Link onClick={() => navigate('/home')} className="text-white fs-5 fw-semibold ">
             Home
            </Nav.Link>
            <Nav.Link onClick={() => navigate('/profile')} className="text-white fs-5 fw-semibold ">
              Profile
            </Nav.Link>
            <Nav.Link onClick={handleLogout} className="text-white fs-5 fw-semibold fs-5 ">
              Logout
            </Nav.Link>
            <span className="text-white fs-5  fw-semibold ms-5">
              {firstname} {lastname}
            </span>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
