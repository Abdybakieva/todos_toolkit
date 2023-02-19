import React, { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import { todosActions } from "../../store/store";
import Button from "../IU/button";
import TodoForm from "../todoForm/TodoForm";

function Content() {
  const [inputText, setInputText] = useState("");


  const dispatch = useDispatch();

  const changeInput = (event) => {
    setInputText(event.target.value);
  };

  const deleteAll=()=>{
    dispatch(todosActions.deleteAll([]))
  }

  const buttonHandler = () => {
    const inputState = {
      id: Date.now().toString(),
      title: inputText,
    };
    dispatch(todosActions.add(inputState));
    setInputText("");
  };
  return (
    <>
      <Container>
        <Input type="text" onChange={changeInput} value={inputText} />
        <Button onClick={buttonHandler}>ADD</Button>
        <Button onClick={deleteAll}>delete all</Button>
      </Container>
      <TodoForm />
    </>
  );
}

export default Content;
const Container = styled.div`
  margin: auto;
  width: 70%;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 6rem;
  border: 1px solid #c0c9c9;
  background-color: #c0c9c9;
  border-radius: 20px;
`;

const Input = styled.input`
  width: 22vw;
  height: 5vh;
  border: none;
  border-radius: 7px;
  border: 1px solid #4c6161;
`;