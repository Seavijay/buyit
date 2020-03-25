import React from 'react'
import MyCartBanner from '../components/cart'

export default class MyCart extends React.Component {
    render() {
        return (
            <div className="myCart">
                <MyCartBanner />
            </div>
        )
    }
}
