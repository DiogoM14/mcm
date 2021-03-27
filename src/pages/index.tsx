import Head from 'next/head'
import { Categories } from '../components/Categories'

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio | MCM</title>
      </Head>
      
      <Categories />
    </>
  )
}
