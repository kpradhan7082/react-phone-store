import React, { Component } from 'react'
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './ButtonContainer';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { id, title, img, price, company, info, inCart } = (value.productDetail);
                    return (
                        <div className="container">
                            <div className="row py-6 m-3 align-center">
                                <h1>{title}</h1>
                            </div>
                            <div className="row">
                                <div className="col-4 md-6">
                                    <img src={img} className="img-fluid" alt="Product"></img>
                                </div>
                                <div className="col-8 md-6">
                                    <h4>{title}</h4>
                                    <h4 className="text-title py-3">Made by : {company}</h4>
                                    <h4 className="text-blue py-0"><strong>Price : ${price}</strong></h4>
                                    <p className="font-weight-bold py-2">Some info about the product</p>
                                    <p className="py-2 text-capitalize text-muted lead">{info}</p>
                                    <Link to="/">
                                        <ButtonContainer>
                                            Back to Products
                                        </ButtonContainer>
                                    </Link>
                                    <ButtonContainer
                                        cart
                                        disabled={inCart}
                                        onClick={() => {
                                            value.addToCartFunction(id);
                                            value.openModal(id);
                                        }}>
                                        {inCart ? "InCart" : "Add to Cart"}
                                    </ButtonContainer>
                                </div>
                            </div>
                        </div>
                    );
                }}
            </ProductConsumer>
        )
    }
}
