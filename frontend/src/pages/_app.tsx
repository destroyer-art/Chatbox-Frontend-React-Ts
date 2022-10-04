import { AppProps } from 'next/app';
import '@styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import store from '@app/store';
import { Provider } from 'react-redux';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <meta
          name="description"
          content="how to create a chatbox using nextjs react connected to nestjs Nodejs"
        />
        <title>chatbox chi demo messaging app</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}
