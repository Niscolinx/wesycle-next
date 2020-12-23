import React, {useState} from 'react'
import ShopContext from '../context/shop-context'

const App = () => {

    const [state, setState] = useState({
        products: [
            { id: 1, title: 'Gaming Mouse', price: 56.21 },
            { id: 2, title: 'Keyboard', price: 120.05 },
            { id: 3, title: 'Gaming Monitor', price: 1200.0 },
            { id: 4, title: 'Laptop', price: 2320.99 },
        ],
        cart: [],
    })


    const addProductToCart = productId => {
        console.log('Just added the product to cart!!', productId)
    }

    const removeProductFromCart = productId => {
        console.log('Removed product from cart', productId)
    }

    return (
        <ShopContext.Provider value={{
            products: state.products,
            cart: state.cart,
            addProductToCart: addProductToCart,
            removeProductFromCart: removeProductFromCart
        }}>
            <div>
                <h1 className='main'>
                    Welcome to the main app, in a short while, it will be
                    changed!
                </h1>
            </div>
        </ShopContext.Provider>
    )
}

export default App
