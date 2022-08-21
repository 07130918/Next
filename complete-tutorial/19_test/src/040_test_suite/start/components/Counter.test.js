import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

<<<<<<< HEAD
describe('テストのグループ名', () => { });

test('「カウントアップ」押下で「現在のカウント」が+1されるか', () => {
    render(<Counter originCount={0} />);

    const spanElBeforeUpdate = screen.getByText('現在のカウント:0')
    expect(spanElBeforeUpdate).toBeInTheDocument();

    const btn = screen.getByRole('button', { name: 'カウントアップ' });
    fireEvent.click(btn);

    const spanEl = screen.getByText('現在のカウント:1')
    expect(spanEl).toBeInTheDocument();
})
=======
// describeでテストをまとめて実行が失敗したときにわかりやすくする
describe('カウンターコンポーネントの動作確認', () => {
    describe('ボタンの制御確認', () => {
        test('「カウントアップ」押下で「現在のカウント」が+1されるか', () => {
            render(<Counter originCount={0} />);

            const spanElBeforeUpdate = screen.getByText('現在のカウント:0');
            expect(spanElBeforeUpdate).toBeInTheDocument();

            const btn = screen.getByRole('button', { name: 'カウントアップ' });
            fireEvent.click(btn);

            const spanEl = screen.getByText('現在のカウント:1');
            expect(spanEl).toBeInTheDocument();
        });

        test('「カウントダウン」押下で「現在のカウント」が-1されるか', () => {
            render(<Counter originCount={0} />);

            const spanElBeforeUpdate = screen.getByText('現在のカウント:0');
            expect(spanElBeforeUpdate).toBeInTheDocument();

            const btn = screen.getByRole('button', { name: 'カウントダウン' });
            fireEvent.click(btn);

            const spanEl = screen.getByText('現在のカウント:-1');
            expect(spanEl).toBeInTheDocument();
        });

        test('「クリア」押下で「現在のカウント」が0になるか', () => {
            render(<Counter originCount={5} />);

            const spanElBeforeUpdate = screen.getByText('現在のカウント:5');
            expect(spanElBeforeUpdate).toBeInTheDocument();

            const btn = screen.getByRole('button', { name: 'クリア' });
            fireEvent.click(btn);

            const spanEl = screen.getByText('現在のカウント:0');
            expect(spanEl).toBeInTheDocument();
        });
    });
});
>>>>>>> 4a5ee5b6fa19f16d331e97ff60fa8cca0d75c714
