import { Global } from '../styles/global'
import { Header } from '../components/Header'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Global />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
