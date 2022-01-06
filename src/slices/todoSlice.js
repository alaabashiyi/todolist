import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todolist: [
        {
            content: 'Buy milk',
            id: 'x7'
        }
    ],
};


const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action) {
            state.todolist.push(action.payload);
        },
        removeTodo(state, action) {
            console.log({ action })
            state.todolist = state.todolist.filter(todo => todo.id !== action.payload);
        },
    },
});

export const { addTodo, removeTodo } = todosSlice.actions;

export default todosSlice.reducer;