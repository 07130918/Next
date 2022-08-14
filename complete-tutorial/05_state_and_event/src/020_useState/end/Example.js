import { useState } from "react";

const Example = () => {
    // POINT useStateは[値、変更用の関数]を返す
    let [val, setVal] = useState("初期値");

    return (
        <>
            <input
                type="text"
                /* POINT 入力状態をstateで管理する標準的な書き方 */
                onChange={(e) => {
                    setVal(e.target.value);
                }}
            />
            <div>
                {val}
            </div>
        </>
    );
};

export default Example;
