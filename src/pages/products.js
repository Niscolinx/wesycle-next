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
                                <p>{item.title} is {item.price}</p>
                                <button
                                    style={{cursor: 'pointer'}}
                                    onClick={context.addProductToCart()}
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
