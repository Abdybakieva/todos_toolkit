import React from "react";
import { useSelector } from "react-redux";
import TodoList from "../todoList/TodoList";

function TodoForm() {
  const {todos}=useSelector((state)=>state.todo)
  // console.log(todos);
 
  return (
    <>
      {todos.map((el) => {
        return (
         <TodoList title={el.title}
         key={el.id}
         el={el}
         />
        );
      })}
    </>
  );
}

export default TodoForm;
