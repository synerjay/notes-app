import { Card, CardContent, CardHeader, IconButton } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';
import React from 'react';

function NoteCard({ note }) {
  return (
    <div>
      <Card>
        <CardHeader
          action={
            <IconButton>
              <DeleteOutlined />
            </IconButton>
          }
        />
        <CardContent>{note.details}</CardContent>
      </Card>
    </div>
  );
}

export default NoteCard;
