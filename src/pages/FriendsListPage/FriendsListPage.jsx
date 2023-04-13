import { Link, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as friendsService from '../../utilities/friends-service';
import FriendsPage from '../FriendPage/FriendPage';

export default function FriendsListPage({ user, setUser }) {
  const [friends, setFriends] = useState([]);
  const [newFriend, setNewFriend] = useState('');

  useEffect(function() {
    async function getFriends() {
      const friends = await friendsService.getAllUsers();
      setFriends(friends);
    }
    getFriends();
  }, []);

  return (
    <>
      <h1>Friends List Page</h1>
      { friends ? (
        friends.map(friend => <h3>{friend.name}</h3>))
        :
        (<h3>No Friends Yet</h3>)
      }
    </>

  );
}