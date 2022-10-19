import { Link } from "react-router-dom";
import { RatingStars } from "./RatingStars";

export const MilkshakeCard = ({ milkshake }) => (
    <article className="w-full min-h-[49%] flex gap-3 text-sm xs:text-lg rounded-lg shadow border border-white px-3 py-1 bg-orange-200 ">
        <img
            src={milkshake.image_url}
            alt={`the ${milkshake.title} milkshake`}
            className="w-1/3 object-cover rounded-lg border-2 border-orange-400"
        />

        <div className="flex flex-col justify-evenly">
            <h2 className="font-bold">{milkshake.title}</h2>
            <RatingStars
                averageRating={milkshake.average_rating}
                totalRatings={milkshake.total_ratings}
                id={milkshake.id}
            />
            {/* <p className="text-xs xs:text-sm">Flavor: {milkshake.flavor}</p> */}

            <p className="text-xs xs:text-sm">Description: {milkshake.short_description}</p>
            <Link to={`milkshake/${milkshake.id}`} className="w-1/2 text-sm xs:text-sm text-center bg-orange-400 rounded shadow-md hover:bg-orange-500 hover:text-white">
                More
            </Link>
        </div>
    </article>
)


