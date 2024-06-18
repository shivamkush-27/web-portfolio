import React from 'react'
import { Skill_info } from '../constant/skills-info';

const Skills = () => {
    return (
        <>
            <div className="section-header text-center">
                <h2 className='bg-clip-text text-5xl font-bold text-transparent bg-gradient-to-r from-[#8750F7] to-white pb-2 mb-2'>My Skills</h2>
                <p className='text-lg my-3 xl:px-96 lg:px-28 md:px-20'>Passionate about new technologies, I keep exploring stuff. Here's the tech stack, tools and IDE I've worked with!</p>
            </div>
            <div className='grid grid-cols-4'>
                <div className="relative flex w-96 flex-col items-center rounded-3xl bg-[#140C1C] bg-clip-border text-gray-700 shadow-md">
                    <div className="relative mx-4 mt-4 w-80 aspect-square overflow-hidden rounded-xl bg-clip-border text-gray-700 shadow-lg">
                        <img src="../assets/tech-img/html5.png" alt="tech-picture" />
                    </div>
                    <div className="p-6 text-center">
                        <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 hover:text-[#8750F7] antialiased">
                            100%
                        </h4>
                        <p className="block bg-gradient-to-tr text-white bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
                            HTML5
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills