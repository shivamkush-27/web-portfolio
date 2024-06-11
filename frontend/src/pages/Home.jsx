import React from 'react'
import '../App.css'
import Nav from '../component/Nav';
import Hero from '../component/Hero';

const Home = () => {
    return (
        <>
            <div className='h-full w-full'>
                <div className='container mx-auto'>
                    <Nav />
                </div>
                <div className='lg:my-8 lg:mx-16 lg:bg-[#140c1c] lg:border border-[#2a1454] rounded-2xl'>
                    <Hero />
                </div>
           </div>
        </>
    )
}

export default Home