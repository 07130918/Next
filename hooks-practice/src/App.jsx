import { useContext, useEffect, useReducer, useRef, useState } from 'react';
import './App.css';
import PersonContext from './main';

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
        </div>
    );
}

export default App
