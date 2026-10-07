import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Todolist from './Components/todolist';
import Addtodo from './Components/addtodo';
import { useState } from 'react';


function App() {
  const [todos, setTodos] = useState([
    {SNO: 1, title: "Learn React"},
    {SNO: 2, title: "Learn JavaScript"},
  ]);
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  const deleteTodo = (SNO) => {
    const updatedTodos = todos.filter((todo) => todo.SNO !== SNO);
    setTodos(updatedTodos);
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Todolist todos={todos} deleteTodo={deleteTodo} />} ></Route>
          <Route path="/addtodo" element={<Addtodo addTodo={addTodo} />} ></Route>
        </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
