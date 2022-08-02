import { useCallback, useContext, useEffect, useMemo, useReducer, useRef, useState } from 'react';
import './App.css';
import PersonContext from './main';
import SomeChild from './SomeChild';

const reducer = (state, action) => {
    // アクション名を決める
    switch (action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        default:
            return state;
    }
}

function App() {
    const [count, setCount] = useState(0);
    const personContext = useContext(PersonContext);
    const inputText = useRef();
    // [新たに更新されたstate, 通知の合図]を返す
    const [state, dispatch] = useReducer(reducer, 0);

    const handleClick = () => {
        setCount(count + 1);
    };

    // 第2引数に監視したいオブジェクトを入れるとそのオブジェクトに変更があった際に発火する
    useEffect(() => {
        console.log(`Hello Hooks! count is ${count}`);
    }, [count])

    const handleRef = () => {
        console.log(inputText.current.value);
    }

    const [count01, setCount01] = useState(0);
    const [count02, setCount02] = useState(0);
    // useMemo(ブラウザのメモリを使う(保存、取得))
    // 特定の状態変数(今回はcount02)の変更が重い処理の場合に他の変数がその影響を受けないようにする
    const square = useMemo(() => {
        let i = 0;
        // 何かしらの重い処理の
        while (i < 1_000_000_000) {
            i++;
        }
        return count02 * count02;
    }, [count02]);

    const [counter, setCounter] = useState(0);
    // useCallback(コールバック関数をメモリに保存する)
    const showCount = useCallback(() => {
        alert(`Count ${counter}`);
    }, [counter]);

    return (
        <div className="App">
            <h1>useState, useEffect</h1>
            <button onClick={handleClick}>+</button>
            <p>{count}</p>
            <hr />
            <h1>useContext</h1>
            <p>{personContext.name}</p>
            <p>{personContext.age}</p>

            <hr />
            <h1>useRef</h1>
            <input type="text" ref={inputText} />
            <button onClick={handleRef}>Click here!</button>

            <hr />
            <h1>useReducer</h1>
            <p>カウント: {state}</p>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>

            <hr />
            <h1>useMemo</h1>
            <div>カウント1: {count01}</div>
            <div>カウント2: {count02}</div>
            <div>結果: {square}</div>
            <button onClick={() => setCount01(count01 + 1)}>+</button>
            <button onClick={() => setCount02(count02 + 1)}>+</button>

            <hr />
            <h1>useCallback</h1>
            {/* <SomeChild showCount={showCount} /> */}
            <p>{counter}</p>
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </div>
    );
}

export default App
