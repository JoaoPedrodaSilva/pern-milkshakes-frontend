import { useParams } from "react-router-dom"

export const DetailedMilkshakePage = () => {
    const {id} = useParams()

    return (
        <div>DetailedMilkshakePage {id}</div>
    )
} 
