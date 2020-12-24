import React from 'react'
import ShopContext from '../context/shop-context'

const Products = () => {
    return (
        <ShopContext.Consumer>
            {(context) => (
                <>
                    <h1>These are the products from the main context api</h1>

                    {context.products.map((item, i) => {
                        return (
                            <div key={item + i}>
                                <p>
                                    <strong>{item.title}</strong> is{' '}
                                    {item.price}
                                </p>
                                <button
                                    style={{ cursor: 'pointer' }}
                                    onClick={context.addProductToCart(item.id)}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        )
                    })}
                </>
            )}
        </ShopContext.Consumer>
    )
}

export default Products
