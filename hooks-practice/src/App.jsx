import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    // 第2引数に監視したいオブジェクトを入れるとそのオブジェクトに変更があった際に発火する
    useEffect(() => {
        console.log(`Hello Hooks! count is ${count}`);
    }, [count])


    return (
        <div className="App">
            <h1>UseState, UseEffect</h1>
            <button onClick={handleClick}>+</button>
            <p>{count}</p>
        </div>
    );
}

export default App
