import React from 'react'
import { SkillInfo } from '../constant/skills-info';
import './skills.css'

const Skills = () => {
    return (
        <>
            <div className="section-header text-center mb-10">
                <h2 className='bg-clip-text text-5xl font-bold text-transparent bg-gradient-to-r from-[#8750F7] to-white pb-2 mb-2'>My Skills</h2>
                <p className='text-lg my-3 xl:px-96 lg:px-28 md:px-20'>Passionate about new technologies, I keep exploring stuff. Here's the tech stack, tools and IDE I've worked with!</p>
            </div>
            <div className='grid md:grid-cols-5 grid-cols-2 gap-4'>
            {SkillInfo.map((skill, index) => (
                <div className="skills-container relative flex flex-col p-4 items-center rounded-3xl bg-[#140C1C] bg-clip-border border border-[#2a1454] hover:border-[#8750F7] duration-[600ms] text-gray-700 shadow-md">
                    <div key={index} className="relative aspect-square overflow-hidden rounded-xl bg-clip-border text-gray-700 shadow-lg">
                        <img src={skill.icon} alt={skill.name} width={116} height={116} className='object-cover p-2' />
                    </div>
                    <div className="text-center">
                        <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {skill.rating}
                        </h4>
                        <p className="block bg-gradient-to-tr text-white bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased skill-name">
                            {skill.name}
                        </p>
                    </div>
                </div>
                ))}
            </div>
        </>
    )
}

export default Skills