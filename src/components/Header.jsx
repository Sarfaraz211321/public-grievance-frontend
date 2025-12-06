


import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem("user")); 

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  const isAdmin = user?.role === "admin";

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">PublicGrievance</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

            
            {isLoggedIn && !isAdmin && (
              <Nav.Link as={Link} to="/">Complaint_Here</Nav.Link>
            )}

            {isLoggedIn && (
              <>
                <Nav.Link as={Link} to="/profile">Profile</Nav.Link>

                
                {isAdmin && (
                  <Nav.Link as={Link} to="/admin">Admin_DashBoard</Nav.Link>
                )}

                <Button variant="outline-light" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            )}

            {!isLoggedIn && (
              <>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/register">Register</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
