import React from 'react'
import { FaPesoSign } from "react-icons/fa6";

const skilsData = [
  {
    name: "Best Price",
    icon: (
      <FaPesoSign className="text-5xl
      text-primary group-hover:text-black
      duration-300" />
    ),
    link: "#",
    description: "lorem ipsum dolor sit amet, consectetur",
    aosDelay: "0"
  }
]
const Services = () => {
  return (
    <div className="py-14 dark:bg-black
    dark:text-white sm:min-h[600px] sm:grid
    sm:place-items-center">
        <div className="container">
          <div className="pb-12">
            <h1 
            className="text-3xl font-semibold
            text-center font-serif sm:text-4xl">
              Why Choose Us
              </h1>
          </div>
          <div className=" grid grid-cols-1 
          sm:grid-cols-2 md:grid-cols-3 gap-4">
              {
                skilsData.map ((skill,index) => (
                  <div>

                  </div>
                ))}
          </div>
        </div>
    </div>
  )
}

export default Services