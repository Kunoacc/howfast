export default function Stat({label, value, descriptor, className, hasMargin = true, isCentered = true, shouldCapitalize = true}){
    return (
        <div className={`flex flex-col ${isCentered ? 'text-center mx-auto' : ''} ${className}`}>
            <p className="text-fade font-semibold uppercase text-sm">{label}</p>
            <h4 className={`text-white capitalize
                ${hasMargin ? 'mt-1 text-2xl' : 'text-xl'}`}>{value}</h4>
            <p className={`text-fade text-sm ${shouldCapitalize ? 'capitalize' : ''}`}>{descriptor}</p>
        </div>
    )
}