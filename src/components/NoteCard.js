import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles({
  test: {
    border: (note) => {
      if (note.category == 'work') {
        return '1px solid red';
      }
    },
  },
});

function NoteCard({ note, handleDelete }) {
  // the makeStyles hook can also take in a prop as an argument so that it can make the styles more dynamic
  const classes = useStyles(note);
  // in this example, the makeStyles hook is taking in the note prop to change the border based on the note's category

  return (
    <div>
      <Card elevation={3} className={classes.test}>
        <CardHeader
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant='body2' color='textSecondary'>
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default NoteCard;
