import { useEffect } from "react"

export const Filter = ({ allMilkshakes, selectedFlavor, setSelectedFlavor, setFilteredMilkshakes }) => {

    useEffect(() => {
        if (selectedFlavor === "All") {
            setFilteredMilkshakes(allMilkshakes)
        } else {
            setFilteredMilkshakes(allMilkshakes && allMilkshakes.filter(milkshake => milkshake.flavor.includes(selectedFlavor)))
        }
    }, [selectedFlavor])

    return (
        <form className="w-full flex justify-between gap-3">
            <label htmlFor="filter">Select your flavor?</label>
            <select
                id="filter"
                className="w-1/2 xs:w-3/5 pl-1 rounded"
                onChange={
                    event => setSelectedFlavor(event.target.value)
                }
            >
                <option value="All">All</option>
                <option value="Chocolate">Chocolate</option>
                <option value="Strawberry">Strawberry</option>
                <option value="Caramel">Caramel</option>
            </select>
        </form>
    )
}
