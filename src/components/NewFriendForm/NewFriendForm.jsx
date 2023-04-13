import { useState, useEffect } from 'react';
import * as friendsService from '../../utilities/friends-service';

export default function NewFriendForm({ user, setUser }) {
  const [friends, setFriends] = useState([]);



  return (
    <>
      <h1> Request Friends Page</h1>
      <a href="/friends/new">Add Friend</a>


    </>

  );
}