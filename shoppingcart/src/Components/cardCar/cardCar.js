import { useState } from "react";
import React, { Card, Container, Row, Col } from "react-bootstrap";
import Coffe from "../../assets/img/coffeBag.png";
import Car from "../../assets/img/car.png";
import "./cardCar.css";

const CardCar = (props) => {
    const [product, setProduct] = useState([])
    const [show, setShow] = useState(false)
    const getItem = () => {
        setProduct([])
        let value = localStorage.length
        for (let i = 1; i <= value; i++) {
            let indo = JSON.parse(localStorage.getItem('car' + i))
            if (indo != null) {
                setProduct(product => [...product, indo])
            }
        }
        setShow(!show)
    }
    return (
        <>
            <button className="carStyle" onClick={() => { getItem() }}>CARRITO
                <img src={Car}/>
            </button>
            {
                show &&
                <Container>
                    <Card className="carProducts">
                        {
                            product.length !== 0 &&
                            product.map((data, i) => {
                                return (
                                    <Row key={i} className="rowCar">
                                      <Col className="col-lg-4">
                                        <img className="bagCar" alt='store' src={Coffe}/>
                                      </Col>
                                      <Col className="col-lg-8 productsCoffe">
                                         <p>Bag Size: {data.id}</p>
                                         <p>Amount: {data.count}</p>
                                      </Col>
                                    </Row>
                                )
                            })
                        }
                    </Card>
                </Container>
            }
        </>
    )
};

export default CardCar;