import logo from './logo.svg';
import './App.css';
import {React, useState} from 'react';
import {Button} from 'react-bootstrap'

function App() {
const [active, setActive] = useState(true);
const [user, setUser] = useState({})
  function handleToggle(){
    setActive(!active)
    console.log(active);
    console.log('I did it');
  
    if(active === false){
      fetch('https://api.github.com/users/DeathRay2000').then(res => res.json()).then(info => setUser(info))
    } 
    else{
      setUser({})
    }
    
    console.log(user);
  }
  return (
   <Button variant = 'success' onClick = {handleToggle}>button</Button>
  );
}

export default App;
