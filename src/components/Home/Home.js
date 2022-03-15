import React from 'react';
import Container from '../common/Container';
import Splash from '../common/Splash';
import splashImg from '../../assets/splash.jpg';

const Home = () => {
  return (
    <Container>
      <Splash image={splashImg} style={{color: "#f1f1f1"}}>
        <h1 style={{textShadow: '1px 1px black'}}>
          Welcome to Expressian Car Rental!
        </h1>
        <h2 style={{textShadow: '1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000'}}>
          All cars have Coffee holders
        </h2>
      </Splash>
    </Container>
  )
}

export default Home;
