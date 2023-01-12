import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="mt-10">
            <ul className="flex justify-center space-x-8">
                <li>
                    <NavLink to="/" className={(nav) => nav.isActive ? "text-red-600" : ""}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={(nav) => nav.isActive ? "text-red-600" : ""}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/service" className={(nav) => nav.isActive ? "text-red-600" : ""}>Service</NavLink>
                </li>
                <li>
                    <NavLink to="/blog" className={(nav) => nav.isActive ? "text-red-600" : ""}>Blog</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={(nav) => nav.isActive ? "text-red-600" : ""}>Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar