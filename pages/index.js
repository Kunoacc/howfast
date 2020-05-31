import Head from 'next/head'
import Link from 'next/link'
import Stat from '@/components/stat'
import Speed from '@/components/speed'

export default function Home() {
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

                <div className="container mx-auto flex flex-col items-center">
                    <Speed></Speed>
                    <div className="flex flex-row items-center mt-10">
                        <button className="border-orange-primary border-2 py-4 px-10 rounded-full bg-transparent text-orange-primary text-lg">
                            Retry
                        </button>
                        <button className="py-3 px-3 gardient-primary rounded-full flex-grow-0 ml-4">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.2386 2.33333C11.6798 2.33333 11.2021 2.72836 11.0947 3.27669L10.7051 5.27734C9.74752 5.63943 8.86212 6.1453 8.08463 6.78353L6.16601 6.12272C5.63751 5.94072 5.05604 6.15925 4.77604 6.64225L3.01692 9.69108C2.73809 10.1752 2.83957 10.7899 3.26074 11.1562L4.79882 12.4938C4.71883 12.9854 4.66666 13.4858 4.66666 14C4.66666 14.5142 4.71883 15.0146 4.79882 15.5062L3.26074 16.8438C2.83957 17.2101 2.73809 17.8248 3.01692 18.3089L4.77604 21.3577C5.05487 21.8419 5.63751 22.0604 6.16601 21.8796L8.08463 21.2188C8.86186 21.8566 9.74795 22.3607 10.7051 22.7227L11.0947 24.7233C11.2021 25.2716 11.6798 25.6667 12.2386 25.6667H15.7614C16.3202 25.6667 16.7979 25.2716 16.9053 24.7233L17.2949 22.7227C18.2525 22.3606 19.1379 21.8547 19.9154 21.2165L21.834 21.8773C22.3625 22.0593 22.944 21.8419 23.224 21.3577L24.9831 18.3066C25.2619 17.8225 25.1604 17.2101 24.7393 16.8438L23.2012 15.5062C23.2812 15.0146 23.3333 14.5142 23.3333 14C23.3333 13.4858 23.2812 12.9854 23.2012 12.4938L24.7393 11.1562C25.1604 10.7899 25.2619 10.1752 24.9831 9.69108L23.224 6.64225C22.9451 6.15808 22.3625 5.93961 21.834 6.12044L19.9154 6.78125C19.1381 6.14342 18.252 5.63927 17.2949 5.27734L16.9053 3.27669C16.7979 2.72836 16.3202 2.33333 15.7614 2.33333H12.2386ZM14 9.33333C16.5772 9.33333 18.6667 11.4228 18.6667 14C18.6667 16.5772 16.5772 18.6667 14 18.6667C11.4228 18.6667 9.33333 16.5772 9.33333 14C9.33333 11.4228 11.4228 9.33333 14 9.33333Z" fill="black"/>
                            </svg>
                        </button>
                    </div>
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