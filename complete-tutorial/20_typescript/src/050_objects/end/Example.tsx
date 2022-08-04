// POINT TypeScriptにおけるオブジェクトの型定義ついて学ぼう
const Example = () => {
    const arry1: number[] = [1, 2, 3];
    const arry2: string[] = ['hello', 'bye'];
    const arry3: Array<number> = [1, 2, 3];
    // ユニオン型を使う事もできる
    const arry4: (string | number)[] = [1, 'bye'];
    const arry5: Array<string | number> = [1, 'bye'];

    // オブジェクトでも型定義をtypeキーワードで先に行うことができる
    // ?であってもなくでも良いことにする(undefinedを許容する)
    // const obj1: { name: string, age?: number, area: string } = { name: 'Taro', area: '20kyo' };
    type Person = { name: string, age?: number, area: string };
    const obj1: Person = { name: 'Taro', area: '20kyo' };
    console.log(obj1);
    // オブジェクトの配列
    const users: { name: string, age?: number }[] = [
        { name: 'Taro' },
        { name: 'Hanako', age: 30 },
        { name: 'Jiro', age: 30 }
    ]
};

export default Example;
