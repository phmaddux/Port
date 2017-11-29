import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar.js'
import Personal from './components/Personal.js'
import ProjectList from './components/ProjectList.js'
import Resume from './components/Resume.js'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <NavBar />
            <Switch>
              <Route exact path="/" component={Personal} />
              <Route exact path="/Resume" component={Resume} />
              <Route exact path="/Experience" component={ProjectList} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
