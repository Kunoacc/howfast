export default function Speed(){
    return (
        <div className="flex flex-row">
            <h1 className="font-display text-10xl text-white leading-none">250</h1>
            <div className="text-white flex flex-col items-end">
                <p className="decimal__value text-6xl font-display leading-none mt-3">.23</p>
                <span className="text-lg mr-1">Mbps</span>
            </div>
        </div>
    )
}