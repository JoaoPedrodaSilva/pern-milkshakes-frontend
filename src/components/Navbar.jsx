import { Link } from "react-router-dom"

export const Navbar = () => (
    <nav className="w-full flex justify-around items-center text-xs xs:text-sm font-semi-bold border-b py-1 text-white border-white bg-orange-400">
        <Link to="/" className="w-1/4">
            <img
                src="https://pern-milkshakes.s3.sa-east-1.amazonaws.com/logo.png"
                alt=""
                className="rounded-full"
            />
        </Link>
        <Link to="/">Flavors</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/">Contact</Link>
    </nav>
)
