import { Link } from "react-router-dom";

export const MilkshakeCard = ({ milkshake }) => (
    <article className="w-full grid grid-cols-2 gap-x-1 gap-y-2 text-sm xs:text-lg rounded-lg shadow border border-white px-3 py-1 bg-orange-200">
        <h2 className="font-bold cols-1">{milkshake.title}</h2>
        <p className="font-bold">Flavor: {milkshake.flavor}</p>
        <img
            src={milkshake.image_url}
            alt={`the ${milkshake.title} milkshake`}
            className="w-5/6 object-cover rounded-lg self-end border-2 border-orange-400"
        />
        <div className="flex flex-col gap-2 relative">
            <p className="text-xs xs:text-base text-justify absolute top-0">{milkshake.short_description}</p>
            <Link to={`milkshake/${milkshake.id}`} className="w-full text-sm xs:text-base text-center bg-orange-400 rounded shadow-md absolute bottom-0">More</Link>
        </div>
    </article>
)

