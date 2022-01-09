import { useState, useEffect } from "react"
import { getTodoList } from "../api/api";


const useTodolist = () => {
    const [todolist, setTodolist] = useState([]);

    const getMytodolist = async () => {
        try {
            const res = await getTodoList();
            if (res) {
                setTodolist(res?.data?.todolist)
            }

            console.log(res);

        } catch (e) {
            console.log(e);
        }

    }

    useEffect(() => {
        getMytodolist();
    }, []);

    return [todolist, getMytodolist];
}

export default useTodolist
