import Link from "next/link";

export default function FirstPost() {
    return <>
        <h1>First Post</h1>
        <Link href='/pages'>go to home</Link>
    </>;
}