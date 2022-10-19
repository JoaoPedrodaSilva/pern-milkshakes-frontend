import { Link } from "react-router-dom"

export const Navbar = () => (
    <nav className="w-full flex justify-around items-center text-xs xs:text-sm font-semi-bold py-1 text-white bg-orange-400">
        <Link to="/" className="w-1/4">
            <img
                src="https://pern-milkshakes.s3.sa-east-1.amazonaws.com/logo.png"
                alt=""
                className="rounded-full hover:scale-110"
            />
        </Link>

        <Link
            className="hover:scale-125"
            to="/"
        >Flavors</Link>

        <Link
            to="/faq"
            className="hover:scale-125"
        >FAQ</Link>

        <Link
            to="/contact"
            className="hover:scale-125"
        >Contact</Link>
    </nav>
)
