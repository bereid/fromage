import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

const style = {
  div: {
    display: 'flex',
    flexDirection: 'column',
  },
  img: {
    width: 200,
    marginBottom: '1em',
  },
  expansion: {
    width: '90%',
    alignItems: 'center',
  }
}

function PastUpcomingWS(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      {props.ws.map((workshop) => (
        <ExpansionPanel style={style.expansion}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography  variant="title" gutterBottom>{workshop.title}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div style={style.div}>
              <img src={workshop.img} style={style.img} alt="alt"></img>
              <Typography variant="subheading" gutterBottom>{workshop.description}</Typography>
              <Typography variant="subheading" gutterBottom>From: {workshop.time_from}</Typography>
              <Typography variant="subheading" gutterBottom>To: {workshop.time_to}</Typography>
              <Typography variant="subheading" gutterBottom>Attendees: {workshop.attendees}</Typography>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </div>
  );
}

PastUpcomingWS.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PastUpcomingWS);