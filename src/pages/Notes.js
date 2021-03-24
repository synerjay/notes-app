import { Container, Grid, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

export default function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/notes') // must have the correct URL fect with notes
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);
  // The container component creates padding and margins to its child items
  return (
    <Container>
      <Grid container spacing={3}>
        {/* since 12 is the max columns in a row, the small screen gets 12 */}
        {notes.map((note) => (
          <Grid item xs={12} md={6} lg={4} key={note.id}>
            <Paper>{note.title}</Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
