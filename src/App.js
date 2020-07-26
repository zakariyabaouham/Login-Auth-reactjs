import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import Login from './Components/Login';
import Admin from './Components/Admin';
import Logout from './Components/Logout';
import {BrowserRouter, Switch, Route } from 'react-router-dom';





class App extends Component {
  render(){
    return (
      <BrowserRouter>
       <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/logout" component={Logout} />
      </Switch>
      </BrowserRouter>
    );
      
  }
} 


  

/*onst A = () => {
  return (
    <div>
      <h1>This is </h1>
    </div>
  )
} */

export default App;
