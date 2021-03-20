import React from 'react';
import Typography from '@material-ui/core/Typography';
// OR "import { Typography } from 'material-ui/core/' "
// import Material UI in two ways
import Button from '@material-ui/core/Button';
import { Container, makeStyles, TextField } from '@material-ui/core';
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
      <form noValidate autoComplete='off'>
        <TextField
          className={classes.field}
          label='Note Title'
          variant='outlined'
          color='secondary'
          fullWidth
          required
        />
      </form>
      <Button
        onClick={() => console.log('You Clicked ME!!!!')}
        type='submit'
        color='secondary'
        variant='contained'
        endIcon={<KeyboardArrowRightOutlinedIcon />}
      >
        Submit
      </Button>
    </Container>
  );
}
