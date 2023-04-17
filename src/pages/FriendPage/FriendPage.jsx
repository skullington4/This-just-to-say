import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as friendsService from '../../utilities/friends-service';
import * as notesService from '../../utilities/notes-service';


export default function FriendPage({ user }) {
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
      const allNotes = await notesService.getAllNotes(id);
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
          (<div key={note.id}>
              { note.from == friend._id ? 
              <div>{friend.name}</div>
              :
              <div>{user.name}</div>
              }

              {note.text}
              <div>
                { user._id === note.from ?
                <div>
                  <Link to={`/friends/${friend._id}/notes/${note._id}/edit`}><button>Edit</button></Link>
                  <button onClick={() => handleDeleteNote(note._id)}>Delete</button>
                </div>
                :
                  <h3></h3>
                }
              </div>
            <br /> <br /> <br /> <br /> <br /> 
          </div>
          )))
          :
          (<h3>No Notes Yet</h3>)
        }
      </div>
    </>
  );
}