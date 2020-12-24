import React, {useContext} from 'react'
import ShopContext from '../context/shop-context'

const Products = () => {

   // const context = useContext(ShopContext)
    return (
        <ShopContext.Consumer>
            {(context) => (
                <>
                    <h1>These are the products from the main context api</h1>

                    {context.products.map((item, i) => {
                        return (
                            <div key={item + i} style={{fontSize: '2rem'}}>
                                <p>
                                    <strong>{item.title}</strong> is{' '}
                                    {item.price}
                                </p>
                                <button
                                    style={{ cursor: 'pointer',fontSize: '1.6rem' }}
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
