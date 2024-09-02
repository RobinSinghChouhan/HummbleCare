export function ButtonTile({icon, title, description, buttonText, buttonLink}){
    return <div> 
    <div className="grid grid-cols-20 ">
        <div className="col-span-3">
            {icon}
        </div>
        <div className="flex pt-1 col-span-17 font-bold text-start font-roboto text-lg">
                {title}
            </div>
        
    </div>
    <div className="grid grid-cols-20 ">
        <div className="col-span-3"/>
        <div className="col-span-17 text-start text-gray-700">
            <div>
            {description}
            </div>
            <div className="mt-3 font-bold font-roboto text-green-500 flex">
                <div>
                {buttonText}
                </div>
                <div className="ml-1 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>

                </div>
            </div>
        </div>
    </div>
    </div>
}