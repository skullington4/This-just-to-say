import * as friendsAPI from './friends-api';

export async function getAllFriends() {
  // const token = await usersAPI.signUp(userData);
  // localStorage.setItem('token', token);
  // return getUser();
  const allFriends = await friendsAPI.getFriendsRequest();
  return allFriends;
}
