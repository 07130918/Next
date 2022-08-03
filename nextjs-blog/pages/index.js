// ページ遷移に使う
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>これはNext.jsチュートリアルです。</p>
                <p>
                    (This is a sample website - you’ll be building a site like this on{' '}
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
                </p>
            </section>
            <Link href="posts/first-post">
                <a>First post</a>
            </Link>
            <hr />
            <Link href="alert">
                <a>Alert</a>
            </Link>
        </Layout>
    )
}