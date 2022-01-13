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
            state.todolist = state.todolist.filter(todo => todo.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getTodoListAction.fulfilled, (state, action) => {
            state.todolist = action.payload?.tasks;
        })
        builder.addCase(getTodoListAction.pending, (state, action) => {

        })
    }
});

export const { addTodo, removeTodo } = todosSlice.actions;

export default todosSlice.reducer;