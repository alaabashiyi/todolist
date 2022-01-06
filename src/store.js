import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './slices/todoSlice';


const store = configureStore({
    reducer: {
        todos: todoSlice,
        user: {},
    },
});

export default store;