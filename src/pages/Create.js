import React from 'react';
import Typography from '@material-ui/core/Typography';
// OR "import { Typography } from 'material-ui/core/' "
// import Material UI in two ways
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Container } from '@material-ui/core';
import KeyboardArrowRightOutlinedIcon from '@material-ui/icons/KeyboardArrowRightOutlined';

export default function Create() {
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
