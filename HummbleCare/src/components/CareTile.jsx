export function CareTile({icon,title,description}){
    return <div className="grid grid-cols-10">
        <div className="col-span-1 ">
        {icon}
        </div>
        <div className="col-span-9 font-roboto">
            <div className="font-bold text-start">
                {title}
            </div>
            <div className="text-start text-gray-700 font-roboto">
                {description}
            </div>
        </div>
    </div>
}