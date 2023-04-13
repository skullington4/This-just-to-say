import { useState, useEffect } from 'react';
import * as friendsService from '../../utilities/friends-service';

export default function FriendsListPage({ user, setUser }) {
  const [friends, setFriends] = useState([]);
  const [newFriend, setNewFriend] = useState('');

  useEffect(function() {
    async function getFriends() {
      const friends = await friendsService.getAllFriends();
      setFriends(friends);
    }
    getFriends();
  }, []);

  return (
    <>
      <h1>Friends Page</h1>
      <a href="/friends/new">Add Friend</a>
      { friends ?
        friends.map(friend => <h3>{friend.name}</h3>)
        :
        <h3>No Friends Yet</h3>

      }
    </>

  );
}