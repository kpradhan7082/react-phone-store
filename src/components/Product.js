import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ProductConsumer } from '../context';

export default class Product extends Component {
    render() {
        const { id, title, img, price, inCart } = this.props.product;
        return (
            <ProductWrapper className="col-9 col-md-6 col-lg-3 mx-auto my-3">
                <div className="card" >
                    <ProductConsumer>
                        {value => {
                            return (
                                <div className="img-container p-5" onClick={() => value.handleDetailFunction(id)}>
                                    <Link to="/details">
                                        <img className="card-img-top" src={img} alt="Product" ></img>
                                    </Link>
                                    <button disabled={inCart}
                                        className="cart-btn"
                                        onClick={
                                            () => {
                                                value.addToCartFunction(id);
                                                value.openModal(id);
                                            }}
                                    >
                                        {inCart ? (<p className="text-capitalize">in cart</p>) : <i className="fa fa-cart-plus"></i>}
                                    </button>
                                </div>
                            )
                        }}

                    </ProductConsumer>
                </div>
                <div className="card-footer d-flex justify-content-between">
                    <p>{title}</p>
                    <h5><span className="">$</span>{price}</h5>
                </div>
            </ProductWrapper>
        )
    }
}

const ProductWrapper = styled.div`
.card{
    background : white;
    border : white;
}
.card-footer{
    background : white;
    border-top : white;
}
.img-container{
    position : relative;
    overflow : hidden;
}
.card-img-top{
    transition : all .5s linear;
}
.img-container:hover .card-img-top{
    transform : scale(1.2);
}
.cart-btn{
    position:absolute;
    bottom : 0;
    right : 0;
    padding : 0.2rem 0.4rem;
    background : var(--lightBlue);
    border : none;
    font-size : 1.8rem;
    color : var(--mainWhite);
    transition : all .5s linear;
}
.img-container:hover .card-btn{
    transform : translate(0,0);
}
.cart-btn:hover{
    color : var(--mainBlue);
    cursor : pointer; 
}
`
Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        img: PropTypes.string,
        price: PropTypes.number,
        company: PropTypes.string,
        inCart: PropTypes.bool
    }).isRequired
}