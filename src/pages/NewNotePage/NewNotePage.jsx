import NewNoteForm from "../../components/NewNoteForm/NewNoteForm";
import { useState } from 'react';

export default function NewNotePage() {
  const [note, setNote] = useState('');

  function handleChange(evt) {
    setNote(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    alert(note);
  }


  return (

    <>
      <h1>Add a note</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="text">
          <input type="text" name="text" id="text" onChange={handleChange}/>
        </label>
        <input type="submit" value="Add Note" />
      </form>
    </>
  );
}