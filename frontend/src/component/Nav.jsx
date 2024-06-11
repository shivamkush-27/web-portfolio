import React from 'react'
import Logo from '../assets/logo.png'
import { Navlinks } from '../constant/Navlink'
import './Navbar.css'

const Nav = () => {
    return (
        <>
            <header className="lg:px-16 px-4 flex flex-wrap items-center py-4 shadow-lg">
                <div className="flex-1 flex justify-between items-center">
                    <a href='/'>
                        <img className="sm:w-[10rem] xs:w-[7rem] logo-img" src={Logo} alt="Shivam" />
                    </a>
                </div>
                <label for="menu-toggle" className="pointer-cursor md:hidden block">
                    <svg className="fill-current text-gray-200" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                        <title>menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </label>
                <input className="hidden" type="checkbox" id="menu-toggle" />
                <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
                    <nav>
                        <ul className="md:flex items-center justify-between text-base text-gray-100 pt-4 md:pt-0">
                            {Navlinks.map((link, index)=>(
                              <li key={index}>
                                <a className="md:p-4 py-3 px-0 block" href={link.endpoint}>{link.label}</a></li>  
                            ))}
                            <li className='lg:block hidden'>
                                <button className="md:py-3 md:px-10 flex text-lg rounded-full py-3 px-0 items-center gap-x-2 bg-[#8750F7]" href="#">Resume <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg></button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Nav