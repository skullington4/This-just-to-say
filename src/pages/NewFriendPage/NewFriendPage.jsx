import NewNoteForm from "../../components/NewNoteForm/NewNoteForm";
import { useState } from 'react';
import * as friendsService from "../../utilities/friends-service"

export default function NewFriendPage() {
  const [friend, setFriend] = useState('');

  function handleChange(evt) {
    setFriend(evt.target.value);
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    const findFriend = await notesService.createNote(note);
    setNote('');
  }


  return (

    <>
      <h1>Add a friend</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="text">
          <input type="text" name="friend" id="friend" onChange={handleChange} value={friend}/>
        </label>
        <input type="submit" value="Send Friend Request" />
      </form>
    </>
  );
}