export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'

const addProductToCart = (product, state) => {
    console.log('From the reducer just added the product!!', product, state)
}

const removeProductFromCart = (productId, state) => {
    console.log('From the reducer Removed product from cart', productId, state)
}

export const shopReducer = (state, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return addProductToCart(action.product, state)
        case REMOVE_PRODUCT:  return removeProductFromCart(action.productId, state)
        default:
            return state
    }
}
