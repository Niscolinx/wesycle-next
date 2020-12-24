import React, { useReducer } from 'react'
import LinkProps from 'next/link'
import GlobalState from '../context/globalState'

const App = () => {
    return (
        <GlobalState>
            <div>
                <h1 className='main'>
                    Welcome to the main app, in a short while, it will be
                    changed!
                </h1>
                <h2>Go to the Products page by clicking <LinkProps href='/products'>here</LinkProps></h2>
            </div>
        </GlobalState>
    )
}

export default App
