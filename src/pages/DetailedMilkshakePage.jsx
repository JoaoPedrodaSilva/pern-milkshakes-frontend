import axios from "../axios"
import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { IoMdReturnLeft } from "react-icons/io"

export const DetailedMilkshakePage = () => {
    const { id } = useParams()
    const [selectedMilkshake, setSelectedMilkshake] = useState(null)

    useEffect(() => {
        const getSelectedMilkshake = async () => {
            try {
                const response = await axios.get(`/api/milkshake/${id}`)
                setSelectedMilkshake(response.data.milkshake)
            } catch (error) {
                console.log(error)
            }
        }
        getSelectedMilkshake()
    }, [])

    return (
        <section className="w-full h-full bg-orange-200 relative">
            <Link to="/" className="absolute top-1 left-[5%] ">
                <IoMdReturnLeft className="text-xl text-orange-600" />
                <p className="text-xs text-orange-600">Back</p>
            </Link>
            {selectedMilkshake && (
                <div className="h-full flex flex-col justify-around items-center">
                    <header className="flex flex-col text-sm xs:text-lg justify-center items-center">
                        <h1 className="font-bold">{selectedMilkshake.title}</h1>
                        <h2 className="font-semi-bold text-xs xs:text-sm">Flavor: {selectedMilkshake.flavor}</h2>
                    </header>
                    <img
                        src={selectedMilkshake.image_url}
                        alt=""
                        className="w-1/2 rounded-lg border-2 border-orange-400"
                    />
                    <p className="w-5/6 text-xs xs:text-sm text-justify">{selectedMilkshake.long_description}</p>
                    <Link to={`/milkshake/${id}/reviews`} className="text-center text-xs xs:text-sm bg-orange-400 rounded px-2 py-1 mb-1">Read Reviews</Link>
                </div>
            )}
        </section>
    )
} 
