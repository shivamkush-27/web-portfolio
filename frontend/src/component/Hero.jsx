import React from 'react'
import Photo from '../assets/Discord.jpeg'
import { TypeAnimation } from 'react-type-animation';
import './Hero.css'

const Hero = () => {
    return (
        <>
            <div className="hero h-full w-full mx-auto md:px-8 flex gap-4 justify-center items-center py-14">
                <div className="w-full">
                    <img className="rounded-lg duration-[600ms] xl:max-w-[50%] lg:max-w-[60%] sm:max-w-[70%] mx-auto" src={Photo} alt="My Image" />
                </div>
                <div className="detail w-full flex flex-col justify-center gap-4 text-white md:mt-0 sm:mt-8 xs:mt-4">
                    {/* Display on large device */}
                    <h1 className="sm:text-4xl text-2xl font-semibold font-serif lg:block hidden">Hi, I'm Shivam ~ <span className="capitalize text-3xl typing text-[#8750F7]">
                        <TypeAnimation
                            sequence={[
                                'Front End Developer', 
                                2000, 
                                'WordPress Designer', 
                                2000, 
                                'ReactJs Developer', 
                                2000,
                                'Content Writer',
                                2000,
                                'SEO Expert',
                                2000,
                                () => {
                                    console.log('Completed');
                                },
                            ]}
                            wrapper="span"
                            cursor={false}
                            repeat={Infinity}
                        />
                    </span></h1>
                    {/* Display on small devices */}
                    <h1 className='lg:hidden block'><h2 className="sm:text-4xl text-2xl font-semibold font-serif">Hi, I'm Shivam</h2><span className="capitalize text-3xl typing text-[#8750F7]">
                        <TypeAnimation
                            sequence={[
                                'Front End Developer', 
                                2000, 
                                'WordPress Designer', 
                                2000, 
                                'ReactJs Developer', 
                                2000,
                                'Content Writer',
                                2000,
                                'SEO Expert',
                                2000,
                                () => {
                                    console.log('Completed');
                                },
                            ]}
                            wrapper="span"
                            cursor={false}
                            repeat={Infinity}
                        />
                    </span></h1>
                    <p className='max-w-2xl text-lg'>Experienced Front End Developer with 3+ years of expertise in ReactJs, WordPress and is well versed in CSS libraries like Tailwind CSS and Bootstrap.<br />I design and code beautifully simple things and i love what i do. Just simple like that!</p>
                    <div className="sm:mt-2 xs:mt-2">
                        <button className="px-6 py-3 bg-[#8750F7] text-white rounded-full">Get In Touch</button>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Hero