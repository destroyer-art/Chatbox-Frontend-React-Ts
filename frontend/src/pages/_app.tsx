import { AppProps } from "next/app"
import "@styles/globals.css"
import "@fortawesome/fontawesome-svg-core/styles.css" // import Font Awesome CSS

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
