import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import NoteCard from '../components/NoteCard';
import Masonry from 'react-masonry-css';

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

  // Breakpoint constant is for Masonry to assign column according to the monitor size, therefore it is responsive
  const breakpoints = {
    default: 3, //<-- when its normal size, 3 columns
    1100: 2, // <-- when its 1100 pixel wide, 2 columns
    700: 1, //<-- when its 700 or less 1 column
  };

  // The container component creates padding and margins to its child items
  return (
    <Container>
      <Masonry
        breakpointCols={breakpoints}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'
      >
        {/* since 12 is the max columns in a row, the small screen gets 12 */}
        {notes.map((note) => (
          <div key={note.id}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </div>
        ))}
      </Masonry>
    </Container>
  );
}
