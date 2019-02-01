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
  
  function Home(props) {
    const { classes } = props;
  
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            {/* <Paper className={classes.paper}>xs=12 sm=6</Paper> */}
 <img src="https://static1.squarespace.com/static/5ab2db1e85ede1cb9c2aaf44/t/5ab2dd1e352f534840ed807a/1521671460032/IMG_20170929_164510624.jpg?format=2500w"></img>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>xs=12 sm=6</Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
  
  Home.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Home);
  