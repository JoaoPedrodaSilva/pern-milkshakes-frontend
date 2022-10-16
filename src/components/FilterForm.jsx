import { useEffect } from "react"

export const FilterForm = ({ allMilkshakes, selectedFlavor, setSelectedFlavor, setFilteredMilkshakes }) => {

    useEffect(() => {
        if (selectedFlavor === "All") {
            setFilteredMilkshakes(allMilkshakes)
        } else {
            setFilteredMilkshakes(allMilkshakes && allMilkshakes.filter(milkshake => milkshake.flavor.includes(selectedFlavor)))
        }
    }, [selectedFlavor])

    return (
        <form className="w-full flex justify-end text-xs xs:text-sm gap-1 pb-2">
            <label htmlFor="filter">Select your flavor:</label>
            <select
                id="filter"
                className=" pl-1 rounded"
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
