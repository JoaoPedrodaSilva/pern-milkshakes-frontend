import axios from "../axios"
import { useState, useEffect } from "react"
import { MilkshakeCard } from "../components/MilkshakeCard"
import { Filter } from "../components/Filter"


export const HomePage = () => {
    const [allMilkshakes, setAllMilkshakes] = useState(null)
    const [filteredMilkshakes, setFilteredMilkshakes] = useState(null)
    const [selectedFlavor, setSelectedFlavor] = useState(null)

    //get all milkshakes from database
    useEffect(() => {
        const getAllMilkshakes = async () => {
            try {
                const response = await axios.get('/api/')
                setAllMilkshakes(response.data.milkshakes)
                setFilteredMilkshakes(response.data.milkshakes)
            } catch (error) {
                console.log(error)
            }
        }
        getAllMilkshakes()
    }, [])

    return (
        <main className="w-full h-full flex flex-col justify-around items-center p-2">
            <Filter
                allMilkshakes={allMilkshakes}
                selectedFlavor={selectedFlavor}
                setSelectedFlavor={setSelectedFlavor}
                setFilteredMilkshakes={setFilteredMilkshakes}
            />


            {/* render a card for each milkshake */}
            <section className="w-full h-full flex flex-col gap-1 overflow-auto overflow-x-hidden">
                {filteredMilkshakes && filteredMilkshakes.map(milkshake => (
                    <MilkshakeCard key={milkshake.id} milkshake={milkshake} />
                ))}
            </section>
        </main>
    )
}
