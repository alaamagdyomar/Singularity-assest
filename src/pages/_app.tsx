// import '@/styles/globals.css';
// import Layout from '@/components/layout';
// import type { AppProps } from 'next/app';

// export default function App({ Component, pageProps }: AppProps) {
//     return (
//         <Layout>
//             <Component {...pageProps} />;
//         </Layout>
//     );
// }
import { GlobalProvider } from "../store";
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
