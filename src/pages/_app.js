import '../styles/globals.css'
import { ModalProvider } from '../context/ModalContext'

export default function App({ Component, pageProps }) {
  return (
    <ModalProvider>
      <Component {...pageProps} />
    </ModalProvider>
  )
}
