import React, { Component } from 'react'
import Title from './Title'
import {ProductConsumer} from '../context'
import Product from './Product'

export default class ProductList extends Component {
    state={
        productList : []
    }
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                <div className="container">
                    <Title name="Our" title="Product"></Title>
                </div>
                <div className="row px-5">
                    <ProductConsumer>
                        {(value)=>{
                           return value.productList.map((product)=>{
                            return <Product key={product.id} product={product}></Product>
                           }) 
                        }}
                    </ProductConsumer>
                </div>
                </div>
            </React.Fragment>   
        )
    }
}
