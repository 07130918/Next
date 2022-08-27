const Example = () => {
    // 関数型（純粋関数）
    // POINT fn(決まった引数) -> 決まった戻り値
    // POINT 関数外の状態（データ）は参照・変更しない。
    // POINT 関数外に影響を及ぼさない。
    // 引数で渡された値を変更しない。
    // 不変性
    // 上記の要件を満たさない操作は「副作用」と呼ぶ。

    // 関数型プログラミング
    // 値の状態と処理を分離して管理
    const nums = [1, 2, 3];
    const sum = (arry) => arry.reduce((accu, curr) => accu + curr)

    // POINT オブジェクト指向型
    // 状態（データ）と処理を対で管理
    // obj.method(); -> 結果
    const numObj = {
        nums: [1, 2, 3],
        sum() {
            const nums = this.nums;
            let sumValue = 0;
            for (let i = 0; i < nums.length; i++) {
                sumValue += nums[i];
            }
            return sumValue;
        }
    }

    // 純粋関数
    const val1 = 3, val2 = 9;
    const add = (val1, val2) => val1 + val2;

    return (
        <>
            <div>オブジェクト指向型:{numObj.sum()}</div>
            <div>関数型:{sum(nums)}</div>
            <div>純粋関数:{add(val1, val2)}</div>
        </>
    );
};

export default Example;
