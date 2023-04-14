import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import FriendsListPage from '../FriendsListPage/FriendsListPage';
import FriendPage from '../FriendPage/FriendPage';
import NavBar from '../../components/NavBar/NavBar';
import EditNotePage from '../EditNotePage/EditNotePage';


export default function App() {
  const [user, setUser] = useState(getUser());


  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/friends" element={<FriendsListPage />} />
              <Route path="/friends/:id" element={<FriendPage user={user} />} />
              <Route path="/friends/:friendId/notes/:noteId/edit" element={<EditNotePage />} />

            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
