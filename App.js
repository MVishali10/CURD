import React, { useState } from 'react';
import './App.css';

function App() {

  const [task, setTask] = useState("");
  const [tasks, settasks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTaskIndex, setcurrentTaskIndex] =useState(null);


  const handelInputChange = (e) =>{
    setTask(e.target.value);
  }

  const addTask = () =>{
    if (task){
      settasks([...tasks, task]);
      setTask("");
    }
  };

  const updateTask = () =>{
    if (task){
      const updateTask = tasks.map((i, index)=>
      index === currentTaskIndex ? task : i
      );
      settasks(updateTask);
      setTask("");
      setIsEditing(false);
      setcurrentTaskIndex(null);
    }
  };

  const removeTask = (index) => {
    const removeNewTask = tasks.filter((_,i) => i !== index);
    settasks(removeNewTask);
  }

  const editTask = (index) => {
   setIsEditing(true);
   setcurrentTaskIndex(index);
   setTask(tasks[index]);
  }

  return (
    <div className='main'>
      <h4>TODO List</h4>
      <div className='main-input'>
      <input type="text" placeholder="Add a new task..."
        value={task}
        onChange={handelInputChange}
      />
      <button onClick={isEditing ? updateTask : addTask}>{isEditing ? "Update" : "Add"}</button>
      </div>
      <div className='main-ul'>
      <ul>
        {tasks.map((task, i) =>(
          <li key={i}>
            {task}
            <button onClick={() => editTask(i)}>Edit</button>
            <button onClick={() => removeTask(i)}>Delete</button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  )
};
export default App;
