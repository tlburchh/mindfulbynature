import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import './reiki.css';

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
        <Grid style={{maxHeight:'200px', overflow:'hidden'}} item xs={12}
          >
           <img style={{width: '100%', height: 'auto'}} src={require ("../../images/mountain.jpg")} alt="" ></img>
        </Grid>
        <Grid item xs={0} sm={3}>
        <Paper className={classes.paper}>
          <h3>Reiki</h3>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={9}>
        <img className="midImage" src={require ("../../images/waterfall.jpg")} alt="" ></img>
          <Paper className={classes.paper} id= "description">
          <b>“REIKI” (RAY-KEY) IS JAPANESE FOR ‘UNIVERSAL LIFE ENERGY, AND IS ALSO A WORD USED TO DESCRIBE A SYSTEM OF NATURAL HEALING, THIS TRADITION WAS FOUNDED BY MIKAO USUI IN THE EARLY 20TH CENTURY AND EVOLVED AS A RESULT OF HIS RESEARCH, EXPERIENCE AND DEDICATION.</b>
          <br/><br/><br/>
          <p>We live in a world of energy that nourishes and maintains all living things. When this energy flows uninterrupted there is balance and harmony within and around us, and we experience a sense of well being.
          <br/><br/>
          There are many variations of Reiki, but in essence Reiki treatments can help the body emotionally or spiritually. It is a tradition that is open to any belief system.
          <br/><br/>
          Reiki treatment is a process that anyone can enjoy in the normal course of their life. Reiki can be used alongside other conventional or complementary treatment and often helps to provide emotional support during recovery.
          <br/><br/>
          The practice is taught by Reiki masters / teachers who have trained in the tradition passed on in person from master to student.
          <br/><br/>
          <a href="https://www.reikiassociation.net">The Reiki Association</a></p>
          
          </Paper>
        </Grid>
        <Grid item xs={12}>
        <Paper className={classes.paper}><Link to='/Ethics'><h1><i>Reiki Code of Ethics</i></h1></Link></Paper>
        
        </Grid>
      </Grid>
    </div>
  );
}

Reiki.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Reiki);