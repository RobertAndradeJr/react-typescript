import React, { Fragment, useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {Store} from './store';

type FormElem = React.FormEvent<HTMLFormElement>

interface ITodo {
  text: string,
  complete: boolean
}

const App: React.FC = () => {
  const store:any = useContext(Store)

  return (
    <>
    {console.log(store)};
      <h1>Avatar</h1>
      <p>Pick your favorite episode:</p>
    </>
  );
}

export default App;
