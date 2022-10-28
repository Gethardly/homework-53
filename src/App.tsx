import React, {useState} from 'react';
import AddTaskForm from "./AddTaskForm";
import './App.css';
import Task from "./Task";

function App() {

  const [tasks, setTask] = useState([{message: 'Hello world', id: 'j1'},
    {message: 'Its my program', id: 'j2'},
    {message: 'Third task', id: 'j3'}]);

  type Message = {
    id: string;
    message: string;
  };

  let tsk: Message;

  const curretTime = () => {
    const dateTime = new Date();
    return '' + dateTime.getHours() + dateTime.getMinutes() + dateTime.getSeconds();
  }

  const textFromUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    tsk = {
      id: curretTime(),
      message: event.target.value
    }
  };

  const addNewTask = () => {
    if (tsk !== undefined) {
      const taskCopy = [...tasks];
      taskCopy.push(tsk);
      setTask(taskCopy)
    } else {
      alert('Write something else');
    }
  };

  const deleteTask = (id: string) => {
    const index = tasks.findIndex(t => t.id === id);
    const tasksCopy = [...tasks];
    tasksCopy.splice(index, 1);
    setTask(tasksCopy);
  }

  let taskS = tasks.map((task) => (

    <Task key={task.id} delete={() => deleteTask(task.id)} message={task.message}/>
  ))

  return (
    <div>
      <AddTaskForm addTaskBtn={addNewTask} textFromUser={event => textFromUser(event)}/>
      {taskS}
    </div>
  );
}

export default App;
