import { AppProps } from "next/app"
import "@styles/style.css"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container">
      <Component {...pageProps} />
    </div>
  )
}
