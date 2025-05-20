import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { register } from '../Service';
import '../../App.css';

const Register = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!firstname.trim()) newErrors.firstname = 'First name is required';
    if (!lastname.trim()) newErrors.lastname = 'Last name is required';

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = 'Enter a valid email';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormClear = () => {
    setFirstname('');
    setLastname('');
    setEmail('');
    setPassword('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const formdata = {
      firstname,
      lastname,
      email,
      password,
      role: 'User'
    };

    try {
      await register({ formdata });
      handleFormClear();
      navigate('/');
    } catch (err) {
      console.error('Registration failed', err);
      setErrors({ submit: 'Registration failed. Please try again later.' });
    }
  };

  return (
    <div className='container-fluid back-image d-flex justify-content-center align-items-center'>
      <div className='col-md-6 col-lg-5 card-container'>
        <form className='login-card' onSubmit={handleSubmit}>
          <h2 className='login-title mb-4'>Register</h2>

          <div className='mb-3'>
            <label htmlFor='firstname' className='form-label'>First Name</label>
            <input
              id='firstname'
              type='text'
              className='form-control'
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            {errors.firstname && <div className='text-danger'>{errors.firstname}</div>}
          </div>

          <div className='mb-3'>
            <label htmlFor='lastname' className='form-label'>Last Name</label>
            <input
              id='lastname'
              type='text'
              className='form-control'
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
            {errors.lastname && <div className='text-danger'>{errors.lastname}</div>}
          </div>

          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>Email</label>
            <input
              id='email'
              type='email'
              className='form-control'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <div className='text-danger'>{errors.email}</div>}
          </div>

          <div className='mb-3'>
            <label htmlFor='password' className='form-label'>Password</label>
            <input
              id='password'
              type='password'
              className='form-control'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <div className='text-danger'>{errors.password}</div>}
          </div>

          {errors.submit && (
            <div className='alert alert-danger text-center'>{errors.submit}</div>
          )}

          <div className='d-grid mt-4'>
            <Button type='submit' className='btn-custom' variant='primary'>
              Register
            </Button>
          </div>

          <div className='text-center mt-3'>
            <p className='mb-1'>Already have an account?</p>
            <Button
              variant='outline-primary'
              className='w-50'
              onClick={() => navigate('/')}
            >
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
