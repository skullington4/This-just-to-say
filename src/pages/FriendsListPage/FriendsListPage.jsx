import { Link, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as friendsService from '../../utilities/friends-service';
import FriendPage from '../FriendPage/FriendPage';

export default function FriendsListPage({ user, setUser}) {
    const [friends, setFriends] = useState([]);

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
        friends.map(friend => <Link to={`/friends/${friend._id}`}><h3>{friend.name}</h3></Link>))
        :
        (<h3>No Friends Yet</h3>)
      }
    </>

  );
}