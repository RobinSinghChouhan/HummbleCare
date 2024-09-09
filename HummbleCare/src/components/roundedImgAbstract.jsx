export const RoundedImgAbstract = ({
    imgLocation
})=>{
    return <div className="sm:w-44 sm:h-16 w-28 h-12 bg-red-400 rounded-3xl sm:rounded-full overflow-hidden">
        <img
        src={imgLocation}
        className="object-cover"/>
        </div>
}