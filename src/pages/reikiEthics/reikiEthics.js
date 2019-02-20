import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './reikiEthics.css'

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
        <Grid item sm={3}>
          <Paper className={classes.paper}>Reiki Code of Ethics</Paper>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Paper className={classes.paper}>
          <h2>KEY VALUES FOR PRACTICE</h2>

                <p>Codes of Ethics and Practice
                <br/><br/>
                This Code is intended for guidance and assistance to Professional Reiki Practitioners and to protect the interests of the public. It describes the standards of conduct and practice required of professional Reiki practitioners, hereafter referred to as ‘practitioners’.
                <br/><br/>
                The purpose of this Code and its procedures is to ensure that any complaint made to the regulator is dealt with in a fair, clear and impartial manner.
                <br/><br/>
                A practitioner will agree to operate in accordance with the agreed Code of Ethics and Practice for Reiki and are expected to maintain high standards of care, competence and conduct.
                <br/><br/>
                This Code forms the basis upon which the conduct of any practitioner will be assessed in the event of a complaint, although it cannot cover every eventuality. Any concern raised to the regulator is to be dealt with in a fair, clear and impartial manner.
                <br/><br/>
                It is the responsibility of every practitioner to understand the content of this Code and to keep up to date with current legislation and local byelaws. Copies of this document are available on request and in English only. This Code is superseded by current legislation and byelaws.
                <br/><br/>
                <b>KEY VALUES FOR PRACTICE</b>
                <br/><br/><br/>
                Every practitioner shall:
                <br/><br/>
                Give Reiki to his or her clients with respect for their dignity, individual needs and values without discrimination.
                Be without judgement concerning race, colour, creed, gender or sexual orientation.
                Provide comprehensive and easy-to-understand information to allow clients to make informed choices.<br/><br/>
                Respect the client’s right to choose his or her own forms and path of healing.
                Act honestly and maintain professional integrity.<br/><br/>
                Practice only within the boundaries of the Reiki practitioner's competence/qualifications.
                Acknowledge and respect all practitioners and disciplines.<br/><br/>
                Work to foster and maintain the trust of clients and the general public.<br/><br/>
                Keep all client information confidential unless required by law to do otherwise.<br/><br/>
                Comply with the Continuing Professional Development requirements of the Reiki Council/specific regulators<br/><br/>
                Respond promptly and constructively to concerns, criticisms and complaints.
                Comply with relevant legislation. <br/><br/>
                The practitioner shall not intentionally touch the client in any way. All work is to be done with no physical contact.<br/><br/>
                <b>THE CLIENT/PRACTITIONER RELATIONSHIP</b>
                <br/><br/>
                2.1. Clarity of Contract
                <br/><br/>
                Every practitioner shall:
                <br/><br/>
                Display or make available relevant certificates or other qualifications.
                Ensure that the client is always able to make informed choices with regard to their healthcare.<br/><br/>
                Give full and clear information either verbally or in writing about their services when commencing the Reiki treatment. This will include information about the nature of the treatment, charges and confidentiality. Any revisions shall be agreed in advance of any change.<br/><br/>
                Act with equal consideration whether being paid or in a voluntary capacity.
                Reach an agreement with the client at the outset of the treatment if any additional therapy/therapies are to be used in conjunction with Reiki.<br/><br/>
                Retain the right to refuse or postpone the Reiki treatment, provided that the practitioner makes the reason clear to the client:<br/><br/>
                i. if the practitioner is not able to treat for any reason,
                <br/>
                ii. if the client is under the influence of alcohol or mind-altering substances,
                <br/>
                iii. if the client behaves in any way which may lead the practitioner to feel physically unsafe, disrespected, or abused.
                <br/>
                iv. in the case of late attendance of the client.

                <br/><br/><br/>

                2.2. Informed consent
                <br/><br/>
                The practitioner shall:
                <br/><br/>
                Ensure that voluntary and explicit informed consent has been given at all times.  
                Recognise the client's right to refuse any part of the treatment or disregard advice.
                In the case of giving Reiki to a minor and those without the mental capacity to decide for themselves, written informed consent of a parent, guardian or relevant medical practitioner is required. If no appropriate adult is physically present, then the written consent should specifically agree to this. However, the wishes of the person must override any consent of a third party if they do not wish to receive Reiki.<br/>
                Only use film, tape recording or digital imagery of a client with that client's clear, informed, written consent to the precise use of the material.<br/><br/>
                2.3. Confidentiality and record keeping
                <br/><br/>
                Every practitioner shall:
                <br/><br/>
                Gather relevant personal information from the client, including any relevant medical information. If appropriate the client shall be advised to consult his or her GP and this shall be recorded.<br/><br/>
                Maintain full client records, including details of all treatments and advice, whether face to face or by phone, e-mail or letter.<br/><br/>
                Ensure the records are honest, accurate and factual.<br/><br/>
                Practitioner shall not disclose to a third party any information about a client, including the identity of the client, either during or after the lifetime of the client, without the consent of the client or the client’s legal representative, unless it is required by due process of the law.<br/><br/>
                Comply with the current Data Protection Act and current relevant legislation in regard to the storage of data. This includes registration and keeping client information secure and confidential unless otherwise required by law. Clients have rights of access to their health records in accordance with the requirements of the law.<br/><br/>
                Keep their records safe for at least seven years from the time of the last consultation.
                Practitioners are responsible for taking all reasonable steps to ensure that any employee or agent adheres to confidentiality, and that any information relating to a client is protected from improper use when it is received, stored, transmitted or disposed of.<br/><br/>
                Only pass on the client’s records to another practitioner where a client has agreed to or requested this, and to complete the transfer as quickly as possible.<br/><br/>
                Appoint a suitable person to undertake the proper security/disposal of all records in the event of any serious incapacity or death of the Reiki practitioner.</p>
                          
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