import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';
import React from 'react';

function NoteCard({ note }) {
  return (
    <div>
      <Card>
        <CardHeader
          action={
            <IconButton onClick={() => console.log('delete', note.title)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography>{note.details}</Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default NoteCard;
