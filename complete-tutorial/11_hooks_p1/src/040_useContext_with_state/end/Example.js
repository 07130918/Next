// POINT useContextとstate
import { createContext, useState } from "react";
import Child from "./component/Child";
import OtherChild from "./component/OtherChild";

export const MyContext = createContext();

const Example = () => {
    const stateAndSetter = useState(0);
    return (
        // コンテキスト名.Providerコンポーネントのvalue属性で値を渡す
        <MyContext.Provider value={stateAndSetter}>
            <Child />
            <OtherChild />
        </MyContext.Provider>
    );
};

export default Example;
