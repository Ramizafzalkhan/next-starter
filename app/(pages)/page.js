import Image from 'next/image'
import styles from './styles.module.css'
import Head from 'next/head'
import Link from 'next/link'

export default   function Home() {

  console.log('first')
  return (
  <main>
    <h1>hello world</h1>
    <h1>First Post </h1>
    <div>

  <Link href={'/dashboard'}> go to store</Link>
    </div>
  </main>  
  )
}
