import axios from "../axios"
import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { BackButton } from "../components/BackButton"
import { MilkshakeHeader } from "../components/MilkshakeHeader"

export const DetailedMilkshakePage = () => {
    const { id } = useParams()
    const [selectedMilkshake, setSelectedMilkshake] = useState(null)

    //get selected milkshake from database
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
        <section className="w-full h-full flex flex-col justify-start bg-orange-200 relative">
            <BackButton route={"/"} />
            {selectedMilkshake && <MilkshakeHeader selectedMilkshake={selectedMilkshake} />}            

            {/* milkshake long description and read reviews button */}
            {selectedMilkshake && (
                <div className="flex flex-col justify-around items-center gap-2">
                    <p className="w-5/6 text-xs xs:text-sm text-justify">{selectedMilkshake.long_description}</p>
                    <Link to={`/milkshake/${id}/reviews`} className="text-center text-xs xs:text-sm bg-orange-400 rounded px-2 py-1 mb-1">
                        Read Reviews
                    </Link>
                </div>
            )}
        </section>
    )
} 
