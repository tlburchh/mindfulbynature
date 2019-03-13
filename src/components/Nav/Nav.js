import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import DropDownNav from '../DropDownNav'
import './Nav.css'
// import { orange } from '@material-ui/core/colors';
class Nav extends React.Component {
  state = {
  
  };

  render() {
   

    return (
      <React.Fragment>
      <div className="navbar">
        
    
          <Link to="/"><img src={require("../../images/mindfulbynature-black.png")} alt="Mindful by Nature" /></Link>
       
        
          <div className="links">
          <Link to="/about"><b>About</b></Link>
          <Link to='/services'><b>Services</b></Link>
          <Link to="/reiki"><b>Reiki</b></Link>
          {/* <Link to="/contact"><b>Contact</b></Link> */}
          {/* <!-- Start Square Appointments Embed code -->  */}
          <Button id="submitButton" target="_top" 
           
          href="https://squareup.com/appointments/book/A4SW79J1QVXQ6/mindful-by-nature-durham-nc" rel="nofollow"><b>Schedule a Session</b></Button> 
          {/* <!-- End Square Appointments Embed code -->   */}
        </div>
        <div className="dropdown">
        <DropDownNav />
         </div>
          {/* <a href="#">Link 2</a>
          <a href="#">Link 3</a>

          {/* dropdown menu */}
          
      
    </div>
    </React.Fragment>
    );
  }
}

export default Nav;


