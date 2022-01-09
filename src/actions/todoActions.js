import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTodoList } from '../api/api';


export const getTodoListAction = createAsyncThunk(
    'todos/getTodoListAction',
    async (data, thunkAPI) => {
        const res = await getTodoList();
        console.log({ daData: data });

        return res.data;
    }
);