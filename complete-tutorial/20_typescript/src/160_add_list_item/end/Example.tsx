// 今まで学んできたことを活かして簡易Todoリストを作成する
import { useState } from "react";
import TaskList from './TaskList';

export type Todo = {
    id: number;
    text: string;
};

const Example = () => {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState<Todo[]>([
        {
            id: 1,
            text: "Homework"
        },
        {
            id: 2,
            text: "Jogging"
        }
    ]);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
        console.log("inputText", inputText);
    }

    const addTodoItem = () => {
        setTodos(state => [...state, { id: todos.length + 1, text: inputText }]);
        setInputText("");
    }

    return (
        <>
            <input value={inputText} onChange={changeHandler} />
            <button onClick={addTodoItem}>追加</button>
            <TaskList todos={todos}></TaskList>
        </>
    );
}


export default Example;