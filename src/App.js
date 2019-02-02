import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from './pages/about';
import Contact from './pages/contact';
import Reiki from './pages/reiki';
import Home from './pages/home'
import Ethics from './pages/reikiEthics'
import Nav from './components/Nav'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
  
    };
   
  }

  render() {
    return (
      <React.Fragment>
        <Router>
        
          <div>
            <Nav />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/reiki" component={Reiki} />
                <Route exact path="/ethics" component={Ethics} />
                <Route exact path="/contact" component={Contact} />
              </Switch>
          </div>
        </Router>  
      </React.Fragment>
    );
  }
}

export default App;

