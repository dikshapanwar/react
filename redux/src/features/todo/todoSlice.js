import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "todo1" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      }
      state.todos.push(todo);
    },
    editTodo:(state,action)=>{
        const {id,text}=action.payload
        const existingTodo=state.todos.find((todo)=>todo.id===id)
        if(existingTodo){
            existingTodo.text=text
        }
    },
    removeTodo: (state,action) => {
        state.todos=state.todos.filter((todo)=>todo.id !==action.payload)
    },
  },
});

export const { addTodo, removeTodo ,editTodo } = todoSlice.actions;

export default todoSlice.reducer;
