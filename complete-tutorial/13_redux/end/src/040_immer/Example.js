// POINT immerでイミュータブルな操作を行う方法
import { Provider } from "react-redux";
import Counter from "./components/Counter";
import "./immer";
import store from "./store";

const Example = () => {
    return (
        <Provider store={store}>
            <Counter />
        </Provider>
    );
};

export default Example;
