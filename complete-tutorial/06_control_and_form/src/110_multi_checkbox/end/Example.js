import { useState } from "react";

// POINT 複数チェックボックスの実装
const Example = () => {
    const [fruits, setFruits] = useState([
        { label: "Apple", value: 100, checked: false },
        { label: "Banana", value: 200, checked: false },
        { label: "Cherry", value: 300, checked: false },
    ]);
    const [sum, setSum] = useState(0);

    const handleChange = (e) => {
        const newFruits = fruits.map((fruit) => {
            const newFruit = { ...fruit };
            // クリックされたときにチェックの状態を反転させる
            if (newFruit.label === e.target.value) {
                newFruit.checked = !fruit.checked;
            }

            return newFruit;
        });

        setFruits(newFruits);
        // forEachバージョン
        // let sumVal = 0;
        // newFruits.forEach(fruit => {
        //   if(fruit.checked) {
        //    // sumVal = sumVal + fruit.value;
        //     sumVal += fruit.value;
        //   }
        // });

        // filter + forEachバージョン
        // let sumVal = 0;
        // newFruits
        //     .filter((fruit) => fruit.checked)
        //     .forEach((fruit) => sumVal += fruit.value);

        // filter + reduceバージョン
        let sumVal = newFruits
            .filter((fruit) => fruit.checked)
            // reduceの第２引数は初期値
            // .reduce((sumVal, fruit) => {
            //     return sumVal + fruit.value;
            // }, 0);
            .reduce((sumVal, fruit) => sumVal + fruit.value, 0);
        setSum(sumVal);
    };
    return (
        <div>
            {fruits.map((fruit) => {
                return (
                    <div key={fruit.label}>
                        <input
                            id={fruit.label}
                            type="checkbox"
                            value={fruit.label}
                            checked={fruit.checked}
                            onClick={handleChange}
                        />
                        <label htmlFor={fruit.label}>
                            {fruit.label}:{fruit.value}
                        </label>
                    </div>
                );
            })}
            <div>合計：{sum}</div>
        </div>
    );
};

export default Example;
