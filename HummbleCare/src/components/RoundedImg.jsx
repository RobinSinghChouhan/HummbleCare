export const RoundedImg = ({imgLocation}) => {
    return <div className="sm:h-160 h-72 rounded-2xl overflow-hidden">
        
        <img
        src={imgLocation}
        className="w-full h-full object-cover"
        />
    </div>
}