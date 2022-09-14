
import { useRouter } from "next/router";

// http://localhost:4040/07_router/hello/setting
// http://localhost:4040/07_router/hoge/setting

// router.pushのドキュメント
// https://nextjs-ja-translation-docs.vercel.app/docs/api-reference/next/router#routerpush

// getServerSidePropsのpropsが来る
export default function Setting({ query }) {
    console.log(query);
    const router = useRouter();
    console.log(router);
    const clickHandler = () => {
        // router.push('/', '/dummy-url')
        // router.replace('/', '/dummy-url')
        router.reload()
    }
    return (
        <>
            <h1>routerから取得:{router.query.name}</h1>
            <button onClick={clickHandler}>アクションによる画面遷移</button>
        </>
    )
}

export async function getServerSideProps({ query }) {
    // console.log(context);
    return {
        // ディレクトリ名がキー、実際のURLが値になる
        props: { query }
    }
}
