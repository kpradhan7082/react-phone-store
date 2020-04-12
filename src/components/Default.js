import React, { Component } from 'react'

export default class Default extends Component {
   
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-title text-center text-uppercase pt-5">
                        <h3 className="display-3">404</h3>
                        <h1>Error</h1>
                        <h1>Page Not Found</h1>
                        <h1>The url <span className="text-danger">{this.props.location.pathname}</span> was not found</h1>
                    </div>
                </div>
            </div>
        )
    }
}
