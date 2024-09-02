export const RoundedImgAbstract = ({
    imgLocation
})=>{
    return <div className="w-28 h-12 bg-red-400 rounded-3xl overflow-hidden">
        <img
        src={imgLocation}
        className="object-cover"/>
        </div>
}