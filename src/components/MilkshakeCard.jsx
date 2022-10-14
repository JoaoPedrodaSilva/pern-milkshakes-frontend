import { Link } from "react-router-dom";

export const MilkshakeCard = ({ milkshake }) => (
    <article className="w-full min-h-[49%] flex gap-3 text-sm xs:text-lg rounded-lg shadow border border-white px-3 py-1 bg-orange-200 ">
        <img
            src={milkshake.image_url}
            alt={`the ${milkshake.title} milkshake`}
            className="w-1/3 object-cover rounded-lg border-2 border-orange-400"
        />

        <div className="flex flex-col justify-evenly">
                <h2 className="font-bold">{milkshake.title}</h2>
                <p className="text-xs xs:text-sm">Flavor: {milkshake.flavor}</p>
            
            <p className="text-xs xs:text-sm text-justify">{milkshake.short_description}</p>
            <Link to={`milkshake/${milkshake.id}`} className="w-2/3 text-sm xs:text-sm text-center bg-orange-400 rounded shadow-md">
                More
            </Link>
        </div>
    </article>
)

