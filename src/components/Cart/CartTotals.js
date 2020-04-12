import React from 'react'
import { Link } from 'react-router-dom';

export default function CartTotals({ value }) {
    const { sectionTotal, cartTotal, cartTax, clearCart } = value
    return (
        <React.Fragment>
            <div class="container">
                <div class="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto text-right">
                        <Link to="/">
                            <div className="btn btn-outline-danger text-uppercase mb-3 px-5" onClick={()=>clearCart()}>
                                clear cart
                        </div>
                        </Link>
                        <h5>
                            <span className="text-title">SubTotal : </span><strong>$ {sectionTotal}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">Tax : </span><strong>$ {cartTax}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">Total : </span><strong>$ {cartTotal}</strong>
                        </h5>
                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}
