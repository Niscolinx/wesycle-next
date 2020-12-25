import React, { useContext } from 'react'
import LinkProps from 'next/link'
import GlobalState from '../context/globalState'
import ShopContext from '../context/shop-context'

const App = () => {
    const context = useContext(ShopContext)

    return (
        <GlobalState>
            <div>
                <h1 className='main'>
                    Welcome to the main app, in a short while, it will be
                    changed!
                </h1>
                <h2>
                    <LinkProps href='/products'>
                        Go to the Products page by clicking here
                    </LinkProps>
                </h2>

                {context.products.map((item, i) => (
                    <div key={item + i} style={{ fontSize: '2rem' }}>
                        <p>
                            <strong>{item.title}</strong> is {item.price}
                        </p>
                        <button
                            style={{
                                cursor: 'pointer',
                                fontSize: '1.6rem',
                            }}
                            onClick={
                                () => context.addProductToCart()
                            }
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </GlobalState>
    )
}

export default App
