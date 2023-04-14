import * as notesAPI from './notes-api';

export async function getAllNotes(id) {
  // const token = await usersAPI.signUp(userData);
  // localStorage.setItem('token', token);
  // return getUser();
  const allNote = await notesAPI.getNotesRequest(id);
  return allNote;
}

export async function createNote(noteData) {
    // const token = await usersAPI.signUp(userData);
    // localStorage.setItem('token', token);
    // return getUser();
    const newNote = await notesAPI.createNoteRequest(noteData);
    return newNote;
  }

  export async function deleteNote(noteId) {
    // const token = await usersAPI.signUp(userData);
    // localStorage.setItem('token', token);
    // return getUser();
    const deleteNote = await notesAPI.deleteNoteRequest(noteId);
    return deleteNote;
  }