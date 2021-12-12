import './App.css';
import { Fragment } from 'react/cjs/react.production.min';
import React, { Component } from 'react'
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';

export class App extends Component {
  render() {
    return (
      <div>
        <Fragment>
          <Home />
        {/* <Login /> */}
        </Fragment>
      </div>
    )
  }
}

export default App
