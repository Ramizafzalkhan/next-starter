import Head from "next/head";
import Link from "next/link";

export default async  function Dashboard() {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json()

    return <>
        <Head>
            <title>My page title</title>
            <meta property="og:title" content="My page title" key="title" />
        </Head>
        <Head>
            <meta property="og:title" content="My new title" key="title" />
        </Head>
        <p>Hello world!</p>
       
        {data.products.map((product) => product.title)}
        
        <h2>
            <Link href="/">← Back to home</Link>
        </h2>
        {/* {JSON.stringify(data.products)} */}
    </>;
}