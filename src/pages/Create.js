import React from 'react';
import Typography from '@material-ui/core/Typography';
// OR "import { Typography } from 'material-ui/core/' "
// import Material UI in two ways
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Container, makeStyles } from '@material-ui/core';
import KeyboardArrowRightOutlinedIcon from '@material-ui/icons/KeyboardArrowRightOutlined';

const useStyles = makeStyles({
  btn: {
    fontSize: 60,
    backgroundColor: 'violet',
    '&:hover': {
      backgroundColor: 'blue',
    },
  },
  title: {
    textDecoration: 'underline',
    marginBottom: 20,
  },
});

export default function Create() {
  const classes = useStyles();

  return (
    <Container>
      <Typography
        className={classes.title}
        variant='h6'
        color='textSecondary'
        component='h2'
        gutterBottom
      >
        Create a New Note
      </Typography>

      <Button
        className={classes.btn}
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
