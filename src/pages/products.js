import React, { useContext } from 'react'
import LinkProps from 'next/link'
import ShopContext from '../context/shop-context'

const Products = () => {
    const context = useContext(ShopContext)

    const inputInvestHandler = (e) => {
        setInvest(e.target.value)
    }

    const investHandler = (e) => {
        e.preventDefault()

        const percent = 0.5
        let profitMargin = invest * percent

        let monthlyTotal = Math.floor(Number(profitMargin)) + Math.floor(Number(invest))

        let monthlyReturn = []
        let yearlyReturn = 0
        for (let i = 0; i < 12; i++) {
            yearlyReturn += monthlyTotal
            monthlyReturn.push(monthlyTotal)

            const gainMargin = monthlyTotal * percent
            monthlyTotal = Math.floor(Number(monthlyTotal)) + Math.floor(Number(gainMargin))

            console.log('final monthly total', monthlyTotal)
        }

        // const year =12

        // const total = year.map((item, i) => {
        //     return item
        // })

        setShowMonthly(monthlyReturn)

        setShowTotal(yearlyReturn)

        console.log('monthly', showMonthly)
        console.log('yearly', yearlyReturn)
    }
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
            <div
                style={{
                    display: 'grid',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '0 25rem',
                }}
            >
                {showMonthly.map((item, i) => {
                    return (
                        <li key={item} style={{ fontSize: '1.5rem' }}>
                            After month {i + 1} ={' '}
                            <span
                                style={{
                                    fontSize: '2.5rem',
                                    fontWeight: 'bold',
                                }}
                            >
                                N{item.toLocaleString()}
                            </span>
                        </li>
                    )
                })}
                <h1
                    style={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: '3rem',
                        margin: '3rem 0',
                    }}
                >
                    N{showTotal.toLocaleString()}
                </h1>
                <form onSubmit={investHandler}>
                    <input
                        style={{
                            background: 'white',
                            height: '5rem',
                            fontSize: '3rem',
                            padding: '1rem',
                        }}
                        type='number'
                        onChange={inputInvestHandler}
                        value={invest}
                    />
                    <button
                        style={{
                            fontSize: '2rem',
                            textAlign: 'center',
                            padding: '1rem',
                            cursor: 'pointer',
                        }}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </>
    )
}

export default Products
