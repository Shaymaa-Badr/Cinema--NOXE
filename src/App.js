import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.js';
import Home from './Components/Home/Home.js';
import Register from './Components/Register/Register.js';
import Login from './Components/Login/Login.js';
import Footer from './Components/Footer/Footer.js';
import NotFound from './Components/NotFound/NotFound.js';
import Movies from './Components/Movies/Movies.js';
import Tv from './Components/Tv/Tv.js';
import ProtectedRoute from './Components/ProtectedRoute.js';

export default class App extends Component {
state ={}
  render() {
    return (
      <Fragment>
        <Navbar></Navbar>
        <div className='container'>
          <Switch>
            <ProtectedRoute path='/movies' component={Movies} />
            <ProtectedRoute path='/tv' component={Tv} />
            <ProtectedRoute path='/home' component={Home}/>
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
            <Route path='/notfound' component={NotFound} />
            <Redirect from='/' exact to='/register' />
            <Redirect to='/notfound' />
          </Switch>
        </div>
        <Footer></Footer>
      </Fragment>
    );
  }
}
