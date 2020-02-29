import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

const jumboStyle = {
  backgroundImage: 'url("https://images.unsplash.com/photo-1507103011901-e954d6ec0988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80")',
  backgroundPosition: 'center',
  backgroundSize: 'cover'
}

function App() {
  return (
    <>
      <Navbar fixed="top">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar>
      <Jumbotron fluid style={jumboStyle}>
        <Container>
          <h1>Fluid Jumbotron</h1>
          <p>Modified to hold the horizontal space.</p>
        </Container>
      </Jumbotron>
    </>
  );
}

export default App;
