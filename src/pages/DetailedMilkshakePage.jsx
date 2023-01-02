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


    //render in case of no data
    if (!selectedMilkshake) {
        return (
            <div className="flex flex-col justify-center items-center gap-3 pt-40">
                <p className="text-white text-center">Loading...</p>
                <img className="w-2/12 sm:w-1/12 rounded-lg" src="https://financas-e-fundamentos.s3.sa-east-1.amazonaws.com/loading.gif" alt="An animation, showing the chart is being loaded." />
            </div>
        )
    }


    return (
        <section className="w-full h-full flex flex-col gap-7 xs:gap-8 justify-start bg-orange-200 relative">
            <BackButton route={"/"} />
            {selectedMilkshake && <MilkshakeHeader selectedMilkshake={selectedMilkshake} />}            

            {/* milkshake long description and read reviews button */}
            {selectedMilkshake && (
                <div className="flex flex-col justify-around items-center gap-4 xs:gap-8">
                    <p className="w-5/6 text-xs xs:text-base text-justify">{selectedMilkshake.long_description}</p>
                    <Link to={`/milkshake/${id}/reviews`} className="text-center text-xs xs:text-base bg-orange-400 rounded px-2 py-1 mb-1 hover:bg-orange-500 hover:text-white">
                        Read Reviews
                    </Link>
                </div>
            )}
        </section>
    )
} 
