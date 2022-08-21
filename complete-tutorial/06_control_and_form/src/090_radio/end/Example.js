import { useState } from "react";
// POINT ラジオボタンの実装
const Example = () => {
    const [fruit, setFruit] = useState("Apple");
    const RADIO_COLLECTION = ["Apple", "Banana", "Cherry"];
    return (
        <>
            {RADIO_COLLECTION.map((value) => {
                return (
                    // labelタグで囲むかhtmlForをつけてidと紐つけるか
                    <label key={value}>
                        <input
                            type="radio"
                            value={value}
                            checked={fruit === value}
                            onChange={(e) => setFruit(e.target.value)}
                        />
                        {value}
                    </label>
                );
            })}
            <h3>私は{fruit}がたべたい</h3>
        </>
    );
};

export default Example;
