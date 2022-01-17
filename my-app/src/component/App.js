import React, { useState } from "react";
import Login from "./Login";
import { Button } from 'primereact/button';

function App() {
  const[isStud, setIsStud]=useState(0);

const showLogin = (
  <Login isStud={isStud}></Login>
)
//onClick={setIsStud(2)}
//onClick={setIsStud(1)}

function setareStud(){
  setIsStud(1)
}

function setareProf(){
  setIsStud(2)
}
const showAskPage =(
  <div className="App">
      <div>Power puff</div>
      <div className=" button-demo">
                   
                    <div className="card">
                    <h3>Alege tipul logarii</h3>
                    <Button onClick={setareProf} label="Profesor" className="p-button-text" />
                    <Button  onClick={setareStud} label="Student" className="p-button-text"/>
                    </div>
                </div>
                </div>      
)
return (
     
   <div>
     { isStud==0   ? showAskPage : 
         showLogin
          }
   </div>
    
  )

}

export default App;
