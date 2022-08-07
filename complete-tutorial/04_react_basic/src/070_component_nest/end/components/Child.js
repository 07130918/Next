// POINT List コンポーネントを名前付き import
import "./Child.css";
import { List } from "./List";

const Child = () => {
    return (
        <div className="component">
            <h3>Hello Component</h3>
            <List />
        </div>
    );
};

// POINT コンポーネントを default export
export default Child;