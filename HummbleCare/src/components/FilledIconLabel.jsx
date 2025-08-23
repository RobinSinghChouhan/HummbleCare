import { Heart } from "lucide-react";
function FilledIconLabel({Icon, label}) {
    return <div className="flex items-center bg-green-100 w-fit px-3 sm:px-5 py-1 sm:py-3 rounded-3xl text-xs sm:text-lg">
        <Icon className="text-green-700 w-5 h-5" />
        <div className="ml-2 text-green-700 font-medium ">
          {label}
        </div>
      </div>
}
export default FilledIconLabel;