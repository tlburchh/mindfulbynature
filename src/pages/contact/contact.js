import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './contact.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: 'none',
    borderStyle: 'solid',
    borderWidth: '2px',
  },
});

function Contact(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid style={{maxHeight:'200px', overflow:'hidden'}} item xs={12}>
           <img style={{width: '100%', height: 'auto'}}  src={require ("../../images/Sunrise.jpg")} alt="" ></img>

        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>contact info</Paper>
        </Grid>

      </Grid>
    </div>
  );
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);
