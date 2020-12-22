import ShopContext from '../context/shop-context'

const App = () => {
    return (
        <ShopContext>
            <div>
                <h1 className='main'>
                    Welcome to the main app, in a short while, it will be
                    changed!
                </h1>
            </div>
        </ShopContext>
    )
}

export default App
