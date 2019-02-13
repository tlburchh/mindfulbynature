import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import Reiki from './pages/reiki/reiki';
import Home from './pages/home/home'
import Ethics from './pages/reikiEthics/reikiEthics'
import MbNEthics from './pages/mbnEthics/mbnEthics'
import Services from './pages/services/services'
import Nav from './components/Nav'
import Footer from './components/Footer'

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
                <Route exact path="/services" component={Services} />
                <Route exact path="/mbnethics" component={MbNEthics} />

              </Switch>
              <Footer/>
          </div>
        </Router>  
      </React.Fragment>
    );
  }
}

export default App;

