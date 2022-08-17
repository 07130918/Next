const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
    return (
        <>
            <ul>
                {
                    /* POINT 子要素にKeyキーを設定 */
                    animals.map((animal) => (
                        <li key={animal}>Hello, {animal}</li>
                    ))
                }
            </ul>
        </>
    );
};

export default Example;
