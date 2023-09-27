// src/App.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './store/usersSlice';

function App() {
  const dispatch = useDispatch();
  const { users, isLoading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <div>
              <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
            </div>
            <div>
              {user.name.first} {user.name.last}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
