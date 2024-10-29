import '@/styles/globals.css'
import  { Catamaran } from "@next/font/google"
const catamaran = Catamaran ({
  subsets : ["tamil"],
  weight : ["100","200","300","400","500","600","700","800","900"]
})
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <main className={catamaran.className}>
    <Component {...pageProps} />
    </main>
    </>
  )
}
