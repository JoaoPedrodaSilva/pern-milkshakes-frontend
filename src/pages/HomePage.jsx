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
            } catch (error) {
                console.log(error)
            }
        }
        getAllMilkshakes()
    }, [])

    return (
        <main className="w-full h-full flex flex-col justify-center items-center gap-1 px-2">

            <Filter
                selectedFlavor={selectedFlavor}
                setSelectedFlavor={setSelectedFlavor}
                allMilkshakes={allMilkshakes}
                setAllMilkshakes={setAllMilkshakes}
            />

            {/* {console.log(allMilkshakes)} */}

            {/* render a card for each milkshake */}
            <section className="w-full basis-10/12 h-1/3 grid grid-cols-1 gap-1 overflow-scroll scroll-smooth">
                {allMilkshakes && allMilkshakes.map(milkshake => (
                    <MilkshakeCard key={milkshake.id} milkshake={milkshake} />
                ))}
            </section>
        </main>

    )
}
