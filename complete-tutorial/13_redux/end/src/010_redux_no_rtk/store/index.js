import { createStore } from "redux";

const reducer = (state=0, { type, step }) => {
    switch (type) {
        case "+":
            return state + step;
        case "-":
            return state - step;
        default:
            return state;
    }
};

// グローバルな状態管理を行うためのストアを作成
// そこにreducerの登録をする
export default createStore(reducer);
