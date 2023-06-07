import Image from "next/image";
import Link from "next/link";

export default function Cart() {
    return (
        <>
            <h1>its cart page</h1>
            <Link href='/'>
                <Image
                    src="/images/angry-person.jpg" // Route of the image file
                    height={800} // Desired size with correct aspect ratio
                    width={800} // Desired size with correct aspect ratio
                    alt="Your Name"
                />
            </Link>

        </>
    )
}