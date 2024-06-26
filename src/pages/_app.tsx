import { GlobalProvider } from '../store/GlobalProvider';
import type { AppProps } from 'next/app';
import "@/styles/globals.css";

export default function App({ Component, pageProps } : AppProps) {
  return (
    <>
      <GlobalProvider>
        <Component {...pageProps} />
      </GlobalProvider>
    </>
  );
}
