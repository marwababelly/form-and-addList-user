import React, { Fragment, useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';


const App = () => {
  const [usersList,setUsersList] = useState([]);

  const addUserHandler = (UName,UAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: UName,age: UAge,id: Math.random().toString() },
      ];
    });
  };
  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </Fragment>
  );
};

export default App;
