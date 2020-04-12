import React from 'react'

export default function CartColumns() {
    return (
        <div className="container-fluid mt-5 text-center d-none d-lg-block">
            <div className="row">
                <div className="col-2 text-uppercase mx-auto">
                    <p>Products</p>
                  </div>
                <div className="col-2 text-uppercase mx-auto">
                     <p>Name of Products</p>
                  </div>
                <div className="col-2 text-uppercase mx-auto">
                     <p>Price</p>
                  </div>
                <div className="col-2 text-uppercase mx-auto">
                     <p>Quantity</p>
                  </div>
                <div className="col-2 text-uppercase mx-auto">
                     <p>Remove</p>
                  </div>
                  <div className="col-2 text-uppercase mx-auto">
                     <p>Total</p>
                  </div>
            </div>
        </div>
    )
}
