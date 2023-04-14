import sendRequest from "./send-request";
const BASE_URL = '/api/notes';

export function createNoteRequest(noteData) {
    return sendRequest(BASE_URL, 'POST', noteData);
}

export function getNotesRequest(id) {
  return sendRequest(BASE_URL + `/${id}`, 'GET');
}

export function deleteNoteRequest(id) {
  return sendRequest(BASE_URL + `/${id}`, 'DELETE');
}