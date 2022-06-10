import { useState } from 'react';
import { InputField } from './components/InputField';
import { TodoList } from './components/TodoList';
import { useDispatch } from 'react-redux';

import { addTodo } from 'store/todoSlice';

export const App = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({ text }));
    setText('');
  };

  return (
    <div>
      <h1 className="title">My Todo List</h1>
      <center>
        <InputField text={text} handleInput={setText} handleSubmit={addTask} />
        <TodoList />
      </center>
    </div>
  );
};
