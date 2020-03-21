import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import TopBar from '../components/topBar';
import Home from './home';
import Mycart from './myCart';
import MyFavor from './myFavor'
import Service from './service';
import SignUp from './signUp';
import SignIn from './SignIn';
import Footer from '../components/footer';



export default class Index extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <TopBar />
          <Switch >
            <Route exact path="/" component={Home} />
            <Route path="/signUp" component={SignUp} />
            <Route path="/signIn" component={SignIn} />
            <Route path="/myCart" component={Mycart} />
            <Route path="/myFavor" component={MyFavor} />
            <Route path="/service" component={Service} />
          </Switch>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}