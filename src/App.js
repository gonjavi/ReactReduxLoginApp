import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/navbar';
import Dashboard from './components/dashboard/dashboard';
import ProjectDetail from './components/projects/ProjectDetail';

class App extends Component {
  render() {
    return ( 
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route  exact path='/' component={Dashboard} />
            {/* react route attach component  */} 
            <Route path='/project/:id' component={ProjectDetail} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
