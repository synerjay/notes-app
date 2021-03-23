import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
// OR "import { Typography } from 'material-ui/core/' "
// import Material UI in two ways
import Button from '@material-ui/core/Button';
import {
  Container,
  FormControl,
  FormControlLabel,
  makeStyles,
  Radio,
  TextField,
} from '@material-ui/core';
import KeyboardArrowRightOutlinedIcon from '@material-ui/icons/KeyboardArrowRightOutlined';

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block',
  },
});

export default function Create() {
  const classes = useStyles();

  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');

  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitleError(false);
    setDetailsError(false);

    if (title == '') {
      setTitleError(true);
    }

    if (details == '') {
      setDetailsError(true);
    }

    if (title && details) {
      console.log(title, details);
    }
  };

  return (
    <Container>
      <Typography
        variant='h6'
        color='textSecondary'
        component='h2'
        gutterBottom
      >
        Create a New Note
      </Typography>
      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          label='Note Title'
          variant='outlined'
          color='secondary'
          fullWidth
          required
          error={titleError}
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          className={classes.field}
          label='Details'
          variant='outlined'
          color='secondary'
          multiline
          rows={4}
          fullWidth
          required
          error={detailsError}
        />

        <FormControlLabel value='todos' control={<Radio />} label="Todo's" />
        <FormControlLabel value='money' control={<Radio />} label='Finance' />
        <FormControlLabel value='money' control={<Radio />} label='Reminders' />
        <FormControlLabel value='todos' control={<Radio />} label='Work' />

        <Button
          onClick={() => console.log('You Clicked ME!!!!')}
          type='submit'
          color='secondary'
          variant='contained'
          endIcon={<KeyboardArrowRightOutlinedIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}
