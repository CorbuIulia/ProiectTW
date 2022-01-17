import React, { Component, useRef, useState } from "react";
import { Button } from 'primereact/button';
import './login.css'


function Login(props) {
   const passRef = useRef();
   const emailRef = useRef();
    const [prof,setProf] = useState();

   const onLoginProf = () => {
    fetch(`http://localhost:8080/user/teacher/${emailRef.current.value}/${passRef.current.value}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    //   body:{

    //   }
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Email sau parola gresite!');
        }
      })
      .then((data) => {
        console.log(data)
        console.log('ok')
        setProf(data);
      })
      .catch((e) =>{})
  };
  const onLoginStud = () => {
    fetch(`http://localhost:8080/user/student/${emailRef.current.value}/${passRef.current.value}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    //   body:{

    //   }
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Email sau parola gresite!');
        }
      })
      .then((data) => {
        console.log(data)
        console.log('ok')
        setProf(data);
      })
      .catch((e) =>{})
  };

    const studForm = (
        <div className="login">
             <h1>LOGARE</h1>
            <h3>STRUDENT</h3>
            <div>
                <h5>Username</h5>
                <input type="text" ref={emailRef} placeholder="Enter username" name="username"></input>
            </div>
            <div>
                <h5>Password</h5>
                <input type="text" ref={passRef} placeholder="Enter password" name="username"></input>
            </div>
            <div>
                <button onClick={onLoginStud}>Login</button>
            </div>
        </div>
    );
    const profForm = (
        <div className="login">
             <h1>LOGARE</h1>
            <h3>PROFESOR</h3>
            <div>
                <h5>Username</h5>
                <input type="text" ref={emailRef} placeholder="Enter username" name="username"></input>
            </div>
            <div>
                <h5>Password</h5>
                <input type="text" ref={passRef} placeholder="Enter password" name="username"></input>
            </div>
            <div>
                <button onClick={onLoginProf}>Login</button>
            </div>
        </div>
    );
 return(
     <div>
      
{ props.isStud==1   ? studForm : 
         props.isStud == 2 ? profForm : 
         props.isStud == 0 ? 'none' : 'none2' 
          }
     </div>
 )

}
export default Login;
