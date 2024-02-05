import React, {useState} from 'react';
import './App.css';

function App() {

  const [username,setusername] = useState("");
  const [password, setpassword] = useState("");
  const [err, setErr] = useState();

  const handleUsername = (e) => {
    setusername(e.target.value);
  };

  const handlePassword = (e) => {
    setpassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (username === "username" && password === "password") {
      setErr(true);
    } else {
      setErr(false);
    }
  };

  return (
    <>
    <h1>Login Page</h1>
      {!err ? (
        <form onSubmit={submitHandler}>
        {err === false ? (<p>Invalid username or password</p>):<></>}
        <label htmlFor="username">
          UserName:
          <input
            id="username"
            onChange={handleUsername}
            name="username"
            type="text"
          />
        </label>
        <br />
        <br />
        <label htmlFor="password">
          Password:
          <input
            id="password"
            name="password"
            onChange={handlePassword}
            type="password"
          />
        </label>
        <br />
        <br />
        <button onClick={submitHandler}>Submit</button>
      </form>
      ):(
        <p>"Welcome, user!"</p>
      )
      }
    </>
  );
}

export default App;
