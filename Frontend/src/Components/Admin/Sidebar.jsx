import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {
  FaTachometerAlt,
  FaBoxOpen,
  FaUsers,
  FaShoppingCart,
  FaSignOutAlt,
} from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div
      className="sidebar bg-dark text-white d-flex flex-column p-3 vh-100"
      style={{ width: '240px' }}
    >
     
      <div className="text-center mb-4">
        
        <h5 className="fw-bold text-primary fs-3">ShopMart</h5>
      </div>

      {/* Navigation Links */}
      <Nav className="flex-column gap-2">
        <NavLink
          to="/head/dashboard"
          className="nav-link text-white d-flex align-items-center rounded px-2 py-2 hover-effect"
        >
          <FaTachometerAlt className="me-2" />
          Dashboard
        </NavLink>

        <NavLink
          to="/head/productlist"
          className="nav-link text-white d-flex align-items-center rounded px-2 py-2 hover-effect"
        >
          <FaBoxOpen className="me-2" />
          Products
        </NavLink>

        <NavLink
          to="/head/userlist"
          className="nav-link text-white d-flex align-items-center rounded px-2 py-2 hover-effect"
        >
          <FaUsers className="me-2" />
          Users
        </NavLink>

      </Nav>

      {/* Footer Logout */}
      <div className="mt-auto pt-3">
        <NavLink
          to="/"
          className="nav-link text-white d-flex align-items-center rounded px-2 py-2 hover-effect"
        >
          <FaSignOutAlt className="me-2" />
          Logout
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
