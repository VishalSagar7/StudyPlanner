import React, { useState } from 'react';
import './App.css';

function App() {
  const [subject, setSubject] = useState('');
  const [hours, setHours] = useState('');
  const [tasks, setTasks] = useState([]);


  const handleAddTask = () => {
    if (subject && hours) {
      const newTask = { subject, hours: parseInt(hours) };
      setTasks([...tasks, newTask]);
      setSubject('');
      setHours('');
    }
  };

 
  const handleIncrement = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, hours: task.hours + 1 } : task
    );
    setTasks(updatedTasks);
  };


  const handleDecrement = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index && task.hours > 0 ? { ...task, hours: task.hours - 1 } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Geekster Education Planner</h1>
      <div className="form">
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <input
          type="number"
          placeholder="Hours"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.subject} - {task.hours} {task.hours === 1 ? 'hour' : 'hours'}
            <button onClick={() => handleIncrement(index)}>+</button>
            <button onClick={() => handleDecrement(index)}>-</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
