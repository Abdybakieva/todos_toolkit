 import { configureStore } from "@reduxjs/toolkit";
import { createSliceTodo } from "./store";

 const store = configureStore({
   reducer: {
     [createSliceTodo.name]: createSliceTodo.reducer,
     
   },
   
 });


export default store