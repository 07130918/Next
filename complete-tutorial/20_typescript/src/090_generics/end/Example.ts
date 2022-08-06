// POINT ジェネリクスとは、型引数(type parameters)を受け取る関数を作る機能のことを指す
const Example = () => {
    const repeatStr = (value: string, times: number): string[] => {
        return new Array(times).fill(value);
    }
    let strArry = repeatStr('Hello', 3);
    // console.log(strArry);

    const repeatNum = (value: number, times: number): number[] => {
        return new Array(times).fill(value);
    }
    let numArry = repeatNum(10, 3);
    // console.log(numArry);

    // Tには任意の型を指定できる、このようにして型定義だけ異なる同じ処理をまとめることができる
    const repeat = <T>(value: T, times: number): T[] => {
        return new Array(times).fill(value);
    }
    numArry = repeat<number>(10, 3);
    // 型推論に任せて省略もできる
    numArry = repeat(10, 3);
    console.log(numArry);
    strArry = repeat<string>("hello", 3);
    console.log(strArry);
    const boolArry = repeat<boolean>(true, 3);
    console.log(boolArry);
    // リテラル型を指定してもokay
    const byeArry = repeat<"bye">("bye", 3);
    console.log(byeArry);
    // const strArry = repeatStr("hello", 3);
    // const numArry = repeatNum(10, 3);
};

export default Example;
