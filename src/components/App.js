
import React from "react";
import './../styles/App.css';
import Todo from "./todo";

const App = () => {

  const [searchTerm, setSearchTerm] = React.useState("");
  const [todo, setTodo] = React.useState([]);

  const inputChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const addTodo = () => {
    console.log()
    setTodo([...todo, {id: todo.length+1,text: searchTerm}]);   
  }

  const removeTask = (index) => {
    const filterTask = todo.filter((item)=> {
      return item.id!=index;
    });

    setTodo(filterTask);
  }

  return (
    <div id="main">
      <div id="heading-block">
        <h1>To-Do List</h1>
        <input type="text" onChange={inputChange} value={searchTerm}/>
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <div id="todo-list">
        <ul>
          {
            todo.map((item) => <Todo key={item.id} task={item} removeTask={removeTask}/>)
          }
        </ul>
      </div>
    </div>
  )
}

export default App
