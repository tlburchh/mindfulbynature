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
        <Grid style={{maxHeight:'350px', overflow:'hidden'}} item xs={12}>
           <img style={{width: '100%', height: 'auto'}}  src={require ("../../images/Sunrise.jpg")} alt="" ></img>

        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <React.Fragment>
          <h3>Get in Touch!</h3>
          <form method="POST" action="https://formspree.io/mindfulbynature@gmail.com">
              <div className="form-group" >
                <label for="exampleInputEmail1" ></label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                <small id="emailHelp" class="form-text text-muted" >We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Enter message here."></textarea>
              </div>
              <div className="form-group">
                  <button type="submit" class="btn badge-pill">Submit</button>
              </div>
            </form>
          </React.Fragment>
          </Paper>
        </Grid>

      </Grid>
    </div>
  );
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);
