import React from 'react';
import { Button, Dropdown } from 'react-bootstrap';
import { FaBars, FaUserCircle } from 'react-icons/fa';

const Header = ({ toggleSidebar }) => {
  const firstname = localStorage.getItem('firstname') || 'Admin';
  const lastname = localStorage.getItem('lastname') || '';

  return (
    <div className="d-flex justify-content-between align-items-center p-3 bg-white shadow-sm border-bottom">
      <div className="d-flex align-items-center gap-2">
        <Button variant="outline-primary" onClick={toggleSidebar} className="me-3">
          <FaBars />
        </Button>
        <h5 className="mb-0 fw-bold text-primary">Admin Dashboard</h5>
      </div>

      <Dropdown align="end">
        <Dropdown.Toggle
          variant="light"
          className="d-flex align-items-center gap-2 border-0 bg-transparent"
        >
          <FaUserCircle size={24} className="text-secondary" />
          <span className="fw-semibold text-dark">{firstname} {lastname}</span>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item disabled>
            Signed in as <strong>{firstname}</strong>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="/head/dashboard">Profile</Dropdown.Item>
          <Dropdown.Item href="/">Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Header;
