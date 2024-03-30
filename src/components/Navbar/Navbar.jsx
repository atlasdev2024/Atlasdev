import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const NavLink = [
    {
        id: "1",
        name: "Home",
        link: "/", // Update link to "/"
    },
    {
        id: "2",
        name: "Services",
        link: "/services",
    },
    {
        id: "3",
        name: "About Us",
        link: "/about", // Update link to "/about"
    },
    {
        id: "4",
        name: "WhyChooseUs",
        link: "/whychoose",
    },
];

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleToggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav className="shadow-md bg-gray-300 duration-300">
            <div className="container mx-auto px-4 md:px-0 py-4">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-xl font-bold">Atlas Premium Auto Shield</h1>
                    </div>
                    <div className="md:hidden">
                        <button onClick={handleToggleMenu} className="text-2xl cursor-pointer">&#9776;</button>
                    </div>
                    <div className={`md:flex ${showMenu ? 'block' : 'hidden'} md:items-center`}>
                        <ul className="md:flex items-center gap-8">
                            {NavLink.map((data) => (
                                <li key={data.id} className="py-4">
                                    <Link // Use Link instead of <a> tag
                                        to={data.link} // Set the "to" prop to the desired link
                                        className="py-2 hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-300 text-lg font-medium"
                                    >
                                        {data.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;