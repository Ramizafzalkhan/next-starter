import Head from "next/head";
import Link from "next/link";

export default function Dashboard() {

    return <>
        <Head>
            <title>My page title</title>
            <meta property="og:title" content="My page title" key="title" />
        </Head>
        <Head>
            <meta property="og:title" content="My new title" key="title" />
        </Head>
        <p>Hello world!</p>
        <h1>First Post</h1>
        <h2>
            <Link href="/">← Back to home</Link>
        </h2>
    </>;
}