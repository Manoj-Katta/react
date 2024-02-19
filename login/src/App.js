import './App.css';
import React,{useState} from 'react';
function App() {
  const username = "manoj";
  const password = "123";
  const [usernamestate,setUsernameState] = useState("");
  const [passwordstate,setPasswordState] = useState("");
  const [loggedIn,setLoggedIn] = useState(false);
  const [submitted,setSubmitted] = useState(false);
  function submit(){
    if(username === usernamestate && password === passwordstate){
      setLoggedIn(true);
    }
    setSubmitted(true);
  }
  return (
    <div className="App">
      <h1>Login</h1>
      <br></br>
      <input type="text" placeholder='Username' onChange={(event)=>{
        setUsernameState(event.target.value);
      }
      }></input>
      <input type='password' placeholder='Password' onChange={(event)=>{
        setPasswordState(event.target.value);
      }}></input>
      <button onClick={submit}>Submit</button>

      {loggedIn && <h2>You're LoggedIn</h2>}
      {submitted && !loggedIn && <h2>You entered wrong credentials</h2>}
    </div>
  );
}

export default App;
