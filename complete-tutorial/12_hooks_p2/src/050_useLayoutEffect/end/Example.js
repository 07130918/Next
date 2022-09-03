import { useEffect, useLayoutEffect, useState } from "react";
import Random from "./Random";

// POINT useLayoutEffectとは？useEffectとの違い
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
        let intervalId = null;
        intervalId = window.setInterval(() => {
            setTime(prev => prev + 1);
        }, 1000);
        return () => {
            window.clearInterval(intervalId)
        }
    }, [])

    useEffect(() => {
        document.title = 'counter:' + time;
        window.localStorage.setItem('time-key-end', time);
    }, [time]);

    // useLayoutEffectはuseEffectより先に実行されるので、先に行いたい処理がある場合はuseLayoutEffectを使う手もある
    useLayoutEffect(() => {
        const _time = parseInt(window.localStorage.getItem('time-key-end'));
        if (!isNaN(_time)) setTime(_time);
    }, [])

    return (
        <h3>
            <time>{time}</time>
            <span>秒経過</span>
            <Random />
        </h3>
    );
};

export default Example;
