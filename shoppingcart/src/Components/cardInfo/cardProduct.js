import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import Medium from "../../assets/img/roast.png";
import Sum from "../../assets/img/sum.png";
import Rest from "../../assets/img/rest.png";
import "./cardInfo.css";

export default function CardProduct() {

    const [bagCoffe, setbagCoffe] = useState({ id: "", count: 1 });
    const [store, setStore] = useState([]);
    const [products, setProducts] = useState(1);
    const [cont, setCont] = useState(localStorage.length);


    function saveInfo(params) {
        localStorage.setItem('car'+params, JSON.stringify(store[0]))     
    }
     
    function addCar(e) {
        setbagCoffe({ ...bagCoffe, [e.target.name]: e.target.value })
        console.log(e.target.name, e.target.value)
    }
    function addCount(e) {
        console.log(products)
        if (bagCoffe.id === "") {
            alert('debe seleccionar un producto')
            return
        }
        if (e === "sumar") {
            setbagCoffe({ ...bagCoffe, ['count']: products + 1 })
            setProducts(products + 1);
        } else {
            setbagCoffe({ ...bagCoffe, ['count']: products > 1 ? products - 1 : products })
            setProducts(products > 1 ? products - 1 : products);
        }

    }
    useEffect(() => {
        setStore([bagCoffe]);
    }, [products])


    return (
        <Container>
            <Card className="containerCard">
                <Card.Body>
                    <p className="coffeText">COFFEE</p>
                    <p className="titleText">SWEET <br /> ENERGY</p>
                    <div className="borderBott"></div>
                    <Row>
                        <Col lg={3}>
                            <p className="textCard">ROAST</p>
                        </Col>
                        <Col lg={9}>
                            <img className="mediumCard" alt='medium' src={Medium} />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={3}>
                            <p className="textCard" >TASTE</p>
                        </Col>
                        <Col lg={9}>
                            <p className="infoCard">Caramelly & Rich Blend. Sweet like Butterscotch.
                                Flavours like Red Fruit & Apricot
                            </p>
                        </Col>
                    </Row>
                    <p className="textCard mt-1">BAG SIZE</p>
                    <select className="selectCard" name="id" onChange={(e) => addCar(e)}>
                        <option>Please select</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="big">Big</option>
                    </select>
                    <Row className="countCard">
                        <Col className="borderCard" lg={6}>
                            {products}
                            <img className="restIcon" alt='menos' onClick={() => { addCount('restar') }} src={Rest} />
                            <img className="sumIcon" alt='mas' onClick={() => { addCount('sumar') }} src={Sum} />
                        </Col>
                        <Col className="p-2" lg={6}>$17.000</Col>
                    </Row>
                    <p className="infoProduct">Tenemos envios a domicilio en Bogotá, Cali, <br />
                        Monteria, Neiva, Soledad y Valledupar.
                    </p>
                    <button className="btnCard" onClick={() => { setCont(cont + 1); saveInfo(cont+1) }}>AÑADIR AL CARRITO</button>
                </Card.Body>
            </Card>
        </Container>
    )

}