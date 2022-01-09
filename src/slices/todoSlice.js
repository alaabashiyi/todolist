import { createSlice } from "@reduxjs/toolkit";
import { getTodoListAction } from '../actions/todoActions';

const initialState = {
    todolist: [
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
    extraReducers: (builder) => {
        builder.addCase(getTodoListAction.fulfilled, (state, action) => {
            console.log(action);
            state.todolist = action.payload?.todolist;
        })
        builder.addCase(getTodoListAction.pending, (state, action) => {
            console.log('IS LOADING')
        })
    }
});

export const { addTodo, removeTodo } = todosSlice.actions;

export default todosSlice.reducer;