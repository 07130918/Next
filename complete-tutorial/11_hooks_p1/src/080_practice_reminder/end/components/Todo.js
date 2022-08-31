import { TodoProvider } from "../context/TodoContext";
import Form from "./Form";
import List from "./List";

const Todo = () => {
    return (
        <TodoProvider>
            <List />
            <Form />
        </TodoProvider>
    )
};
export default Todo;
