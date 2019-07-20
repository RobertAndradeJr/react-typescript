import React, {Fragment, useState} from 'react';
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

  const handleSubmit = (e:FormElem):void => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  }


  const addTodo = (text:string) => {
    const newTodos: ITodo[] = [...todos, {text, complete: false}];
    setTodos(newTodos);
  }

  return (
    <Fragment>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={e => setValue(e.target.value)} required/>
        <button type="submit">Add todo</button>
      </form>
      <div>
        <ol>
          {todos.map((todo: ITodo, key: number) => <li key={key}>{todo.text} <u>Complete:</u> {(todo.complete.toString() ? "❌" : "✅")}</li>)}
        </ol>
      </div>
    </Fragment>
  );
}

export default App;
