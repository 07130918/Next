import { useState } from "react";

const Example = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <h3>練習問題</h3>
            <p>
                カウントの更新と表示を別のコンポーネントに分離してください。Exampleコンポーネント内で現在のカウントの値を管理するstateを一つ定義してこれまでのレクチャーで実装したようなカウンターを作成してください。
            </p>
            <CountResult title="カウント" count={count} />
            <CountUpdate count={count} setCount={setCount} />
        </>
    );
};
const CountResult = ({ title, count }) => <h3>{title}: {count}</h3>;

const CountUpdate = ({ count, setCount }) => {
    const countUp = () => {
        setCount(count + 1);
    };
    const countDown = () => {
        setCount(count - 1);
    };
    return (
        <>
            <button onClick={countUp}>+</button>
            <button onClick={countDown}>-</button>
        </>
    );
};

export default Example;
