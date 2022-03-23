import { AppProps } from "next/app"
import "@styles/globals.css"
import "@fortawesome/fontawesome-svg-core/styles.css" // import Font Awesome CSS
import store from "@app/store"
import { Provider } from "react-redux"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
