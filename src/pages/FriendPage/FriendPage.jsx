import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as friendsService from '../../utilities/friends-service';
import * as notesService from '../../utilities/notes-service';


export default function FriendPage() {
  const { id } = useParams();
  const [note, setNote] = useState({
    text: '',
    user: id
  });
  const [friend, setFriend] = useState('');
  const [notes, setNotes] = useState([]);


  useEffect(function() {
    async function getUser() {
      const aUser = await friendsService.getUser(id);
      setFriend(aUser);
    }
    async function getNotes() {
      console.log("id", id)
      const allNotes = await notesService.getAllNotes(id);
      console.log(allNotes);
      setNotes(allNotes);
    }
    getUser();
    getNotes();
  }, []);

  async function handleDeleteNote(noteId) {

    const deletedNote = await notesService.deleteNote(noteId);
    const updatedNotes = notes.filter(note => note._id !== deletedNote._id);
    setNotes(updatedNotes);
  }

  const sendNote = async () => {
    const myNewNotes = await notesService.createNote(note);
    setNotes([...notes, myNewNotes]);
    setNote({...note, text:''});
  };

  return (
    <>
      <div>
        <h3>Send a message to {friend.name}</h3>
        <textarea value={note.text} onChange={(e) => setNote({...note, text:e.target.value})} />
        <button onClick={sendNote}>Send Message</button>
      </div>
      <div>
      { notes.length ? (
          notes.map(note => 
          (<div key={note.id}>{note.user} <br />
            {note.text}
         <button onClick={() => handleDeleteNote(note._id)}>Delete</button>
         </div>
          )))
          :
          (<h3>No Notes Yet</h3>)
        }
      </div>
    </>
  );
}