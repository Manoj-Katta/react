import { useState } from 'react';
import './App.css';

function App() {
  const [todoList, setTodolist] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event)=>{
    setNewTask(event.target.value);
  };

  const addTask = () =>{
    const newToDoList = [...todoList, newTask];
    setTodolist(newToDoList); 
  };

  const deleteTask = () => {

  };

  return (
    <div className='App'>
      <div className='addTask'>
        <input onchange = {handleChange}></input>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='tasks'>
        {todoList.map((task)=>{
          return(<h1>{task} <button onClick={deleteTask}>X</button></h1>)
        })}
      </div>
    </div>
  );
}

export default App;
