import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { blue, green, pink, yellow } from '@material-ui/core/colors';
import { DeleteOutlined } from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles({
  avatar: {
    backgroundColor: (note) => {
      if (note.category == 'work') {
        return yellow[700];
      }
      if (note.category == 'money') {
        return green[500];
      }
      if (note.category == 'todos') {
        return pink[500];
      }
      return blue[500];
    },
  },
});

function NoteCard({ note, handleDelete }) {
  // the makeStyles hook can also take in a prop as an argument so that it can make the styles more dynamic
  const classes = useStyles(note);
  // in this example, the makeStyles hook is taking in the note prop to change the border based on the note's category

  return (
    <div>
      <Card elevation={3}>
        <CardHeader
          // The avatar here takes in the capitalized first letter of the category of the note
          avatar={
            <Avatar className={classes.avatar}>
              {note.category[0].toUpperCase()}
            </Avatar>
          }
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
