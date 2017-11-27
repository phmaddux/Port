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
  state = {
    projects: []
  }
  async componentWillMount() {
    try {
      const response = await axios.get('/api/projects')
      console.table(response.data)
      this.setState({ projects: response.data })
    } catch (error) {
      console.log(error)
    }
  }
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
