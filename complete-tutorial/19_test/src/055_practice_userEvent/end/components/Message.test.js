import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Message from "./Message";

describe('Messageコンポーネントの動作確認', () => {
    describe('初期表示の正常性確認', () => {
        test('input要素が表示されているか', () => {
            render(<Message />);
            const inputEl = screen.getByRole('textbox');
            expect(inputEl).toBeInTheDocument();
        })
    });

    describe('画面操作正常性確認', () => {
        test('input要素に文字を入力し値が更新されるか', async () => {
            const user = userEvent.setup();
            render(<Message />);
            const inputEl = screen.getByRole('textbox');
            await user.type(inputEl, "これはテストです。");
            expect(inputEl.value).toBe("これはテストです。");
        });
    });
});
