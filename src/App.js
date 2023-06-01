import { useState } from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';


function App() {
    const[usersList , setUserList] = useState([])

    const addUserHandler = (uName , uAge) => {
      setUserList((prevUserList) =>{
        return [...prevUserList , {name:uName , age:uAge , id: Math.random().toString()}]
      })
    }

  return (
    <div className="App">
      <AddUser onAddUser = {addUserHandler}></AddUser>
      <UserList users = {usersList}/>
    </div>
  );
}

export default App;
