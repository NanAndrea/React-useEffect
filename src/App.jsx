import './App.css'
import { UserItem } from './components/userItem'
import { useState } from 'react';
import { useEffect } from 'react';
import { ScrollInfo } from './components/scrollInfo';
import { GetUsers } from './components/services/user';
import { UserList } from './components/UsersList';
import { getPosts } from './components/services/posts';
import { PostItem } from './components/PostItem';
import { PostList } from './components/PostList';

const users =[
  {
  networthStatus:"up",
  name: "Bill Gates",
  email: "bill.gates@microsoft.com"
},
{
  networthStatus:"same",
  name: "Lionel Messi",
  email: "lionel.messi@gmail.com.com"
},
{
  networthStatus:"down",
  name: "Steve Jobs",
  email: "steve.jobs@apple.com"
},

];

function App() {
  const [contor,setContor] = useState(0);
  const [showDropDown,setShowDropDown] = useState(false);

  const [showUsers,setShowUsers] = useState(false);
  const [apiUsers,setApiUsers] = useState([]);

  
  const [apiPosts,setApiPosts] = useState([]);

  const [pare, setPare] = useState(0);
  const [array, setArray] = useState([1,2,3]);

  useEffect(()=>{
    console.log("App was rendered", contor);
  });

  useEffect(()=>{
    console.log("Loaded component");
  },[]);

  useEffect(()=>{
    console.log("Contor has changed");
  },[contor]);

  

  useEffect(()=>{
    setPare(array.filter((element)=>element % 2 ===0).length);

  },[array]);

  useEffect(()=>{
    GetUsers().then((data)=> {
      setApiUsers(data);
    });
  },[]);


  useEffect(()=>{
    getPosts().then((data)=>{
      setApiPosts(data);
    });

  },[]);


  function handleAddNumbers(){
    setArray([...array, array[array.length-1] + 1]);

  };

  function handleToggleDropdown(){
    setShowDropDown(showDropDown => !showDropDown);


  };

  function handleShowUsers(){
    setShowUsers((showUsers) => !showUsers);
    
    };



  
  return (
    <div className="App">
      <button onClick={()=>{
        setContor(contor + 1);
        }}>{contor}</button>
      <button onClick={handleToggleDropdown}>{showDropDown ? "Hide" : "Show"}</button>
      {showDropDown && <div>Dropdown present</div>}

     {/*
      {users.map((user,index) => {
     return ( 
      <UserItem 
     key={index}
     name={user.name} email={user.email} networthStatus={user.networthStatus}/>)}
     )
      }
      {showDropDown && <ScrollInfo />}
      <UserList users={apiUsers}/>

    */}
    
      <p>In array exista {pare} elemente pare</p>
      {array.map((nr)=> (
        <p key={nr}>{nr}</p>

      )
      )}
      <button onClick={handleAddNumbers}>Add Numbers</button>
      
      
      <button onClick={handleShowUsers}>{showUsers ? "Ascunde lista de utilizatori" : "Afiseaza lista de utilizatori"}</button>
      {showUsers && <UserList users={apiUsers}/>}
      
      <button onClick={handleShowUsers}>{showUsers? "Afiseaza lista de postari" : "Ascunde lista de postari"}</button>
      {!showUsers && <PostList posts={apiPosts}/>}

      
      
    </div>
  );
}


export default App
