import { RatingStars } from "./RatingStars";
import { useParams } from "react-router-dom";

export const MilkshakeHeader = ({ selectedMilkshake }) => {
    const { id } = useParams()

    return (
        <header className="flex flex-col justify-start items-center gap-1 text-sm xs:text-xl py-1">
            <h1 className="font-bold">{selectedMilkshake.title}</h1>
            <RatingStars averageRating={selectedMilkshake.average_rating} totalRatings={selectedMilkshake.total_ratings} id={id} />
            <h2 className="font-semi-bold text-xs xs:text-base">Flavor: {selectedMilkshake.flavor}</h2>
            <img
                src={selectedMilkshake.image_url}
                alt=""
                className="w-1/2 rounded-lg border-2 border-orange-400"
            />
        </header>
    )
}


