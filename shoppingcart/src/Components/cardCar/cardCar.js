import { useState } from "react";
import React, { Card, Container } from "react-bootstrap";
import Car from '../../assets/img/car.png';

const CardCar = (props) => {
    const [product, setProduct] = useState([])
    const [show, setShow] = useState(false)
    const getItem = () => {
        setProduct([])
        let value = localStorage.length
        for (let i = 1; i <= value; i++) {
            let indo = JSON.parse(localStorage.getItem('car' + i))
            console.log(indo)
            if (indo != null) {
                setProduct(product => [...product, indo])
            }
        }
        setShow(!show)
    }
    return (
        <>
            <button className="carStyle" onClick={() => { getItem() }}>CARRITO
                <img alt='carrito' src={Car} />
            </button>
            {
                show &&
                <Container>
                    <Card style={{ width: '300px' }}>
                        {
                            product.length !== 0 &&
                            product.map((data, i) => {
                                return (
                                    <div key={i}>
                                        <img alt='store' src={Car} height='50' width='50' />
                                        <p>
                                            Bag Size: {data.id}
                                        </p>
                                        <p>
                                            Count: {data.count}
                                        </p>
                                    </div>
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