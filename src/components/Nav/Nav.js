import React from 'react';
// import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import './Nav.css'
class Nav extends React.Component {
  state = {
  
  };

  render() {
   

    return (
      <React.Fragment>
      <div className="navbar">
        <div className="navbarContent">
    
          <Link to="/"><img src="http://via.placeholder.com/150" alt="Mindful by Nature" /></Link>
          <Link to="/about">About</Link>
          <Link to="/reiki">Reiki</Link>
          <Link to="/contact">Contact</Link>
         
          {/* <a href="#">Link 2</a>
          <a href="#">Link 3</a> */}
      </div>
    </div>
    </React.Fragment>
    );
  }
}

export default Nav;
