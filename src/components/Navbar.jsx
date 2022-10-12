import { Link } from "react-router-dom"

export const Navbar = () => (
    <nav className="w-full flex justify-around items-center text-white">
        <Link to="/" className="w-1/12">
            <img
                src="https://pern-milkshakes.s3.sa-east-1.amazonaws.com/milkshake.logo.jpg"
                alt=""
                className="rounded-full"
            />
        </Link>
        <Link to="/">Milkshakes</Link>
        <Link to="/">Testimonials</Link>
        <Link to="/">Contact</Link>
    </nav>
)
