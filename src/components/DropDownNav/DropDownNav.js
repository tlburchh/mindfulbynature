import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import './DropDownNav.css'
import MenuIcon from '@material-ui/icons/Menu';
 
class SimpleMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        
        >
          
            <MenuIcon style={{height: '60px', width: '60px'}} />
          
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem className="menuItem" onClick={this.handleClose} component={Link} to="/home">Home</MenuItem>
          <MenuItem className="menuItem" onClick={this.handleClose} component={Link} to="/about">About</MenuItem>
          <MenuItem className="menuItem" onClick={this.handleClose} component={Link} to="/services">Services</MenuItem>
          <MenuItem className="menuItem" onClick={this.handleClose} component={Link} to="/reiki">Reiki</MenuItem>
          {/* <MenuItem onClick={this.handleClose} component={Link} to="/contact">Contact</MenuItem>
           */}
             {/* <!-- Start Square Appointments Embed code -->  */}
             <Button id="menuItem" target="_top" 
           
           href="https://squareup.com/appointments/book/A4SW79J1QVXQ6/mindful-by-nature-durham-nc" rel="nofollow"><b>Appointments</b></Button> 
           {/* <!-- End Square Appointments Embed code -->   */}
        </Menu>
      </div>
    );
  }
}

export default SimpleMenu;