import { Quote, Star } from "lucide-react";

function getInitial({name}) {
    let parts = name.split(" ");
    let val = "";
    for(let word of parts)
    {
        if(word.length>0)
        {
            val+=word.charAt(0).toUpperCase();
        }
    }
    return val;
}

function ReviewCard({stars,description,name,subtext}) {

    const starElement = [];
    for(let i=0;i<stars;i++)
    {
        starElement.push(<Star key={i} stroke="2" fill="oklch(85.2% 0.199 91.936)" className="text-yellow-500 w-4 h-4 sm:w-7 sm:h-7 mr-2"/>)
    }

    return <div className="border-[1.5px] border-green-200 p-5 sm:p-10 rounded-2xl hover:scale-103 hover:shadow-xl transition-all duration-300">
        <div className="flex">
        {starElement}
        </div>
        <div className="flex mt-4 sm:mt-8 h-fit">
            <div><Quote className=" text-green-200 w-6 h-6 sm:w-10 sm:h-10"/></div>
            <div className="text-lg sm:text-xl ml-2 text-gray-700 italic leading-8 tracking-wide">{description}</div>
        </div>
        <div className="h-0.25 w-full px-10 bg-gray-200 mt-2"/>
        <div className="flex mt-5 ">
            <div className="flex bg-gradient-to-br from-green-400 to-green-700 h-9 w-9 sm:h-18 sm:w-18 rounded-full items-center justify-center">
                <p className="text-white text-md sm:text-2xl">{getInitial({name})}</p>
            </div>
            <div className="ml-5 flex flex-col justify-center">
                <div className="text-md sm:text-xl font-semibold ">{name}</div>
                <div className="text-md sm:text-xl text-gray-700">{subtext}</div>
            </div>
        </div>
    </div>
}

export default ReviewCard;