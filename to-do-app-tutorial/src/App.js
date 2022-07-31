import { useState, useRef } from "react";
import { v4 as uuidv4 } from 'uuid';
import TodoList from "./TodoList";

function App() {
    // useStateで状態の管理を行う、引数に初期値を渡す
    const [todos, setTodos] = useState([
        { id: uuidv4(), name: "Todo1 example", completed: false },
    ]);

    const todoName = useRef();

    const handleAddTodo = () => {
        // タスクを追加する
        const name = todoName.current.value;
        setTodos((prevTodos) => {
            // スプレッド構文で配列を追加する
            return [...prevTodos, { id: uuidv4(), name: name, completed: false }];
        });
        todoName.current.value = "";
    };

    const toggleTodo = (id) => {
        const newTodos = [...todos];
        const matchedTodo = newTodos.find((todo) => todo.id === id);
        matchedTodo.completed = !matchedTodo.completed;
        setTodos(newTodos);
    };

    return (
        // JSX fragment
        <>
            {/* 子コンポーネントへの値の受け渡し */}
            <TodoList todos={todos} toggleTodo={toggleTodo} />
            <input type="text" ref={todoName} />
            <button onClick={handleAddTodo}>タスクを追加</button>
            <button>完了したタスクの削除</button>
            <div>残りのタスク: 0</div>
        </>
    );
}

export default App;
