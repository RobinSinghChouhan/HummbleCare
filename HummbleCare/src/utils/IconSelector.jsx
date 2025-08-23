import { Heart, Shield } from "lucide-react"

function IconSelector({icon}) {
    switch(icon) {
        case "heart": return Heart;
        case "shield": return Shield;
    }
}

export default IconSelector