import React from 'react';
import {  Navbar } from 'react-bootstrap';

export default function AppHeader() {

  return (
    <div className="pb-1">
    <Navbar expand="lg" variant="light" bg="light">
      <Navbar.Brand href="#">Exams-online</Navbar.Brand>
    </Navbar>
  </div>
  );
}
