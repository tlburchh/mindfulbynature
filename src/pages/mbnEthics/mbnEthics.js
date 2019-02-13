import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './mbnEthics.css'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
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
        <Grid style={{maxHeight:'350px', overflow:'hidden'}} item xs={12}>       
            <img style={{width: '100%', height: 'auto'}}  src={require ("../../images/sky.jpg")} alt="" ></img>           
        </Grid>
        <Grid item xs={0} sm={3}>
          <Paper className={classes.paper}>Mindful by Nature Code of Conduct</Paper>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Paper className={classes.paper}>
          <h3>Our Values</h3>
          <br/><br/>
          <p>1. Abide by a vow of confidentiality. Any information that is discussed within the context of a session is confidential between the client and practitioner. 
          <br/><br/>
          2. Provide a safe and comfortable area for sessions or classes and work to provide an empowering and supportive environment for clients and students. 
          <br/><br/>
          3. Always treat clients and students with the utmost respect and honor. 
          <br/><br/>
          4. Have a pure and clear intention to offer your services for the highest healing good of the client and highest potential of the student. 
          <br/><br/>
          5. Provide a brief oral or written description of what happens during a session and what to expect before a client’s initial session.
          <br/><br/> 
          6. Be respectful of all others’ mindfulness and  Reiki views and paths. 
          <br/><br/>
          7. Educate clients/students on the value of Mindfulness/Reiki and explain that sessions do not guarantee a cure, nor are they a substitute for qualified medical or professional care. Mindfulness practices and Reiki are each a single part of an integrative healing or wellness program. 
          <br/><br/>
          8. Suggest a consultation or referral for clients to qualified licensed professionals (medical doctor, licensed therapist, etc.) when appropriate. 
          <br/><br/>
          9. Never diagnose or prescribe. Never suggest that the client/student change prescribed treatment or interfere with the treatment of a licensed healthcare provider. 
          <br/><br/>
          <b>***To reiterate, we at Mindful by Nature are not licensed medical doctors or therapists. We will not diagnose or prescribe and we will not suggest to change treatments prescribed by licensed professionals.***</b>
          <br/><br/>
          10. Be sensitive to the boundary needs of individual clients and students. 
          <br/><br/>
          11. Never ask clients to disrobe (unless in the context of a <b>licensed massage therapy session</b> at the client’s option). Do not touch the genital area or breasts. Practice hands-off healing of these areas if treatment is needed. 
          <br/><br/>
          12. Be working to create harmony and friendly cooperation between Reiki Practitioners/Master Teachers in the community and represent the IARP in a most professional manner. 
          <br/><br/>
          13. Act as a beacon in your community by doing the best job possible. 
          <br/><br/>
          14. Work to empower your students to heal themselves and to encourage and assist them in the development of their mindfulness practices as well as their work with Reiki or their Reiki practices. 
          <br/><br/>
          15. Be actively working on your own healing so as to embody and fully express the essence of Reiki in everything that you do. 
          <br/><br/><br/><br/>
           <b>Please note:</b>
           <br/><br/>
           Reiki sessions given involve a <b>hands-off</b> method of energy balancing for the purpose of pain management, stress reduction and relaxation. Clients understand very clearly that a mindfulness class or Reiki session is not a substitute for medical, or psychological diagnosis, and treatment. Clients understand that Mindful by Nature practitioners do not diagnose conditions, nor do they prescribe, perform medical treatment, nor prescribe substances, nor interfere with the treatment of a licensed medical professional. It is recommended that clients see a licensed physician, or licensed healthcare professional for any physical, or psychological ailment clients have. Clients understand that the practitioner will be placing hands <b>above</b> clients body during a Reiki session and permit accidental contact to clients body during the session. </p>
            </Paper>
        </Grid>
        
      </Grid>
    </div>
  );
}

Reiki.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Reiki);