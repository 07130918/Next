import { useContext } from "react";
import { MyContext } from "../Example";

const GrandChild = () => {
    const [state] = useContext(MyContext);
    return (
        <div style={{ border: "1px solid black" }}>
            <h3>孫コンポーネント</h3>
            {state}
        </div>
    );
};
export default GrandChild;
