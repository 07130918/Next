import { render, screen } from '@testing-library/react';
import Greet from './Greet';

test('h1タグが存在するか', () => {
    render(<Greet />);
    const h1El = screen.getByText('こんにちは');
    expect(h1El).toBeInTheDocument();
});

test('h1タグが存在するか(失敗)', () => {
    render(<Greet />);
    const h1El = screen.getByText('こんばんは');
    expect(h1El).toBeInTheDocument();
});
