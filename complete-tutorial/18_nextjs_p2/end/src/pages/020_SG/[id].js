import { useRouter } from "next/router";

export default function Page({ id, date }) {
    const router = useRouter();
    // isFallbackはページの作成が完了するまでtrue
    if (router.isFallback) {
        return <h3>Loading...</h3>;
    }
    return <h3>このページは{id}です。{date}</h3>;
}

// SGでのダイナミックルーティングの実装
export async function getStaticPaths() {
    console.log("getStaticPaths executed");
    return {
        paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
        fallback: "blocking",
    };
}

// ビルド時にデータを取得して事前にHTMLファイルのレンダリングを行う
export async function getStaticProps({ params }) {
    console.log("getStaticProps executed");
    const date = new Date;
    return {
        props: {
            id: params.id,
            date: date.toJSON()
        },
        // ISRのときに必要(基本使わない)
        // revalidate: 5
    };
}
