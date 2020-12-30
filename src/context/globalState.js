import React, { useReducer } from 'react'
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from '../context/reducer'
import ShopContext from '../context/shop-context'

const GlobalState = (props) => {
    const products = [
        { id: 1, title: 'Gaming Mouse', price: 56.21 },
        { id: 2, title: 'Keyboard', price: 120.05 },
        { id: 3, title: 'Gaming Monitor', price: 1200.0 },
        { id: 4, title: 'Laptop', price: 2320.99 },
    ]
    //cart: ['items1', 'item2', 'item3'],

    const [cartState, dispatch] = useReducer(shopReducer, {cart: []})

    const addProductToCart = (product) => {
        console.log('Just added the product to cart!!', product)

      //  dispatch({ type: ADD_PRODUCT, product })
    }

    const removeProductFromCart = (productId) => {
        console.log('Removed the product from cart', productId)

        dispatch({ type: REMOVE_PRODUCT, productId })
    }

    return (
        <ShopContext.Provider
            value={{
                products,
                cart: cartState.cart,
                addProductToCart,
                removeProductFromCart,
            }}
        >
            {props.children}
        </ShopContext.Provider>
    )
}

export default GlobalState
