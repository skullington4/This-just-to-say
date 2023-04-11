import sendRequest from "./send-request";
const BASE_URL = '/api/friends';

export function createFriendRequest(friendData) {
    const newFriend = {text: friendData}
    return sendRequest(BASE_URL, 'POST', newFriend);
}

export function getFriendsRequest() {
  return sendRequest(BASE_URL, 'GET');
}
