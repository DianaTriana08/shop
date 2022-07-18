import './App.css';
import React from "react";
import HeadInfo from './Components/headInfo/headInfo';
import Logo from './assets/img/logo.png';
import Elipse from './assets/img/elipse.svg';
import Language from "./assets/img/language.png";
import Footer from "./assets/img/footer.png";
import Network from "./assets/img/networks.png";
import CardProduct from "./Components/cardInfo/cardProduct";
import CardCar from "./Components/cardCar/cardCar";
import { Container, Row, Col } from 'react-bootstrap'

function App() {

  return (
    <Container>
      <Row>
        <Col lg={11} className='containerOne'>
          <img alt='logo' className="imgLogo" src={Logo} />
          <img alt='logo1' className='language' src={Language} />
          <CardProduct />
        </Col>
        <Col lg={1} className="imgContainer">
          <CardCar />
          {/* <img className="carStyle" src={Car} onClick={()=>console.log(localStorage.getItem('car'))} /> */}
          <img className="elipseStyle" alt='elipse' src={Elipse} />
          <p className='textContent'>HARD <br /> WORK</p>
        </Col>
        <HeadInfo />
      </Row>
      <Row className='footer'>
        <Col lg={2}>
          <img className="logoFooter" alt='footer' src={Footer} />
        </Col>
        <Col lg={6}>
          <p className='textFooter'>© 2021 JAVIER PEREIRA. All Rights Reserved</p>
        </Col>
        <Col lg={1}>
          <p className='textFollow'>Follow US</p>
        </Col>
        <Col lg={3}>
          <img className="network" alt='network' src={Network} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
