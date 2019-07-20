import React, { Fragment, useState } from 'react';
// import ReactDOM from 'react-dom';
import './App.css';
// import { summarizers } from 'istanbul-lib-report';
// import { number } from 'prop-types';

type FormElem = React.FormEvent<HTMLFormElement>

interface ITodo {
  text: string,
  complete: boolean
}

const App: React.FC = () => {

  const [value, setValue] = useState<string>('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  }

  const addTodo = (text: string): void => {
    const newTodos: ITodo[] = [...todos, { text, complete: false }];
    setTodos(newTodos);
  }

  const completeTodo = (key: number): void => {
    const newTodos: ITodo[] = [...todos];
    newTodos[key].complete = !newTodos[key].complete;
    setTodos(newTodos);
  }

  const deleteTodo = (key: number): void => {
    const newTodos: ITodo[] = [...todos];
    newTodos.splice(key, 1);
    setTodos(newTodos);
  }


  return (
    <Fragment>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={e => setValue(e.target.value)} required />
        <button type="submit">Add todo</button>
      </form>
      <div>
        <ol>
          {todos.map((todo: ITodo, key: number) => (
            <Fragment key={key}>
              <li><span style={{ textDecoration: todo.complete ? 'line-through' : ''}}>{todo.text}</span> {(todo.complete ? "❌" : "✅")} </li>
              <button type="button" onClick={() => completeTodo(key)}>
                Complete
              </button>
              <button type="button" onClick={() => deleteTodo(key)}>
                Delete
              </button>
            </Fragment>
          ))}
        </ol>
      </div>
    </Fragment>
  );
}

export default App;
