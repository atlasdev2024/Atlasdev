// import React from 'react';
// import Services from '../Services/';
// // import Logo from './logo';
// import { BiSolidMoon, BiSolidSun } from "react-icons/bi";


// const NavLink = [
//     {
//         id:"1",
//         name: "Home",
//         link: "/#"
//     },
//     {
//         id:"2",
//         name: "Services",
//         link: "/Services",
//     },
//     {
//         id:"3",
//         name: "About",
//         link: "/#About",
//     },
//     {
//         id:"4",
//         name: "Booking",
//         link: "/#Booking",
//     },
// ]

// const Navbar = ({theme, setTheme}) => {
//   return (
//     <nav className="shadow-md bg-white
//     dark:bg-dark dark:text-white duration-300">
//         <div className="container md:py-0">
//             <div className="flex
//             justify-between items-center inset: 0px">
//                 <div>
//                     {/* <Logo />  */}
//                     <h1 className="text-xl
//                     font-bold
//                     ">Atlas Premium Auto Shield</h1>
//                </div>
//                 <div className="hidden md:block">
//                     <ul className="flex 
//                     items-center gap-8">
//                         {NavLink.map((data) =>(
//                         <li key={data.id} className="py-4">
//                             <a
//                              className="py-2
//                             hover:border-b-2
//                             hover:text-primary
//                             hover:border-primary
//                             transition-colors
//                             duration-300 text-lg
//                             font-medium"
//                              href={data.link}>
//                                 {data.name}
//                                 </a>
//                         </li>
//                         ))}
//                     </ul>
//                 </div>
//                 <div>
//                     {
//                         theme=="dark"? (<BiSolidSun
//                         onClick={() => setTheme
//                         ("light")}
//                             className="text-2xl"/>
//                             ):(
//                                 <BiSolidMoon
//                                 onClick={() => setTheme
//                                     ("dark")}
//                             className="text-2xl"/>
//                             )
//                     }
                
//             </div>
//             </div>
            
//         </div>
//     </nav>
//     );
  
// }

// export default Navbar;

// import React, { useState } from 'react';
// // import Logo from './logo';
// import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
// import { FaPesoSign } from "react-icons/fa6";
// import { FaGem } from "react-icons/fa";
// import { GrCertificate } from "react-icons/gr";

// const NavLink = [
//     {
//         id:"1",
//         name: "Home",
//         link: "/#"
//     },
//     {
//         id:"2",
//         name: "Services",
//         link: "/Services",
//         dropdown: true,
//         dropdownItems: [ 
//             {
//                 name: "Best Price",
//                 icon: <FaPesoSign />,
//                 link: "#",
//                 description: "Select Atlas Premium Auto Shield for unbeatable prices in auto detailing, where affordability meets exceptional quality, ensuring you get the best value for your investment in maintaining your vehicle's pristine condition."
//             },
//             {
//                 name: "Premium Products",
//                 icon: <FaGem />,
//                 link: "#",
//                 description: "We believe in using only the best products and techniques to treat your vehicle. From top-of-the-line cleaning solutions to advanced polishing methods, we employ cutting-edge technology to deliver results that exceed expectations."
//             },
//             {
//                 name: "Unmatched Expertise",
//                 icon: <GrCertificate />,
//                 link: "#",
//                 description: "We believe in using only the best products and techniques to treat your vehicle. From top-of-the-line cleaning solutions to advanced polishing methods, we employ cutting-edge technology to deliver results that exceed expectations."
//             }
//         ]
//     },
//     {
//         id:"3",
//         name: "About",
//         link: "/#About",
//     },
//     {
//         id:"4",
//         name: "Booking",
//         link: "/#Booking",
//     },
// ]

// const Navbar = ({theme, setTheme}) => {
//   const [showDropdown, setShowDropdown] = useState(false);

//   const handleToggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//   };

//   return (
//     <nav className="shadow-md bg-white dark:bg-dark dark:text-white duration-300">
//         <div className="container md:py-0">
//             <div className="flex justify-between items-center inset: 0px">
//                 <div>
//                     {/* <Logo />  */}
//                     <h1 className="text-xl font-bold">Atlas Premium Auto Shield</h1>
//                </div>
//                 <div className="hidden md:block">
//                     <ul className="flex items-center gap-8">
//                         {NavLink.map((data) =>(
//                             <li key={data.id} className="py-4">
//                                 {data.dropdown ? (
//                                     <div className="relative">
//                                         <a
//                                             className="py-2 hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-300 text-lg font-medium"
//                                             onClick={handleToggleDropdown}
//                                             href={data.link}>
//                                             {data.name}
//                                         </a>
//                                         {showDropdown && (
//                                             <ul className="absolute left-0 w-48 py-2 bg-white dark:bg-dark dark:text-white shadow-md rounded-md z-10">
//                                                 {data.dropdownItems.map((item, index) => (
//                                                     <li key={index} className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-800">
//                                                         <a href={item.link} className="flex items-center gap-2">
//                                                             {item.icon}
//                                                             <span>{item.name}</span>
//                                                         </a>
//                                                         <p className="text-sm">{item.description}</p>
//                                                     </li>
//                                                 ))}
//                                             </ul>
//                                         )}
//                                     </div>
//                                 ) : (
//                                     <a
//                                         className="py-2 hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-300 text-lg font-medium"
//                                         href={data.link}>
//                                         {data.name}
//                                     </a>
//                                 )}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//                 <div>
//                     {
//                         theme === "dark" ? (
//                             <BiSolidSun onClick={() => setTheme("light")} className="text-2xl"/>
//                         ) : (
//                             <BiSolidMoon onClick={() => setTheme("dark")} className="text-2xl"/>
//                         )
//                     }
//                 </div>
//             </div>
//         </div>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState } from 'react';
import Services from '../Services/Services';
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";

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
        dropdown: true, // Indicates it has dropdown items
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
    const [showDropdown, setShowDropdown] = useState(false);

    const handleToggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <nav className="shadow-md bg-white dark:bg-dark dark:text-white duration-300">
            <div className="container md:py-0">
                <div className="flex justify-between items-center inset: 0px">
                    <div>
                        <h1 className="text-xl font-bold">Atlas Premium Auto Shield</h1>
                    </div>
                    <div className="hidden md:block">
                        <ul className="flex items-center gap-8">
                            {NavLink.map((data) => (
                                <li key={data.id} className="py-4">
                                    {data.dropdown ? (
                                        <div className="relative">
                                            <a
                                                className="py-2 hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-300 text-lg font-medium"
                                                onClick={handleToggleDropdown}
                                                href={data.link}>
                                                {data.name}
                                            </a>
                                            {showDropdown && (
                                                <div className="absolute left-0 mt-2 bg-white dark:bg-dark dark:text-white shadow-md rounded-md z-10">
                                                    <Services /> {/* Here we render the Services component */}
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <a
                                            className="py-2 hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-300 text-lg font-medium"
                                            href={data.link}>
                                            {data.name}
                                        </a>
                                    )}
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