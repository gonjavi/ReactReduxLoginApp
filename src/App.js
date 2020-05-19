import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/navbar';
import Dashboard from './components/dashboard/dashboard';
import ProjectDetail from './components/projects/ProjectDetail';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProjects';

class App extends Component {
  render() {
    return ( 
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route  exact path='/' component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetail} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path="/create" component={CreateProject} />
           </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
