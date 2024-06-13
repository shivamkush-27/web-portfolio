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
                <div class="relative flex w-96 flex-col rounded-xl bg-[#140C1C] bg-clip-border text-gray-700 shadow-md">
                    <div class="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                        <img src="../assets/tech-img/html.png" alt="profile-picture" />
                    </div>
                    <div class="p-6 text-center">
                        <h4 class="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            Natalie Paisley
                        </h4>
                        <p class="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
                            CEO / Co-Founder
                        </p>
                    </div>
                    <div class="flex justify-center gap-7 p-6 pt-2">
                        <a
                            href="#facebook"
                            class="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
                        >
                            <i class="fab fa-facebook" aria-hidden="true"></i>
                        </a>
                        <a
                            href="#twitter"
                            class="block bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
                        >
                            <i class="fab fa-twitter" aria-hidden="true"></i>
                        </a>
                        <a
                            href="#instagram"
                            class="block bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
                        >
                            <i class="fab fa-instagram" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills