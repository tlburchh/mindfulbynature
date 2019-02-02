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

function About(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>image</Paper>
        </Grid>
        <Grid item xs={0} sm={3}>
          <Paper className={classes.paper}>
          <h3>About Us</h3>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Paper className={classes.paper}>
          <h2>OUR MISSION</h2> 
     <p>We at Mindful by Nature believe that mindfulness is part of human nature. The way we live our lives in today's world has separated us from that innate ability to stay in that space of mindfulness and the busyness of everyday life in our fast-paced society distracts us from our mindful nature. The goal of Mindful by Nature is to help people find that space again by guiding  people in mindfulness techniques, assisting in self healing, and bringing people back to nature. With these skills it is our hope that people will see that they can have a more peaceful and fulfilling life by taking the time to respect and reconnect with themselves and with nature.<br></br>  
     We feel that there are many opportunities for our organization to help the local community around us and to help individuals on a personal level.  Mindful by Nature is located just outside of the Research Triangle in North Carolina which includes the major cities of Raleigh, Durham,and Chapel Hill.  This is one of the fastest growing areas in the nation and with the increase in population comes many stresses.  This gives us the opportunity to help people from these areas by taking them out of the oftentimes stressful city life and taking them to the beautiful natural landscapes of North Carolina. We look to the future with hopes to expand outside of the Research Triangle so that we can help to reconnect as many people as we can with themselves and the natural world around them.<br></br>
     We hope to accomplish our goal by working with various groups and organizations to spread the word of our company so that we can help larger groups of individuals find that mindful nature connection.  Our primary events to introduce people to Mindful by Nature will include team building exercises for large organizations looking to build morale and trust within their companies, educational field trips and presentations at local schools to spark children’s interest in science and nature while at the same time providing them with techniques to deal with the stresses that they face on a daily basis, and a grassroots movement in which we meet people at local markets and festivals and volunteer to help clean up and beautify local parks. These events will introduce people to who we are and what we are working toward. <br></br>
     We will give people various mindful techniques to quiet the mind so that they may reconnect with the world around them.  These techniques include but are not limited to guided meditation, walking meditation, sound healing and Reiki.</p> 
          
          </Paper>
        </Grid>
        <Grid item xs={0} sm={3}>
        
        </Grid>
        <Grid item xs={12} sm={9}>
          <Paper className={classes.paper}><i>Look deep into nature, and you then will understand everything better.<br/><br/>
          — Albert Einstein</i></Paper>
        </Grid>
      </Grid>
    </div>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
