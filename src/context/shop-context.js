import React from 'react'

export default React.createContext({
    products: [
        {id: 1, name: 'Gaming Mouse', price: 56.21},
        {id: 2, name: 'Keyboard', price: 120.05},
        {id: 3, name: 'Gaming Monitor', price: 1200.00},
        {id: 4, name: 'Laptop', price: 2320.99},
    ],
    cart: []
})

