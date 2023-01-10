import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Poppins } from "@next/font/google";


const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
  style: "normal",
})

export default function App({ Component, pageProps }: AppProps) {
  return (<div className={`${poppins.variable} font-sans`}>
  <Component {...pageProps} />
</div>
)
}
