import '@/css/tailwind.css'
import Head from 'next/head'

export default function App({ Component, props }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico"></link>
            </Head>
            <Component {...props}></Component>
        </>
    )
}