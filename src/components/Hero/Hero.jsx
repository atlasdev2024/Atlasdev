import React from 'react'
import carPng from '../../assets/Atlast Assets/Hero Images/AtlasHero3-shadow.png'
import grayCarPng from '../../assets/Atlast Assets/Hero Images/AtlasHerolight1-640x488.png'

const Hero = ({theme}) => {
  return (
    <div className="dark:bg-black
    dark:text-white duration-300 relative-z-20">
        <div className="container min-h-[620px] flex">
    <div className="grid 
    place-items-center grid-cols-2
    sm-grid-cols-2">
        <div 
        data-aos="zoom-in"
        data-aos-duration="1500"
        className="order-1
        sm:order-2">
            <img 
            src={theme === "dark" ?
            carPng: grayCarPng} 
            alt="" className="relative -z-10max-h-[600px]
            sm:scale-125
            drop-shadow-[2px_20px_rgba(0,0,0,0.50)]
            "/>
        </div>
        <div className="order-2 
        sm:order-1 space-y-5 sm:pr-32">
            <p 
            data-aos="fade-up" 
            className="text-primary
            text-2xl font-semi-bold font-serif ">Crafting Perfection, One Detail at a Time.</p>
            <h1
            data-aos="fade-up"
            data-aos-delay="600"
            className="text-5xl
            lg:text-7xl font-semi-bold
            font-serif"
            >Drive with Confidence!</h1>
            <p data-aos="fade-up"
            data-aos-delay="1000"
            >"Precision Detailing: Where True Beauty is Revealed. With painstaking attention to
             every contour, our skilled artisans breathe new life into your vehicle, unveiling
              a level of pristine elegance that captivates the eye and rejuvenates your driving experience."</p>
            <button 
            data-aos="fade-up"
            data-aos-delay="1000"
            className="btn 
            bg-primary text-black px-6
            py-2 rounded-md hover:bg-primary/80
            duration-300 font-bold">
                Get Started
            </button>
            </div>
        </div>
    </div>
</div>
  )
}

export default Hero