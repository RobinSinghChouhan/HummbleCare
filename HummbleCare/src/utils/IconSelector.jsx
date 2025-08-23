import { Heart } from "lucide-react"

function IconSelector({icon}) {
    switch(icon) {
        case "heart": return <Heart/>
    }
}

export default IconSelector