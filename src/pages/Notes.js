import { Container, Grid, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import NoteCard from '../components/NoteCard';

export default function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/notes') // must have the correct URL fect with notes
      .then((res) => res.json()) // .json() method needs to be there to convert the blob to coherent json data
      .then((data) => setNotes(data));
  }, []);

  const handleDelete = async (id) => {
    await fetch('http://localhost:8000/notes/' + id, {
      method: 'DELETE',
    });
    const newNotes = notes.filter((note) => note.id != id);
    setNotes(newNotes);
  };

  // The container component creates padding and margins to its child items
  return (
    <Container>
      <Grid container spacing={3}>
        {/* since 12 is the max columns in a row, the small screen gets 12 */}
        {notes.map((note) => (
          <Grid item xs={12} md={6} lg={4} key={note.id}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
