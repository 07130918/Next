type HelloProps = {
    text: string,
    children: React.ReactNode
}

const Hello: React.FC<HelloProps> = ({children, text}) => {
    return <h1>Hello {text}! {children}</h1>
}

// props.fnがどのような型であるかを定義する
type FnProps = {
    fn: (text: string) => void
}

export const Btn: React.FC<FnProps> = (props) => {
    return <button onClick={() => props.fn('TypeScript')}>ボタン</button>
}
export default Hello;