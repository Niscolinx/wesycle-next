import React from 'react'

export default React.createContext({
    products: [
        {id: 1, title: 'Gaming Mouse', price: 56.21},
        {id: 2, title: 'Keyboard', price: 120.05},
        {id: 3, title: 'Gaming Monitor', price: 1200.00},
        {id: 4, title: 'Laptop', price: 2320.99},
    ],
    cart: [],
    addProductToCart: (productId) => {},
    removeProductFromCart: (productId) => {},
})

