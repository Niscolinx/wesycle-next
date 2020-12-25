import React, { useContext } from 'react'
import LinkProps from 'next/link'
import ShopContext from '../context/shop-context'

const Products = () => {
    const context = useContext(ShopContext)
    return (
        <>

            <h2>
                <LinkProps href='/'>Go back to home</LinkProps>
            </h2>

            <h1>The cart</h1>
            {context.cart.map((item, i) => (
                <div key={item + i} style={{ fontSize: '2rem' }}>
                    <p>
                        <strong>{item}</strong>
                    </p>
                    <button
                        style={{
                            cursor: 'pointer',
                            fontSize: '1.6rem',
                        }}
                        onClick={(item) =>
                            context.removeProductFromCart.bind(this, item)
                        }
                    >
                        Add to Cart
                    </button>
                </div>
            ))}
        </>
    )
}

export default Products
