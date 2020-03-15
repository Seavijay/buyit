import React from 'react';
import TopBar from '../components/topBar'
import MyCartBanner from '../components/myCartBanner'
import Footer from'../components/footer'

export default class My extends React.omponent{
    render(){
        return(
            <div>
                <TopBar />
                <MyCartBanner />
                <Footer />
            </div>
        )
    }

}

