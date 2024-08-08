import React from 'react'
import '../App.css'
import Nav from '../component/Nav';
import Hero from '../component/Hero';
import Counter from '../component/Counter';
import Services from '../component/Services';
import Resume from '../component/Resume';
import Skills from '../component/Skills';
import Contact from '../component/Contact';
import { motion } from "framer-motion"

const Home = () => {
    return (
        <>
            <div className='h-full w-full pb-16 px-2'>
                <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration:0.5, delay:0.25}} className='container mx-auto sticky top-0 bg-[#0F0715] z-50'>
                    <Nav />
                </motion.section>
                <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration:1, delay:0.25}} className='md:px-8 py-8 lg:mt-8 lg:mx-16 lg:bg-[#140c1c] lg:border border-[#2a1454] rounded-2xl'>
                    <Hero />
                </motion.section>
                <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration:0.5, delay:0.25}} className='md:px-8 xl:px-0 py-8 lg:mt-8 lg:mx-16 lg:bg-[#140c1c] lg:border border-[#2a1454] rounded-2xl'>
                    <Counter />
                </motion.section>
                <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration:0.5, delay:0.25}} className='pt-8 lg:mt-8 lg:mx-16 md:mx-4 scroll-mt-8' id='services'>
                    <Services />
                </motion.section>
                <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration:0.5, delay:0.5}} className='md:p-0 xl:px-0 lg:mx-16 md:mx-4 scroll-mt-8' id='resume'>
                    <Resume />
                </motion.section>
                <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration:0.5, delay:0.5}} className='pt-8 lg:mt-8 lg:mx-16 md:mx-4 scroll-mt-4' id='skills'>
                    <Skills />
                </motion.section>
                <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration:0.5, delay:0.5}} className='md:px-8 py-8 lg:mt-8 lg:mx-16 lg:bg-[#140c1c] lg:border border-[#2a1454] rounded-2xl' id='contact'>
                    <Contact />
                </motion.section>
            </div>
        </>
    )
}

export default Home