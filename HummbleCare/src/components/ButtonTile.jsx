import { InquireForm } from "./InquireFormDialog";
import { useEffect, useState } from "react";

export function ButtonTile({icon, title, description, buttonText, buttonLink}){
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const handleDialog = () => setIsDialogOpen((cur) => !cur);

    useEffect(() => {
        // Disable scrolling when the popup is open
        if (isDialogOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'auto';
        }
        
        // Clean up function to reset body overflow when the component unmounts
        return () => {
          document.body.style.overflow = 'auto';
        };
      }, [isDialogOpen]);

    return <div> 
    <div className="grid grid-cols-20 ">
        <div className="col-span-3">
            {icon}
        </div>
        <div className="flex pt-1 col-span-17 font-bold text-start font-roboto text-lg sm:text-2xl">
                {title}
            </div>
    </div>
    <div className="grid grid-cols-20 ">
        <div className="col-span-3"/>
        <div className="col-span-17 text-start text-gray-700 sm:text-lg">
            <div>
            {description}
            </div>
            <div className="mt-3 sm:mt-5 font-bold font-roboto text-green-500 flex">
                <InquireForm isDialogOpen={isDialogOpen} handleOpen={handleDialog}/>
                <div className="flex">
                <div className="text-xl cursor-pointer hover:mr-2" onClick={handleDialog}>
                {buttonText}
                </div>
                <div className="ml-1 sm:ml-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-4 sm:size-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>
                </div>
                </div>
            </div>
        </div>
    </div>
    </div>
}