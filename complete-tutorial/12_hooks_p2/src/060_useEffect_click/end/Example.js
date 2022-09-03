import { useEffect, useLayoutEffect, useState } from "react";

// POINT  useEffectの実行順を意識した実装。タイマー機能の拡張
const Example = () => {
    const [isDisplay, setIsDisplay] = useState(true);

    return (
        <>
            {isDisplay && <Timer />}
            <button
                onClick={() => setIsDisplay(prev => !prev)}>{isDisplay ? '非表示' : '表示'}
            </button>
        </>
    )
}

const Timer = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId = null;

        if (isRunning) {
            intervalId = window.setInterval(() => {
                setTime(prev => prev + 1);
            }, 1000);
        }

        return () => {
            window.clearInterval(intervalId)
        }
    }, [isRunning])

    useEffect(() => {
        document.title = 'counter:' + time;
        window.localStorage.setItem('time-key-end', time);
    }, [time]);

    useLayoutEffect(() => {
        const _time = parseInt(window.localStorage.getItem('time-key-end'));
        if (!isNaN(_time)) {
            setTime(_time);
        }
    }, [])

    const toggle = () => {
        setIsRunning(prev => !prev);
    }

    const reset = () => {
        setTime(0);
        setIsRunning(false);
    }

    return (
        <>
            <h3>
                <time>{time}</time>
                <span>秒経過</span>
            </h3>
            <div>
                <button onClick={toggle}>
                    {isRunning ? '一時停止' : 'スタート'}
                </button>
                <button onClick={reset}>
                    リセット
                </button>
            </div>
        </>
    );
};

export default Example;
