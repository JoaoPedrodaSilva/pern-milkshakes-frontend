import { Link } from "react-router-dom";

export const MilkshakeCard = ({ milkshake }) => (
    <article className="w-full flex flex-col items-center justify-evenly gap-1 h-36 rounded-lg shadow border border-white px-3 py-1 text-sm bg-orange-200">
        <div className="w-full flex justify-between gap-3">
            <h2 className="font-bold">{milkshake.title}</h2>
            <p className="font-bold">Flavor: {milkshake.flavor}</p>
        </div>
        <div className="w-full flex justify-between gap-10">
            <img
                src={milkshake.image_url}
                alt={`the ${milkshake.title} milkshake`}
                className="object-cover rounded-lg"
            />
            <div className="flex flex-col gap-2">
                <p className="text-justify">{milkshake.short_description}</p>
                <Link className="text-center bg-orange-400 rounded">More</Link>
            </div>
        </div>
    </article>
)
