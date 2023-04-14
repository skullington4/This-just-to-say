import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as notesService from '../../utilities/notes-service';

export default function EditNotePage() {
    const [note, setNote] = useState({ text: ""});
    let { friendId, noteId } = useParams();
    const navigate = useNavigate();
    
    
    useEffect(function() {
        async function getSingleNote() {
            let noteToEdit = await notesService.getSingleNote(noteId);
      setNote(noteToEdit);
    }
    getSingleNote();
  }, []);




    function handleChange(evt) {
        setNote({...note, [evt.target.name]: evt.target.value});
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        let updatedNote = await notesService.updateNote(note);

        
        navigate(`/friends/${friendId}`);
    }

  return (
    <>
      
        <h1>Edit Note Page</h1>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="text">Text:
                <input type="text" name="text" id="text" value={ note.text } onChange={handleChange} />
            </label>
            <input type="submit" value="Edit Note" />
        </form>
    </>

  );
}