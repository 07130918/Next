/* POINT テストコードを書く際の注意点
Arrange:(テストデータ、条件、環境の設定).
Act:(ロジックの実行、関数の実行).
Assertion:(実行結果と期待する結果の比較).
*/
import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

test("カウントアップボタンが押されるとカウントが1増える", () => {
    // Arrange
    render(<Counter originCount={0} />);

    // Act
    const btn = screen.getByRole("button", { name: "カウントアップ" });
    fireEvent.click(btn);

    // Assert
    const spanEl = screen.getByText("現在のカウント:1");
    expect(spanEl).toBeInTheDocument();
});
