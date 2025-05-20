import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../../App.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <Container>
        <Row className="text-center text-md-start">
          <Col md={4} className="mb-4">
            <h4 className="fw-bold">ShopMart</h4>
            <p className="small">
              Delivering great experiences every day. Your one-stop destination for premium shopping.
            </p>
          </Col>

          <Col md={4} className="mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/home" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
              <li><Link to="/privacy" className="footer-link">Privacy Policy</Link></li>
            </ul>
          </Col>

          <Col md={4}>
            <h5 className="fw-bold">Connect With Us</h5>
            <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-2">
              <a href="https://facebook.com" className="social-icon"><FaFacebookF /></a>
              <a href="https://twitter.com" className="social-icon"><FaTwitter /></a>
              <a href="https://instagram.com" className="social-icon"><FaInstagram /></a>
              <a href="https://linkedin.com" className="social-icon"><FaLinkedinIn /></a>
            </div>
            <p className="mt-3 small">📧 Email: shopmart@gmail.com</p>
          </Col>
        </Row>

        <hr className="border-secondary mt-4" />
        <p className="text-center mb-0 small">&copy; {new Date().getFullYear()} ShopMart. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
