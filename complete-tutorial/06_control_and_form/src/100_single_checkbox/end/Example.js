import { useState } from "react";

// POINT チェックボックスの実装
const Example = () => {
    const [isChecked, setIsChecked] = useState(true);
    return (
        <div>
            チェック：
            <input
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(prevState => !prevState)}
            />
            <div>{isChecked ? "ON!" : "OFF!"}</div>
        </div>
    );
};

export default Example;
