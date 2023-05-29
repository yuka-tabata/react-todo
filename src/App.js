import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const onChangeTodoText = (e) => setTodoText(e.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };
  const onClickBack = (index) => {
    const completetBackTodos = [...completeTodos];
    completetBackTodos.splice(index, 1);

    const incompleteBackTodos = [...incompleteTodos, completeTodos[index]];

    setCompleteTodos(completetBackTodos);
    setIncompleteTodos(incompleteBackTodos);
  };
  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        {incompleteTodos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <ul>
                <li>{todo}</li>
              </ul>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </div>

      <div className="complete-area">
        <p className="title">完了のTODO</p>
        {completeTodos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <ul>
                <li>{todo}</li>
              </ul>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </div>
    </>
  );
};
