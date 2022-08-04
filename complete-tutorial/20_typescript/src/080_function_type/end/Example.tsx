// POINT 関数の型定義を学ぼう
const Example = () => {
    // デフォルト値かundefinedを許容すれば引数の数が揃っていなくてもエラーにはならない
    function sum1(x: number, y: number = 100, z?: number): number {
        console.log(z);
        console.log(x + y);
        return x + y;
    }

    const result1 = sum1(2);
    console.log(result1);

    const sum2 = (x: number, y: number): string => "hello";
    const result2 = sum2(10, 20);
    console.log(result2);

    // type宣言は関数自体の型エイリアスを指定することもできる
    type Sum = (x: number, y: number) => number;
    const sum3: Sum = (x, y) => x + y;
    const result3 = sum3(1, 2);
    console.log(result3);
};

export default Example;
