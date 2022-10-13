import { Link } from "react-router-dom"

export const Navbar = () => (
    <nav className="w-full flex justify-around items-center text-sm font-semi-bold py-1 border-b border-black">
        <Link to="/" className="w-1/4">
            <img
                src="https://pern-milkshakes.s3.sa-east-1.amazonaws.com/logo.png"
                alt=""
                className="rounded-full"
            />
        </Link>
        <Link to="/">Flavors</Link>
        <Link to="/">Testimonials</Link>
        <Link to="/">Contact</Link>
    </nav>
)
