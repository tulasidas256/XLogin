import React, { useState } from 'react';
import './App.css';

function App() {

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [isSubmit, setisSubmit] = useState(false);
  const [err, setErr] = useState(false);

  // fuunction for handle username
  const handleUsername = (e) => {
    setusername(e.target.value);
  };

  // fuunction for handle password
  const handlePassword = (e) => {
    setpassword(e.target.value);
  };

  // fuunction for handle submit
  const submitHandler = (e) => {
    e.preventDefault();
    if (username === "user" && password === "password") {
      setisSubmit(true);
    } else {
      setErr(true);
    }
  };

  return (
    <>
      <h1>Login Page</h1>
      {!isSubmit ? (
        <form onSubmit={submitHandler}>
          {err ? (<p>Invalid username or password</p>) : <></>}
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            onChange={handleUsername}
            name="username"
            type="text"
            placeholder="username"
            required
          />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            onChange={handlePassword}
            type="password"
            placeholder="password"
            required
          />
          <br />
          <button type='submit'>Submit</button>
        </form>
      ) : (
        <div>
          <p>Welcome, {username}!</p>
        </div>
      )
      }
    </>
  );
}

export default App;
