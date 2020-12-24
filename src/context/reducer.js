export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'

const addProductToCart = (productId) => {
    console.log('Just added the product to cart!!', productId)
}

const removeProductFromCart = (productId) => {
    console.log('Removed product from cart', productId)
}

export const shopReducer = (state, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return addProductToCart(state, cart)

        default:
            return state
    }
}
