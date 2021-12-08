import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Container, Row} from 'reactstrap';
import Clubs from './Clubs';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
            <h1>Nightclub Capacity</h1>
        </Row>
        <Row>
            <h3>Each time someone enters/leaves the club, click the appropriate button for that club.</h3>
        </Row>
      </Container>
      <Clubs/>
    </div>
    
  );
}

export default App;
