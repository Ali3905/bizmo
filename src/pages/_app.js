import '@/styles/globals.css'
import ComponentState from '@/context/ComponentState'

export default function App({ Component, pageProps }) {
  return <>
  <ComponentState>
    <Component {...pageProps} />
  </ComponentState>
  </>
}
