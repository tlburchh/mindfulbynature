  import React from 'react';
  import PropTypes from 'prop-types';
  import { withStyles } from '@material-ui/core/styles';
  import Paper from '@material-ui/core/Paper';
  import Grid from '@material-ui/core/Grid';
// import { Typography } from '@material-ui/core';
  
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
    intro: {
      textAlign: 'center',
      
    },
    img: {
      height: '200px'
    }
  });
  
  function Home(props) {
    const { classes } = props;
  
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12} >
            <img src={require ("../images/SunOnLake.jpg")} alt="" >
             
            </img>
             
          </Grid>
          <Grid item xs={12} className={classes.intro}>
             <h2>We strive to reconnect people with nature and with themselves</h2><br></br>
              <p>We at Mindful by Nature believe that mindfulness is part of human nature. The way we live our lives in today's world has separated us from that innate ability to stay in that space of mindfulness and the busyness of everyday life in our fast-paced society distracts us from our mindful nature. The goal of Mindful by Nature is to help people find that space again by guiding people in mindfulness techniques, assisting in self healing, and bringing people back to nature. With these skills it is our hope that people will see that they can have a more peaceful and fulfilling life by taking the time to respect and reconnect with themselves and with nature. </p>
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
  