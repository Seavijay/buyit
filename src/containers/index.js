import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Header from '../components/header'
import Home from './home'
import Mycart from './myCart'
import MyFavor from './myFavor'
import Service from './service'
import SignUp from './signUp'
import SignIn from './SignIn'
import Footer from '../components/footer'

const App = () => (
    <HashRouter>
        <>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/signUp" component={SignUp} />
                <Route path="/signIn" component={SignIn} />
                <Route path="/myCart" component={Mycart} />
                <Route path="/myFavor" component={MyFavor} />
                <Route path="/service" component={Service} />
            </Switch>
            <Footer />
        </>
    </HashRouter>
)

export default App
