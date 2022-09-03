import { useLayoutEffect, useState } from "react";

const Random = () => {
    const [state, setState] = useState(0);
    // POINT useLayoutEffect:useEffectで画面がちらつく場合に使用
    // useLayoutEffectは、画面への描画が行われる前に実行されるため、ちらつかなくなる
    useLayoutEffect(() => {
        if (state === 0) {
            setState(Math.random() * 300);
        }
    }, [state]);

    return (
        <button
            className="effect-btn"
            onClick={() => setState(0)}
            style={{ fontSize: "2.5em" }}
        >
            state: {state}
        </button>
    );
};
export default Random;
