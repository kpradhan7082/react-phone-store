import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import { ButtonContainer } from './ButtonContainer';
import {Link} from 'react-router-dom';

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { closeModal, modalOpen } = value;
                    const { img, title, price } = value.modalProduct;
                    if (!modalOpen) {
                        return null;
                    }
                    else {
                        return (
                            <ModalContainer>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-8 mx-auto col-lg-4 col-md-6 text-center text-capitalize py-4" id="modal">
                                            <h5>Item Added to the cart</h5>
                                            <img src={img} className="img-fluid" alt="Product"></img>
                                            <h5>{title}</h5>
                                            <h5 className="text-muted">Price : ${price}</h5>
                                            <Link to="/">
                                                <ButtonContainer onClick={()=>closeModal()}>
                                                    Products
                                                </ButtonContainer>
                                            </Link>
                                            <Link to="/cart">
                                                <ButtonContainer cart onClick={()=>closeModal()}>
                                                    go to cart
                                                </ButtonContainer>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </ModalContainer>
                        )
                    }
                }}
            </ProductConsumer>
        )
    }
}

const ModalContainer = styled.div`
    position:fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background:rgba(0,0,0,0.3);
    display:flex;
    align-items:center;
    justify-content:center;
    #modal{
        background: var(--mainWhite);
    }
`;
