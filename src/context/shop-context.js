import React from 'react'

export default React.createContext({
    products: [
        { id: 1, title: 'Gaming Mouse', price: 56.21 },
        { id: 2, title: 'Keyboard', price: 120.05 },
        { id: 3, title: 'Gaming Monitor', price: 1200.0 },
        { id: 4, title: 'Laptop', price: 2320.99 },
    ],
    cart: ['items1', 'item2', 'item3'],
    addProductToCart: (product) => {},
    removeProductFromCart: () => {},
})
