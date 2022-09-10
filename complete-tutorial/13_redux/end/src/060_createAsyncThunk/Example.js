// POINT [createAsyncThunk]非同期処理のステータスを画面に表示
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
