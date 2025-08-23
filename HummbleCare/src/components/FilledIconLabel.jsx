import { Heart } from "lucide-react";
function FilledIconLabel({Icon, label}) {
    return <div className="flex bg-green-100 w-fit px-5 py-3 rounded-3xl text-md">
        
        <Icon className="text-green-700" />
        <div className="ml-2 text-green-700 font-medium">
          {label}
        </div>
      </div>
}
export default FilledIconLabel;