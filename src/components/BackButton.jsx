import { Link } from "react-router-dom"
import { IoMdReturnLeft } from "react-icons/io"

export const BackButton = ({ route}) => (
    <Link to={route} className="absolute top-1 left-[5%] ">
        <IoMdReturnLeft className="text-xl text-orange-600" />
        <p className="text-xs text-orange-600">Back</p>
    </Link>
)
