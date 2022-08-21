import {useState} from "react";
import Profile from "./components/Profile";

const persons = [
    {
        name: "Geo",
        age: 18,
        hobbies: ["sports", "music"],
    },
    {
        name: "Tom",
        age: 25,
        hobbies: ["movie", "music"],
    },
    {
        name: "Lisa",
        age: 21,
        hobbies: ["sports", "travel", "game"],
    },
];

const Example = () => {
    const [searchName, setSearchName] = useState("");
    return (
        <>
            <h3>練習問題</h3>
            <p>入力欄を設置して、入力値と名前が一致したもののみ表示する仕組みを作成してください。</p>
            <input type="text" value={searchName} onChange={(e) => setSearchName(e.target.value)} />
            <ul>
                {persons.filter((person) => {
                    return person.name.indexOf(searchName) !== -1;
                }).map((person) => {
                    return <li key={person.name}>
                        <Profile {...person} />
                    </li>
                })}
            </ul>
        </>
    );
};

export default Example;
