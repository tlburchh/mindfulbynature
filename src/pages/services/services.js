import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import './services.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: 'none',
    // borderStyle: 'solid',
    // borderWidth: '2px',
  },
});

function Reiki(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid style={{maxHeight:'350px', overflow:'hidden'}} item xs={12}
          >
           <img style={{width: '100%', height: 'auto'}} src={require ("../../images/sky.jpg")} alt="" ></img>
        </Grid>
        <Grid item  sm={3}>
        <Paper className={classes.paper}>
          <h3>Our Services</h3>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Paper className={classes.paper} id= "description">
          <h3>One-on-one .Sessions - Face to face or online</h3>
          <ul>
            <li>Mindfulness Coaching (30 minute, 60 minute)</li>
            <li>Reiki healing (30 minute, 60 minute)</li>
          </ul>
          <br/>
          <h3>Group .Sessions</h3>
          <ul>
            <li>Mindfulness Coaching (30 minute, 60 minute)</li> 
            <li>Mindful nature excursions (time varies)</li>
            <li>Reiki classes and attunements (~6-8 hours)</li>
          </ul>
          <br/>
          <h3>Corporate and .School Programs</h3>
	        <h5>Packages may include the following:</h5>
          <ul>
             <li>An introduction to mindfulness practices (60 minutes)</li> 
             <li>21 - Day Mindfulness Challenge</li> 
             <li>6 - Week Mindfulness Challenge</li>
          </ul>

          
          </Paper>
        </Grid>
        <Grid item sm={3}>
        <Paper className={classes.paper}>
          <h3>Please Note</h3>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Paper className={classes.paper} id= "description">
         <p> Reiki sessions given involve a <b>hands-off</b> method of energy balancing for the purpose of pain management, stress reduction and relaxation. Clients understand very clearly that a mindfulness class or Reiki session is not a substitute for medical, or psychological diagnosis, and treatment. Clients understand that Mindful by Nature practitioners do not diagnose conditions, nor do they prescribe, perform medical treatment, nor prescribe substances, nor interfere with the treatment of a licensed medical professional. It is recommended that clients see a licensed physician, or licensed healthcare professional for any physical, or psychological ailment clients have. Clients understand that the practitioner will be placing hands <b>above</b> clients body during a Reiki session and permit accidental contact to clients body during the session.</p>
          
          </Paper>
        </Grid>


        <Grid item xs={12}>
        <Paper className={classes.paper}>
        
        <h2><b><b>*Important*</b> Please Read the</b></h2>
        <Link to='/mbnEthics'><h1><i>Mindful by Nature Code of Ethics</i></h1></Link></Paper>
        </Grid>
      </Grid>
    </div>
  );
}

Reiki.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Reiki);