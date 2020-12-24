export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'

const addProductToCart = (product, state) => {
    console.log('Just added the product to cart!!', product, state)
}

const removeProductFromCart = (productId, state) => {
    console.log('Removed product from cart', productId, state)
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
