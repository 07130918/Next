import { useState } from "react";

const Example = () => {
    const [toggle, setToggle] = useState(true);
    const toggleComponent = () => {
        setToggle(prev => !prev);
    }
    return (
        <>
            <button onClick={toggleComponent}>toggle</button>
            {/* ツリー構造が同じになってしまう場合はkey属性で別のコンポーネントであることを明示する */}
            {/* keyがなく、ツリー構造が同じである場合stateの値が共有されてしまう */}
            {toggle ? <Count key="A" title="A" /> : <Count key="B" title="B" />}
            {toggle ? <Count title="A" /> : <Count title="B" />}
        </>
    )
}
const Count = ({ title }) => {
    const [count, setCount] = useState(0);
    const countUp = () => {
        setCount((prevstate) => prevstate + 1);
    };
    const countDown = () => {
        setCount(count - 1);
    };
    return (
        <>
            <h3>{title}: {count}</h3>
            <button onClick={countUp}>+</button>
            <button onClick={countDown}>-</button>
        </>
    );
};

export default Example;
