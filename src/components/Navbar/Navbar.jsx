import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Atlast Assets/Hero Images/Logo_1-removebg-preview-small.png';

const NavLink = [
    {
        id: "1",
        name: "Home",
        link: "/",
    },
    {
        id: "2",
        name: "Services",
        link: "/services",
    },
    {
        id: "3",
        name: "About Us",
        link: "/about",
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
        <nav className="shadow-md bg-dark duration-300">
            <div className="container mx-auto px-4 md:px-0 py-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center"> 
                        <img src={logo} alt="Logo" className="h-8 mr-2" /> 
                        <h1 className="text-xl font-bold text-white">Atlas Premium Auto Shield</h1>
                    </div>
                    <div className="md:hidden">
                        <button onClick={handleToggleMenu} className="text-2xl cursor-pointer text-white">&#9776;</button>
                    </div>
                    <div className={`md:flex ${showMenu ? 'block' : 'hidden'} md:items-center`}>
                        <ul className="md:flex items-center gap-8">
                            {NavLink.map((data) => (
                                <li key={data.id} className="py-4">
                                    <Link 
                                        to={data.link} 
                                        className="underline py-2 hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-300 text-lg font-medium text-white"
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