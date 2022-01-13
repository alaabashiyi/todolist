import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTodoList } from '../api/api';


export const getTodoListAction = createAsyncThunk(
    'todos/getTodoListAction',
    async (data, thunkAPI) => {
        const res = await getTodoList();
        return res.data;
    }
);