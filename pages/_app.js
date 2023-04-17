import '../styles/globals.css'
import { BarappProvider } from '../context/BarappProvider'

function MyApp({ Component, pageProps }) {
  return (
    <BarappProvider>
      <Component {...pageProps} />
    </BarappProvider>
  );
}

export default MyApp;
