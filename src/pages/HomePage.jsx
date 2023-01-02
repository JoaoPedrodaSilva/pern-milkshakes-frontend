import axios from "../axios"
import { useState, useEffect } from "react"
import { MilkshakeCard } from "../components/MilkshakeCard"
import { FilterForm } from "../components/FilterForm"


export const HomePage = () => {
    const [allMilkshakes, setAllMilkshakes] = useState(null)
    const [filteredMilkshakes, setFilteredMilkshakes] = useState(null)
    const [selectedFlavor, setSelectedFlavor] = useState("All")

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


    //render in case of no data
    if (!allMilkshakes) {
        return (
            <div className="flex flex-col justify-center items-center gap-3 pt-40">
                <p className="text-white text-center">Loading...</p>
                <img className="w-2/12 sm:w-1/12 rounded-lg" src="https://financas-e-fundamentos.s3.sa-east-1.amazonaws.com/loading.gif" alt="An animation, showing the chart is being loaded." />
            </div>
        )
    }

    return (
        <main className="w-full h-full flex flex-col justify-start items-center p-2">
            <FilterForm
                allMilkshakes={allMilkshakes}
                selectedFlavor={selectedFlavor}
                setSelectedFlavor={setSelectedFlavor}
                setFilteredMilkshakes={setFilteredMilkshakes}
            />


            {/* render a card for each milkshake */}
            <section className="w-full h-[85%] flex flex-col gap-1 overflow-auto overflow-x-hidden scrollbar rounded-lg">
                {filteredMilkshakes && filteredMilkshakes.map(milkshake => (
                    <MilkshakeCard key={milkshake.id} milkshake={milkshake} />
                ))}
            </section>
        </main>
    )
}
