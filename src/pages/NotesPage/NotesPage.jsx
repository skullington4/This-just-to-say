import { useState, useEffect } from 'react';
import * as notesService from '../../utilities/notes-service';

export default function NotesPage({ user, setUser }) {
  const [notes, setNotes] = useState([]);

  useEffect(function() {
    async function getNotes() {
      const notes = await notesService.getAllNotes();
      setNotes(notes);
    }
    getNotes();
  }, []);

  return (
    <>
      <h1>Notes Page</h1>
      { notes ?
        notes.map(note => <h3>{note.text}</h3>)
        :
        <h3>No Notes Yet</h3>

      }
    </>

  );
}