import React from "react";
// import { render } from "react-dom";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    footerStyle : {
    backgroundColor: "blue",
    opacity: '0.1',
    fontSize: "15px",
    color: "white",
    borderTop: "1px solid #E7E7E7",
    textAlign: "left",
    padding: "20px",
    // position: "fixed",
    left: "0",
    bottom: "0",
    height: "70px",
    width: "100%"
  },
  

});

function Footer(props) {
  const { classes } = props;
  return (
    <div>
      <div className={classes.footerStyle}>
        <p>Mindful by Nature 2019 ©</p>
      </div>
    </div>
  );
}


Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);