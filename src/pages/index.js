import React, { useReducer } from 'react'
import GlobalState from '../context/globalState'

const App = () => {
    return (
        <GlobalState>
            <div>
                <h1 className='main'>
                    Welcome to the main app, in a short while, it will be
                    changed!
                </h1>
            </div>
        </GlobalState>
    )
}

export default App
