import { useState, useEffect, useRef } from 'react';
import * as notesAPI from '../../utilities/notes-api';
import { Link } from 'react-router-dom';



export default function NotesPage({ user, setUser }) {
  const [notes, setNotes] = useState([]);


  // The empty dependency array causes the effect
  // to run ONLY after the FIRST render
  useEffect(function() {
    async function getNotes() {
      const allNotes = await notesAPI.getAll();
      setNotes(allNotes);
    }
    getNotes();
  }, []);

    console.log(notes);

  return (
    <>
      <h1>Notes Page</h1>

      <h3>No Notes Yet</h3>
    </>

  );
}