import React from 'react'
import '../App.css'
import Nav from '../component/Nav';
import Hero from '../component/Hero';
import Counter from '../component/Counter';

const Home = () => {
    return (
        <>
            <div className='h-full w-full'>
                <section className='container mx-auto'>
                    <Nav />
                </section>
                <section className=' md:px-8 py-8 lg:mt-8 lg:mx-16 lg:bg-[#140c1c] lg:border border-[#2a1454] rounded-2xl'>
                    <Hero />
                </section>
                <section className=' md:px-8 py-8 lg:mt-8 lg:mx-16 lg:bg-[#140c1c] lg:border border-[#2a1454] rounded-2xl'>
                    <Counter />
                </section>
           </div>
        </>
    )
}

export default Home