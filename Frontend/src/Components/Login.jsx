import React, { useState } from 'react';
import { Col, Container, Row, Form, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { login } from './Service';
import '../App.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    let validationErrors = {};
    let isValid = true;

    if (!email) {
      isValid = false;
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      isValid = false;
      validationErrors.email = 'Invalid email format';
    }

    if (!password) {
      isValid = false;
      validationErrors.password = 'Password is required';
    }

    setErrors(validationErrors);
    return isValid;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await login({ usercheck: { email, password } });
      console.log('login resp', response);

      if (response.success) {
        localStorage.setItem('role', response.data.role);
        console.log(response.data.role);
        if (response.data.role === 'User') {
          navigate('/home');
        } else if (response.data.role === 'admin') {
          navigate('/head/dashboard');
        } else {
          setErrors({ login: 'Unknown role. Cannot proceed.' });
        }
      } else {
        setErrors({ login: response.error || 'Login failed. Try again.' });
      }
    } catch (error) {
      setErrors({ login: 'An error occurred. Please try again later.' });
      console.error('Login error:', error);
    }
  };

  return (
    <div className="back-image">
      <Container fluid className="d-flex justify-content-center align-items-center min-vh-100">
        <Row className="w-100 d-flex justify-content-center card-container">
          <Col md={5} lg={4}>
            <Card className="login-card">
              <Card.Body>
                <h2 className="login-title mb-4">Login</h2>
                <Form onSubmit={handleLogin}>
                  <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Label className="fw-semibold">Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <p className="text-danger small">{errors.email}</p>}
                  </Form.Group>

                  <Form.Group controlId="formPassword" className="mb-3">
                    <Form.Label className="fw-semibold">Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && <p className="text-danger small">{errors.password}</p>}
                  </Form.Group>

                  {errors.login && <p className="text-danger text-center small">{errors.login}</p>}

                  <Button variant="primary" type="submit" className="w-100 btn-custom mb-2">
                    Login
                  </Button>
                </Form>

                <div className="mt-3 text-center">
                  <p className="mb-1">Don't have an account?</p>
                  <Button
                    variant="outline-primary"
                    className="w-100 btn-custom"
                    onClick={() => navigate('/register')}
                  >
                    Register
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
