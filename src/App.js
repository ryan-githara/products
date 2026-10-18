import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container } from 'react-bootstrap';
import Name from './components/name';
import Price from './components/price';
import Description from './components/description';
import Image from './components/image';

// CHANGE YOUR NAME HERE
const firstName = "Rayan"; // if you leave it "" it will show "Hello, there!"

function App() {
  return (
    <>
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', flexDirection: 'column' }}>
        
        <Card style={{ width: '22rem', borderRadius: '15px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }} className="p-2">
          <Image />
          <Card.Body>
            <Name />
            <Description />
            <Price />
          </Card.Body>
        </Card>

        <div className="mt-4 text-center">
          <h4>{firstName ? `Hello, ${firstName}!` : "Hello, there!"}</h4>
          
          {/* Display an image if firstName is provided */}
          {firstName && (
            <img 
              src="https://i.gifer.com/7VE.gif" 
              alt="hello" 
              style={{ width: '100px', marginTop: '10px', borderRadius: '10px' }} 
            />
          )}
        </div>

      </Container>
    </>
  );
}

export default App;