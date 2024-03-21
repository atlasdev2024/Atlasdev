import React from 'react';
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";

const NavLink = [
    {
        id:"1",
        name: "Home",
        link: "/#"
    },
    {
        id:"2",
        name: "Services",
        link: "/Services",
    },
    {
        id:"3",
        name: "About",
        link: "/#About",
    },
    {
        id:"4",
        name: "Booking",
        link: "/#Booking",
    },
]
const Navbar = ({theme, setTheme}) => {
  return (
    <nav className="shadow-md">
        <div className="container">
            <div className="flex
            justify-between items-center">
                <div>
                    <h1 className="text-xl
                    font-bold">Atlas Premium Auto Shield</h1>
                </div>
                <div className="hidden md:block">
                    <ul className="flex 
                    items-center gap-8">
                        { NavLink.map((data) =>(
                        <li key={data.id}>
                            <a
                             className="inline-block
                            py-2 hover:border-b-2
                            hover:text-primary
                            hover:border-primary
                            transition-colors
                            duration-500 text-lg
                            font-medium"
                             href={data.link}>
                                {data.name}
                                </a>
                        </li>
                        ))}
                    </ul>
                </div>
                <div>
                    {
                        theme=="dark"?(<BiSolidSun
                        onClick={() => setTheme
                        ("light")}
                            className="text-2xl" />
                            ):(
                                <BiSolidMoon
                                onClick={() => setTheme
                                    ("dark")}
                            className="text-2xl" />
                            )
                    }
                
            </div>
            </div>
        </div>
    </nav>
    );
  
}

export default Navbar;