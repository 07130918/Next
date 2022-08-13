import Container from "./components/Container";
import Profile from "./components/Profile";

const profile = [
    { name: "Takashi", age: 19, country: "Japan" },
    { name: "Jane", age: 28, country: "UK", color: "red" },
];

/* POINT コンポーネントの子要素は props.children に渡る！
コンポーネントが子要素を持つ場合、props.children という特別なプロパティとして受け渡されます。
 */
const Example = () => {
    return (
        <div>
            <Container title="childrenとは">
                <Profile key={profile[0].name} {...profile[0]} />
                <Profile key={profile[1].name} {...profile[1]} />
            </Container>
        </div>
    );
};

export default Example;
