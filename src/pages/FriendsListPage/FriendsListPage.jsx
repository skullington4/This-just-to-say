import { useState, useEffect } from 'react';
import * as friendsService from '../../utilities/friends-service';

export default function NotesPage({ user, setUser }) {
  const [friends, setFriends] = useState([]);

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
      { friends ?
        friends.map(friend => <h3>{friend.name}</h3>)
        :
        <h3>No Friends Yet</h3>

      }
    </>

  );
}