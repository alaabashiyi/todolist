import React, { useEffect, useState } from "react";
import AddTask from "./components/AddTask/AddTask";
import { addTodo, removeTodo } from "./slices/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectTodoList } from "./selectors";
import List from "./components/List/List";
import { v4 as uuidv4 } from 'uuid';
import { TITLE, ADD } from "./constants/text";
import './global.scss';


const App = () => {
  const todolist = useSelector(selectTodoList);
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleText = (e) => setText(e.target.value);

  const addTodoState = () => {
    const content = text.trim();
    if (!content) return;

    const todo = {
      content: content,
      id: uuidv4(),
    }
    dispatch(addTodo(todo));
    setText('');
  }

  const removeTodoState = (id) => {
    dispatch(removeTodo(id))
  }

  return (
    <div className="app">

      <div className="wrapper">
        <h1>{TITLE}</h1>
        <AddTask onChange={handleText} onButtonClick={addTodoState} text={text} title={ADD} />
        <List data={todolist} remove={removeTodoState} />
      </div>

    </div>
  );
}

export default App;