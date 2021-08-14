import Movies from './components/movies.jsx';
import { Redirect, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import Customers from './components/customers.jsx';
import Rentals from './components/rentals.jsx';
import NotFound from './components/notFound.jsx';
import NavBar from './components/navBar.jsx';
import MovieForm from './components/movieForm.jsx';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <NavBar />
        <main>
          <Switch>
            <Route path='/login' component={LoginForm} />
            <Route path='/register' component={RegisterForm} />
            <Route path='/movies/:id' component={MovieForm} />
            <Route path='/movies' component={Movies} />
            <Route path='/customers' component={Customers} />
            <Route path='/rentals' component={Rentals} />
            <Route path='/not-found' component={NotFound} />
            <Redirect from='/' exact to='/movies' />
            <Redirect to='/not-found' />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
