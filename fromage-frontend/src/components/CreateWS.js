import React from 'react';
import Paper from '@material-ui/core/Paper';

const styles = {
  paper: {
    margin: '0 auto',
    width: '50%', 
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
    paddingLeft: '10%',
  },
  formfield: {
    display: 'flex',
    flexDirection: 'column',
    height: 100,
  },
  textarea: {
    maxWidth: '100%',
    minHeight: 50,
  }
}

const CreateWS = () => (
  <Paper style={styles.paper}>
    <form action="http://localhost:4444/workshop" method="post" style={styles.form}>
      <div style={styles.formfield}>
        <label for="title">Workshop title:</label>
        <input type="text" id="title" name="title"></input>
      </div>
      <div>
        <label for="time">Workshop time:</label>
        <p>From:</p>
        <input type="datetime-local" name="time-from"></input>
        <p>To:</p>
        <input type="datetime-local" name="time-to"></input>
      </div>
      <div style={styles.formfield}>
        <label for="location">Workshop Location:</label>
        <input type="text" id="location" name="location"></input>
      </div>
      <div style={styles.formfield}>
        <label for="description">Longer description:</label>
        <textarea id="description" name="description" style={styles.textarea}></textarea>
      </div>
      <div style={styles.formfield}>
        <label for="presenter">Presenter:</label>
        <input type="text" id="presenter" name="presenter"></input>
      </div>
      <div style={styles.formfield}>
        <label for="attendees">Maximum number of attendees:</label>
        <input type="number" id="attendees" name="attendees"></input>
      </div>
      <div style={styles.formfield}>
        <label for="whattobring">What to bring:</label>
        <input type="text" id="whattobring" name="whattobring"></input>
      </div>
      <div style={styles.formfield}>
        <input type="submit" value="Submit form"></input>
      </div>
    </form>
  </Paper >
);

export default CreateWS;