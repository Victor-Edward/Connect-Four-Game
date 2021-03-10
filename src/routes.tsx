import React from 'react'
import {
    BrowserRouter, Route
} from 'react-router-dom'
import ConnectFour  from './Page/index'



const Router = () => {
    return (
        <BrowserRouter>
            <Route path='/' component={ConnectFour} exact/>
        </BrowserRouter>
    )
}
export default Router