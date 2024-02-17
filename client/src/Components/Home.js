import React from "react";
import chat_logo from "./style/images/logo3.png"
import styles from "./style/home.module.css";
import { Dropdown } from 'primereact/dropdown';
import { useState } from "react";

function Home() {
  const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
 
  return (
    <div className={styles.container_home}>
      <div className={styles.login_form}>      
      <form action="action_page.php" method="post">
      <div className={styles.heading}>
        <h1>ChatVerse</h1>
      </div>

  <div class="container_input">
    <input type="text" placeholder="Enter Username" name="uname" required/>
     {/* dropdowns */}
     <div className="card flex justify-content-center">
            <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                className="w-full md:w-14rem" style={{backgroundColor:'rgb(255,255,255)', width:'100%'}} />
        </div>
    
    
    
    <button type="submit">Join Room</button>
    
  </div>

  
</form>
       
      </div>
    </div>
  );
}

export default Home;
