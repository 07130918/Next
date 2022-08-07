import { AppProps } from 'next/app'
import '../styles/global.css'
// すべてのページに共通するトップレベルのコンポーネント
// ページ間を移動するときに状態（state）を保持するために App コンポーネントを使用することができる
function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}

export default App