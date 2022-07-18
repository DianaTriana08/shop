import React, { useState } from "react";
import "./headInfo.css";
import { Row, Col, Container } from "react-bootstrap";
import Premium from "../../assets/img/logoPremium.png";
import Grain from "../../assets/img/coffe.png";
import Social from "../../assets/img/social.png";
import Coffe from "../../assets/img/coffeBag.png";

export default function HeadInfo() {

    const [bagCoffe, setbagCoffe] = useState({ id: 1, count: 0 });


    return (
        <Container>
            <Row className="content">
                <Col lg={9}>
                    <img className="socialMedia" src={Social} />
                    <img className="coffeBag" src={Coffe} />
                    <img className="premium" src={Premium} />
                    <p className="textCoffe">
                        Una mezcla de cafe con notas dulces de frutos del bosque.
                    </p>
                    <p className="contentInfo">
                        A través de un proceso único de tostado y mezcla, hemos marcado
                        los sabores de lo que más amamos. Desarrollando un caféa base
                        de granos seleccionados y con sabor natural que ofrece un sabor
                        dulce y rico para compartir con tu momento preferido.
                    </p>
                </Col>
                <Col lg={3}>
                    <img className="grainCoffe" src={Grain} />
                </Col>
            </Row>
        </Container>
    )
}