import Head from 'next/head'

export default function NewHome() {
    return (
        <div className="flex bg-dark-secondary w-screen h-screen absolute top-0 left-0">
            <div className="flex-grow gradient-dark">
                <img src="/images/logo.svg"></img>
            </div>
        </div>
    )
}