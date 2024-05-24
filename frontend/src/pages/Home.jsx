import React from 'react'
import '../App.css'
import Nav from '../component/Nav';

const Home = () => {
    return (
        <>
            <div className='h-screen w-full bg-[#ffffff8c]'>
                <div className='container mx-auto my-16'>
                    <Nav />
                </div>
           </div>
        </>
    )
}

export default Home