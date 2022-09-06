// POINT Action CreatorとActionの関係
import { Provider } from "react-redux";
import Counter from "./components/Counter";
import store from "./store";

const Example = () => {
    return (
        <Provider store={store}>
            <Counter />
        </Provider>
    );
};

export default Example;
