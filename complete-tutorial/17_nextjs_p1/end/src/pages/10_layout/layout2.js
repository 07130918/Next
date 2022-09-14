import Layout2 from "../../components/layout/layout2";

export default function Page() {
    return (
        <div>
            <p>レイアウト2: ヘッダーがBOTTOMにある</p>
        </div>
    );
}

// プロパティを関数で設定してあげる
Page.getLayout = (page) => {
    return <Layout2>{page}</Layout2>
}
