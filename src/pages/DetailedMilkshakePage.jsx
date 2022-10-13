import axios from "../axios"
import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"

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
        <>
            {selectedMilkshake && (
                <section className="w-full h-full flex flex-col justify-center items-center px-4 bg-orange-200">
                    <header className="flex flex-col text-sm xs:text-lg justify-center items-center py-1">
                        <h1 className="font-bold">{selectedMilkshake.title}</h1>
                        <h2 className="font-bold">Flavor: {selectedMilkshake.flavor}</h2>
                    </header>
                    <img
                        src={selectedMilkshake.image_url}
                        alt=""
                        className="w-1/2 rounded-lg border-2 border-orange-400"
                    />
                    <p className="text-xs xs:text-sm text-justify py-2">{selectedMilkshake.long_description}</p>
                    <Link to="/" className="text-center text-xs xs:text-sm bg-orange-400 rounded px-2 py-1">Back to Milkshakes</Link>
                </section>
            )}
        </>
    )
} 
