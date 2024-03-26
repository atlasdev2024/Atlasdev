import React, { useState } from 'react';
import { BiSolidMoon, BiSolidSun, BiMenu, BiX } from "react-icons/bi";

const NavLink = [
    {
        id: "1",
        name: "Home",
        link: "/#"
    },
    {
        id: "2",
        name: "Services",
        link: "/Services",
    },
    {
        id: "3",
        name: "About",
        link: "/#About",
    },
    {
        id: "4",
        name: "Booking",
        link: "/#Booking",
    },
]

const Navbar = ({ theme, setTheme }) => {
    const [showMenu, setShowMenu] = useState(false);

    const handleToggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav className="shadow-md bg-white dark:bg-dark dark:text-white duration-300">
            <div className="container md:py-0">
                <div className="flex justify-between items-center inset: 0px">
                    <div>
                        <h1 className="text-xl font-bold">Atlas Premium Auto Shield</h1>
                    </div>
                    <div className="md:hidden">
                        {showMenu ? (
                            <BiX onClick={handleToggleMenu} className="text-2xl cursor-pointer" />
                        ) : (
                            <BiMenu onClick={handleToggleMenu} className="text-2xl cursor-pointer" />
                        )}
                    </div>
                    <div className={`md:flex ${showMenu ? 'block' : 'hidden'}`}>
                        <ul className="flex items-center gap-8">
                            {NavLink.map((data) => (
                                <li key={data.id} className="py-4">
                                    <a
                                        className="py-2 hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-300 text-lg font-medium"
                                        href={data.link}>
                                        {data.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        {
                            theme === "dark" ? (
                                <BiSolidSun onClick={() => setTheme("light")} className="text-2xl" />
                            ) : (
                                <BiSolidMoon onClick={() => setTheme("dark")} className="text-2xl" />
                            )
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;