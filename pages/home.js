import Head from 'next/head'
import Link from 'next/link'
import Stat from '@/components/stat'
import Speed from '@/components/speed'

export default function NewHome() {
    return (
        <div className="flex bg-dark-secondary w-screen h-screen absolute top-0 left-0">
            <Head>
                <title>HowFast ⚡ | Internet Speed Test</title>
            </Head>

            <main className="flex-grow gradient-dark flex flex-col justify-between">
                <nav className="py-6 flex items-center justify-center">
                    <Link href="/">
                        <img src="/images/logo.svg" width={120}></img>
                    </Link>
                </nav>

                <div className="container mx-auto flex justify-center">
                    <Speed></Speed>
                </div>

                <footer className="grid grid-cols-4 justify-center container mx-auto mb-20">
                    <div className="flex flex-col justify-center ml-10">
                        <Stat label="isp" value="Ntel Nigeria" descriptor="192.168.444.532" hasMargin={false} isCentered={false}></Stat>
                        <Stat label="server" value="airtel networks" descriptor="lagos" hasMargin={false} isCentered={false} className="mt-6"></Stat>
                    </div>
                    <div className="flex items-center justify-center">
                        <Stat label="ping" value="25" descriptor="ms" hasMargin={true} shouldCapitalize={false}></Stat>
                    </div>
                    <div className="flex items-center justify-center">
                        <Stat label="download" value="104" descriptor="mbps" hasMargin={true}></Stat>
                    </div>
                    <div className="flex items-center justify-center">
                        <Stat label="upload" value="36.54" descriptor="mbps" hasMargin={true}></Stat>
                    </div>
                </footer>
            </main>
        </div>
    )
}