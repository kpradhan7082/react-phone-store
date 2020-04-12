import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data'

const ProductContext = React.createContext();



class ProductProvider extends Component {
    state = {
        productList: [],
        productDetail: detailProduct,
        inCart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        cart: [],
        quantity: 0,
        sectionTotal: 0,
        cartTotal: 0,
        cartTax: 0
    }
    componentDidMount() {
        this.storeProducts();
    }

    storeProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            let tempItem = { ...item };
            tempProducts = [...tempProducts, tempItem];
        });
        this.setState({ productList: tempProducts });

    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetailFunction: this.handleDetail,
                addToCartFunction: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                clearCart: this.clearCart,
                deleteItem: this.deleteItem
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }

    getItem = (id) => {
        const product = this.state.productList.find(item => item.id === id);
        return product;
    }

    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return { productDetail: product }
        })
    }

    addToCart = (id) => {
        let tempProducts = [...this.state.productList];
        const productIndex = tempProducts.indexOf(this.getItem(id));
        const tempProduct = tempProducts[productIndex];
        tempProduct.inCart = true;
        tempProduct.count = 1;
        tempProduct.total = tempProduct.price;
        this.setState(() => {
            return { productList: tempProducts, inCart: [...this.state.inCart, tempProduct], cart: [...this.state.cart, tempProduct] }
        },this.addTotals)
    }

    openModal = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return { modalOpen: true, modalProduct: product };
        });
    }

    closeModal = () => {
        this.setState(() => {
            return { modalOpen: false };
        });

    }

    increment = (id) => {
        const tempProducts = this.state.cart;
        const price = this.getItem(id).price;
        const product = tempProducts.find(item => item.id === id);
        product.count = product.count + 1;
        product.total = product.count * price;
        this.setState(() => {
            return { cart: tempProducts }
        },this.addTotals)
    }

    decrement = (id) => {
        const tempProducts = this.state.cart;
        const price = this.getItem(id).price;
        const product = tempProducts.find(item => item.id === id);
        if (product.count === 1) {
            //Delete the item
            this.deleteItem(id);
        }
        else {
            product.count = product.count - 1;
            product.total = product.count * price;
            this.setState(() => {
                return { cart: tempProducts }
            },this.addTotals)
        }
    }

    clearCart = () => {
        const tempProducts = this.state.cart;
        tempProducts.forEach((item => {
            item.inCart = false;
        }))
        this.setState(() => {
            return { cart: [] }
        },this.addTotals)
    }

    deleteItem = (id) => {
        let tempProducts = this.state.cart;
        const productIndex = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts.find(item => item.id === id);
        product.inCart = false;
        tempProducts.splice(productIndex, 1)
        this.setState(() => {
            return { cart: tempProducts }
        },this.addTotals)
    }

    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item => {
            return subTotal += item.total;
        })
        const tempTax = subTotal * .1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState(() => {
            return {
                sectionTotal: subTotal,
                cartTax: tax,
                cartTotal: total
            }
        })
    }
}

const ProductConsumer = ProductContext.Consumer

export { ProductProvider, ProductConsumer }

