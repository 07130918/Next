// POINT _app.jsにはページ全体で共通化したい処理を記述
import Layout1 from "../components/layout/layout1";
import { AppProvider } from "../context/AppContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    // getLayoutが設定されている場合は、その関数を実行してあげる
    // そうでない場合は、デフォルトのレイアウトを適用する
    const getLayout = Component.getLayout
        ?? ((_component) => <Layout1>{_component}</Layout1>);

    return (
        <AppProvider>
            {getLayout(<Component {...pageProps} />)}
        </AppProvider>
    );
}

export default MyApp;
