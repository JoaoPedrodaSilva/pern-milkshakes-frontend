import axios from "../axios"
import { useState, useEffect } from "react"
import { MilkshakeCard } from "../components/MilkshakeCard"

export const HomePage = () => {
    const [allMilkshakes, setAllMilkshakes] = useState(null)

    useEffect(() => {
        const getAllMilkshakes = async () => {
            try {
                const response = await axios.get('/api/')
                setAllMilkshakes(response.data.milkshakes)
            } catch (error) {
                console.log(error)
            }
        }
        getAllMilkshakes()
    }, [])

    return (
        <section className="w-full h-full flex flex-col justify-center items-center gap-3 px-2">
            <h1>MILKSHAKES</h1>

            {allMilkshakes && allMilkshakes.map(milkshake => (
                <MilkshakeCard key={milkshake.id} milkshake={milkshake} />
            ))}
        </section>

    )
}
