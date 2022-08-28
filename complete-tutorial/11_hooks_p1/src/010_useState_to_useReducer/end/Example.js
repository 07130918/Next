import { useReducer, useState } from "react";
/* POINT useReducerの使い方
const [state, dispatch] = useReducer(reducer, initialArg, init)
reducer(state, action(一般的にはオブジェクトが入る))
*/
// POINT useReducerはuseStateの書き換えに使用
const Example = () => {
    const [state, setState] = useState(0);
    // useReducerは定義時に値の更新の仕方まで決める
    const [rstate, dispatch] = useReducer((prevState, { type, step }) => {
        switch (type) {
            case "+":
                return prevState + step;
            case "-":
                return prevState - step;
            default:
                throw new Error('不明なactionです。')
        }
    }, 0);

    const countUp = () => {
        setState(state + 1);
    };
    const rcountUp = () => {
        dispatch({ type: "+", step: 2 });
    };
    const rcountDown = () => {
        dispatch({ type: "-", step: 3 });
    };
    return (
        <>
            <div>
                <h3>{state}</h3>
                <button onClick={countUp}>+</button>
            </div>
            <div>
                <h3>{rstate}</h3>
                <button onClick={rcountUp}>+</button>
                <button onClick={rcountDown}>-</button>
            </div>
        </>
    );
};

export default Example;
