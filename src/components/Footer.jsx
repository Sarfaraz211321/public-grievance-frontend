import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-light py-3 mt-5">
      <Container className="text-center">
        &copy; {new Date().getFullYear()} Public Grievance Portal. All rights reserved.
      </Container>
    </footer>
  );
}

export default Footer;
