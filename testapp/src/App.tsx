import React, { useState } from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import Axios from 'axios';


const App = () => {

  let usernameRef = React.createRef<HTMLInputElement>();
  let pwRef = React.createRef<HTMLInputElement>();

  const login = () => {
    let username = "";
    let pw = "";
    if (usernameRef.current != null) {
      username = usernameRef.current.value;
    }
    if (pwRef.current != null) {
      pw = pwRef.current.value;
    }
    Axios.post(
      "http://localhost:3001/users",
      {
        username: username,
        password: pw
      }
    )
      .then(
        (response)=>console.log(response)
      )
      .catch((error)=>console.log(error));
  }

  return (
    <div className="App">
      <h2>
        <form>
          <div>
            <TextField
              id="username"
              label="Username:"
              className="loginInput"
              inputRef={usernameRef}
            />
          </div>
          <div>
            <TextField
              id="password"
              label="Password:"
              className="loginInput"
              inputRef={pwRef}
            />
          </div>
          <div>
            <Button
              variant="contained"
              onClick={login}
              className="loginButton">
              Login
          </Button>
          </div>
        </form>
      </h2>
    </div>
  );
}

export default App;
