import { useContext, useEffect, useState, useRef } from 'react';
import PersonContext from './main';
import './App.css';

function App() {
    const [count, setCount] = useState(0);
    const personContext = useContext(PersonContext);
    const inputText = useRef();

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
            <input type="text" ref={inputText}/>
            <button onClick={handleRef}>Click here!</button>
        </div>
    );
}

export default App
