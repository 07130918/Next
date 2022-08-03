import { GetStaticProps } from 'next';

import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
// ページ遷移に使う
import Link from 'next/link';

import Date from '../components/date';
import { getSortedPostsData } from '../lib/posts';
import utilStyles from '../styles/utils.module.css';


// getStaticProps を使った、データ有りの静的生成(読み込み時に実行)
// このように設定すれば、allPostsData prop は Home コンポーネントに渡される
// getStaticPropsはサーバーサイドでのみ実行されるのでクライアント側に露呈しない。
export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

// サーバーサイドレンダリングが必要な場合は、getServerSideProps を使う
// リクエスト時に実行される
// export async function getServerSideProps(context) {
// (ts)export const getServerSideProps: GetServerSideProps = async context => {
//     return {
//         props: {
//             // コンポーネントに渡すための props
//         }
//     }
// }

// getStaticPropsの戻り値を引数に取る
export default function Home({ allPostsData }) {
    return (
        <Layout home={true}>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>これはNext.jsチュートリアルです。</p>
                <p>
                    (This is a sample website - you'll be building a site like this on{' '}
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
                </p>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                        // 要素の繰り返しは順番を保証するためのkey属性が必要
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                </ul>
            </section>

            <hr />
            <Link href="alert">
                <a>Alert</a>
            </Link>
        </Layout>
    )
}