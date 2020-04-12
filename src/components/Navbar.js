import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import {ButtonContainer} from './ButtonContainer'
import styled from 'styled-components'

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to="/">
                    <img src={logo} alt="Store" className="navbar-brand" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            Products
                            </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <i className="fa fa-cart-plus" aria-hidden="true">My Cart</i>
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
    background : var(--mainBlue);
    .nav-link {
        text-transform : capitalize;
        font-size : 1.3rem;
        color : var(--mainWhite) !important;
    }
`


