import React, { useState } from "react";
import './App.css';

const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState(['項']);
  const [progressionTodos, setProgressionTodos] = useState(['項']);
  const [completeTodos, setCompleteTodos] = useState(['項']);

  const [todoText, setTodoText] = useState('');

  const handleAddFormChanges = (e) => {
    setTodoText(e.target.value);
  }

  const onClickAdd = () => {
    if(todoText === '') return;
    const newTodos =[...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText('');
  }

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  }

  const onClickProgression = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newProgressionTodos = [...progressionTodos, incompleteTodos[index]];
    setProgressionTodos(newProgressionTodos);
    setIncompleteTodos(newIncompleteTodos);
  }

  const onClickCompleteTodos = (index) => {
    const newProgressionTodos = [...progressionTodos];
    newProgressionTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, progressionTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setProgressionTodos(newProgressionTodos);
  }

  const onClickDeleteb = (index) => {
    const newTodos = [...progressionTodos];
    newTodos.splice(index, 1);
    setProgressionTodos(newTodos);
  }

  const onClickReturn = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newProgressionTodos = [...progressionTodos, completeTodos[index]];
    setProgressionTodos(newProgressionTodos);
    setCompleteTodos(newCompleteTodos);
  }

  return (
    <React.Fragment>
      <div className="container">
        <header>
          <h1>todo list</h1>
        </header>
        <div className="input-area">
          <input
          type="text"
          name='todo'
          placeholder="new todo"
          value={todoText}
          onChange={handleAddFormChanges}
          />
          <button onClick={onClickAdd}>追加</button>
        </div>
        <div className="incomplete-area">
          <h3>未着手</h3>
            <ul>
              {incompleteTodos.map((todo,index) => {
                return (
                  <div key={todo} className="list">
                    <li>{todo}</li>
                    <button onClick={() => onClickProgression(index)}>進行中</button>
                    <button onClick={() => onClickDelete(index)}>削除</button>
                  </div>
                )
              })}
            </ul>
        </div>
        <div className="progression-area">
          <h3>進行中</h3>
            <ul>
              {progressionTodos.map((todo, index) => {
                return (
                  <div key={todo} className="list">
                    <li>{todo}</li>
                    <button onClick={() => onClickCompleteTodos(index)}>完了</button>
                    <button onClick={() => onClickDeleteb(index)}>削除</button>
                  </div>
                )
              })}
            </ul>
        </div>
        <div className="complete-area">
          <h3>完了</h3>
            <ul>
            {completeTodos.map((todo, index) => {
              return (
                <div key={todo} className="list">
                  <li>{todo}</li>
                  <button onClick={() => onClickReturn(index)}>戻す</button>
                </div>
              )
            })}
            </ul>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
