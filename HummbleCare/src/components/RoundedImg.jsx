export const RoundedImg = ({imgLocation}) => {
    return <div className="h-72 rounded-2xl overflow-hidden">
        
        <img
        src={imgLocation}
        className="w-full h-full object-cover"
        />
    </div>
}