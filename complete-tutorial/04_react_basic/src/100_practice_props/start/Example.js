import Profile from "./components/Profile";

const profile = [
    { name: "Takashi", age: 19, country: "Japan" },
    { name: "Jane", age: 28, country: "UK" },
    { name: "John Doe", age: "??", country: "Japan" },
];

const Example = () => {
    return (
        <div>
            <h3>練習問題</h3>
            <p>Profileコンポーネントの中身を変更して完成コードと同じ状態になるようにしてください。※なるべく分割代入を使用してください。
            </p>
            {profile.map((person) => {
                return <Profile {...person} />;
            }
            )}
        </div>
    );
};

export default Example;
