// POINT useEffectのクリーンアップ処理

import { useEffect, useState } from "react";
const Example = () => {
    const [isDisplay, setIsDisplay] = useState(true);

    return (
        <>
            {isDisplay && <Timer />}
            <button onClick={() => setIsDisplay(prev => !prev)}>トグル</button>
        </>
    )
}
const Timer = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        console.log('init');
        let intervalId = window.setInterval(() => {
            console.log('interval called');
            setTime(prev => prev + 1);
        }, 1000);
        // useEffectのreturnでコンポーネントが削除された時に実行される処理を書く
        // また、第2引数のstateが更新されるたびに実行される
        return () => {
            window.clearInterval(intervalId)
            console.log('end');
        }
    }, [])

    useEffect(() => {
        document.title = 'counter:' + time;
        window.localStorage.setItem('time-key-end', time);
    }, [time]);

    return (
        <h3>
            <time>{time}</time>
            <span>秒経過</span>
        </h3>
    );
};

export default Example;
