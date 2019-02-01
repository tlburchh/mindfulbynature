import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


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

function Reiki(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>image</Paper>
        </Grid>
        <Grid item xs={0} sm={3}>
          <Paper className={classes.paper}>about us</Paper>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Paper className={classes.paper}>Code of Ethics</Paper>
        </Grid>
        
      </Grid>
    </div>
  );
}

Reiki.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Reiki);