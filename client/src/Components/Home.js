import React from "react";
import styles from "./style/home.module.css";
import "./style/prime.css"
import { Dropdown } from 'primereact/dropdown';
import { useState } from "react";
import io from 'socket.io-client';

function Home() {
  const socket=io.connect('http://localhost:8000/');
 
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedName, setSelectedName] = useState(null);
  const [Errors,setErrors]=useState('');
  const [inputVal ,setInputVal]=useState({
    name:"",
    room:""
  })

    const Rooms = [
        { name: 'Room1', code: '1' },
        { name: 'Room2', code: '2' },
           ];
    // change Input
    const inputEvent =(e)=>
    {
      console.log('input event')
      setInputVal({...inputVal,[e.target.name]:e.target.value})
    } 
    // handle submit form
    const handleSubmit =(e)=>
    {
      if( Validate_Input)
      {
        console.log("ssssssssssssss",inputVal)
        e.preventDefault();
        console.log("evnent submit triggered");
        socket.emit('join_room',inputVal)
      }
    }
  // Validate Input entered
  const Validate_Input=(inputVal)=>
  {
    let bugs={};
    if(!inputVal.name)
    {
      bugs.name="enter username !"
    }
    else if(inputVal.name.length>10)
    {
      bugs.name="username must be under 10 characters !"
    }
    if(!inputVal.room)
    {
      bugs.room="select a room"
    }
    console.log("bugs are : ",bugs);
    setErrors(bugs);
    return Object.keys(bugs).length===0;
  }
  return (
    <div className={styles.container_home}>
      <div className={styles.login_form}>      
      <form onSubmit={handleSubmit}>
      <div className={styles.heading}>
        <h1>ChatVerse</h1>
      </div>

  <div className="container_input">
    <input type="text" placeholder="Enter Username" name="name"  required onChange={inputEvent} value={inputVal.name}/>
     {/* dropdowns */}
     <div className="card flex justify-content-center">
            <Dropdown onChange={inputEvent} options={Rooms} optionLabel="name" name="room"
                placeholder="Select Room" className={styles.dropdown} value={inputVal.room}  />
        </div>
    <button type="submit">Join Room</button>
    
  </div>

  
</form>
       
      </div>
    </div>
  );
}

export default Home;
