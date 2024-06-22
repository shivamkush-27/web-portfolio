import React from 'react'
import '../App.css'
import Nav from '../component/Nav';
import Hero from '../component/Hero';
import Counter from '../component/Counter';
import Services from '../component/Services';
import Resume from '../component/Resume';
import Skills from '../component/Skills';
import Contact from '../component/Contact';

const Home = () => {
    return (
        <>
            <div className='h-full w-full pb-16 px-2'>
                <section className='container mx-auto'>
                    <Nav />
                </section>
                <section className='md:px-8 py-8 lg:mt-8 lg:mx-16 lg:bg-[#140c1c] lg:border border-[#2a1454] rounded-2xl'>
                    <Hero />
                </section>
                <section className='md:px-8 xl:px-0 py-8 lg:mt-8 lg:mx-16 lg:bg-[#140c1c] lg:border border-[#2a1454] rounded-2xl'>
                    <Counter />
                </section>
                <section className='pt-8 lg:mt-8 lg:mx-16 md:mx-4 scroll-mt-8' id='services'>
                    <Services />
                </section>
                <section className='md:p-0 xl:px-0 lg:mx-16 md:mx-4 scroll-mt-8' id='resume'>
                    <Resume />
                </section>
                <section className='pt-8 lg:mt-8 lg:mx-16 md:mx-4 scroll-mt-4' id='skills'>
                    <Skills />
                </section>
                <section className='md:px-8 py-8 lg:mt-8 lg:mx-16 lg:bg-[#140c1c] lg:border border-[#2a1454] rounded-2xl'>
                    <Contact />
                </section>
            </div>
        </>
    )
}

export default Home