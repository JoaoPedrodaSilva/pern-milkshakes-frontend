export const MilkshakeCard = ({ milkshake }) => {
    return (
        <article className="w-full rounded-lg shadow border border-white p-3 bg-blue-300">
            <h1>{milkshake.title}</h1>
            <p>{milkshake.flavor}</p>
            <p>{milkshake.short_description}</p>
            <button>More</button>
        </article>
    )
}
