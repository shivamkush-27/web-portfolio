import React from 'react'
import Photo from '../assets/Discord.jpeg'
import { TypeAnimation } from 'react-type-animation';
import './Hero.css'

const Hero = () => {
    return (
        <>
            <div className="hero h-full w-full mx-auto flex lg:gap-12 gap-4 justify-center items-center">
                <div className="w-full max-w-xs">
                    <img className="rounded-lg duration-[600ms] xl:max-w-[100%] lg:max-w-[100%] sm:max-w-[90%] mx-auto md:mx-0" src={Photo} alt="My Image" />
                </div>
                <div className="detail w-full flex flex-col justify-center gap-4 text-white md:mt-0 sm:mt-8 xs:mt-4">
                    {/* Display on large device */}
                    <h1 className="sm:text-4xl text-2xl xl:text-5xl font-semibold font-serif xl:block hidden">Hi, I'm Shivam ~ <span className="capitalize text-3xl lg:text-4xl typing text-[#8750F7]">
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
                    <h1 className='xl:hidden block'><span className="sm:text-4xl text-2xl font-semibold font-serif">Hi, I'm Shivam</span>
                    <br />&nbsp;<span className="capitalize text-3xl typing text-[#8750F7]">
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
                    <p className='max-w-[52rem] text-lg'>Experienced Front End Developer with 3+ years of expertise in ReactJs, WordPress and is well versed in CSS libraries like Tailwind CSS and Bootstrap. I design and code beautifully simple things and I love what I do. Just simple like that!</p>
                    <p className='max-w-[52rem] text-lg'>Proven Track record for writing high quality content that helps is SEO of your website. Skilled in designing and Developing WordPress based websites with On-page SEO.</p>
                    <div className="sm:mt-2 xs:mt-2">
                        <a href='#contact'><button className="px-6 py-3 bg-[#8750F7] text-white rounded-full">Get In Touch</button></a>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Hero