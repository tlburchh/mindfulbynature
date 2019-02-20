  import React from 'react';
  import PropTypes from 'prop-types';
  import { withStyles } from '@material-ui/core/styles';
  import Paper from '@material-ui/core/Paper';
  import Grid from '@material-ui/core/Grid';
  import { Link } from 'react-router-dom';
  import './home.css'

  const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
      lineHeight: '45px',
      boxShadow: 'none',
      // borderStyle: 'solid',
      // borderWidth: '2px',
    },
    intro: {
      textAlign: 'center',
      lineHeight: '45px',
      fontSize: '25px',
      
    },
  
    
  });
  
  function Home(props) {
    const { classes } = props;
  
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid  item xs={12} >
            <img style={{width: '100%', height: 'auto'}}  src={require ("../../images/SunOnLake.jpg")} alt="" >    
            </img>
          </Grid>
          {/* <Grid item xs={12}>
            <Paper className='colorShift'>
              <br/><br/><br/>
            </Paper>
          </Grid> */}
            {/* <div className="title">
                <h1><b>Mindfulness</b></h1>
                <h2><b>It Is Our Nature</b></h2>
            </div> */}
          <Grid item xs={12} className={classes.intro}>
             <h1>We strive to reconnect people with nature and with themselves</h1>
             <Paper className='colorShift'>
           <br/>
            </Paper>

              <p>We at Mindful by Nature believe that mindfulness is part of human nature. The way we live our lives in today's world has separated us from that innate ability to stay in that space of mindfulness and the busyness of everyday life in our fast-paced society distracts us from our mindful nature. The goal of Mindful by Nature is to help people find that space again by guiding people in mindfulness techniques, assisting in self healing, and bringing people back to nature. With these skills it is our hope that people will see that they can have a more peaceful and fulfilling life by taking the time to respect and reconnect with themselves and with nature. </p>
              
          </Grid>
          <Grid item xs={12}>
            <Paper className='colorShift'>
              <br/>
            </Paper>
          </Grid>
          <Grid item sm={3}>
          <Paper className={classes.paper}>
          <h3>Our Mission</h3>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Paper className={classes.paper}>
          {/* <h2>OUR MISSION</h2>  */}
     <p>
     There are many opportunities for our organization to help the local community around us and to help individuals on a personal level. Mindful by Nature is located in the Research Triangle in North Carolina which includes the major cities of Raleigh, Durham, and Chapel Hill. This is one of the fastest growing areas in the nation and with the increase in population comes many stresses. This gives us the opportunity to help people from these areas. We can do this with one on one sessions, group activities as well as facilitation of mindfulness events for corporations and schools. Our techniques include, but are not limited to, mindfulness coaching, reiki healing and taking people out of the oftentimes stressful city life and letting them experience the beautiful natural landscapes of North Carolina. We look to the future with hopes to expand outside of the Research Triangle so that we can help to reconnect as many people as we can with themselves and the natural world around them.
        <br/><br/>
      Our mission is simple, to give people the tools and space to navigate the stresses of everyday life and to reconnect themselves with the quietness that is within us all.
      </p> 
          
          </Paper>
        </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}><i>“Mindfulness is simply being aware of what is happening right now without wishing it were different; enjoying the pleasant without holding on when it changes (which it will); being with the unpleasant without fearing it will always be this way (which it won’t).”
            <br/><br/>
             ~James Baraz</i></Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div >
            <img className="logo" src={require ("../../images/MbNLogoLake.jpg")} alt="Mindful by Nature logo" >    
            </img>
            </div>

          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>
            <br></br>
            <Link to='/contact'><h1><i>Contact Us!</i></h1></Link>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
  
  Home.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Home);
  