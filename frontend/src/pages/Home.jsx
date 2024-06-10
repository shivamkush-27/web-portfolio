import React from 'react'
import '../App.css'
import Nav from '../component/Nav';

const Home = () => {
    return (
        <>
            <div className='h-screen w-full'>
                <div className='container mx-auto'>
                    <Nav />
                </div>
           </div>
        </>
    )
}

export default Home