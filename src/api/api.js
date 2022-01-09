import axios from "axios";

const url = `http://localhost:4000`;
const getTodolist = '/todolist';
const postTodo = '/posttodo';
const deleteTodo = '/deletetodo'

export const getTodoList = async () => {
    return await axios.get(`${url}${getTodolist}`);
}

export const addTodoServer = async (todo) => {
    return await axios.post(`${url}${postTodo}`, { todo });
};

export const removeTodoServer = async (id) => {
    return await axios.post(`${url}${deleteTodo}`, { id });
}