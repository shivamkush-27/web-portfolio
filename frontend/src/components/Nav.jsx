import React, { useState } from 'react'
import { IoLogoGithub } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";
import Logo from '../assets/logo_default.webp';
import { Link, NavLink } from 'react-router-dom';

const Navlinks = [
  { endpoint: '/about', label: "About" },
  { endpoint: '/work', label: "Work" },
  { endpoint: '/projects', label: "Project" },
  { endpoint: '/services', label: "Services" },
  { endpoint: '/contact', label: "Contact" },
];

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="bg-gray-900 text-white mb-8 sticky top-0 z-20">
        <nav className="flex items-center justify-between py-3">
          <Link to='/' className="text-2xl font-bold">
            <img src={Logo} alt="" className='h-10' />
          </Link>
          <ul className="hidden md:flex lg:gap-x-16 items-center px-4 bg-transparent shadow-[inset_5px_5px_10px_#0e0e0e,inset_-5px_-5px_10px_#202735] rounded-full">
            {Navlinks.map((link, index) => (
              <li className='p-3' key={index}>
                <NavLink to={link.endpoint} className={({ isActive }) =>
                    `relative cursor-pointer capitalize 
                    ${isActive ? 'text-[#3B9DF8] underline underline-offset-4' : 'hover:text-[#3B9DF8] before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute before:rounded-full before:bottom-[-2px] before:left-0'}`
                  }>{link.label}</NavLink>
              </li>
            ))}
          </ul>

          <div className='flex flex-nowrap gap-2'>
            <a href='https://github.com/shivamkush-27' target='blank' className="p-4 shadow-[inset_5px_5px_10px_#0e0e0e,inset_-5px_-5px_10px_#282828] rounded-full" title='Visit GitHub' >
              <IoLogoGithub size={20} className='hover:text-[#6e5494] duration-500' />
            </a>
            <button
              className="md:hidden p-4 shadow-[inset_5px_5px_10px_#0e0e0e,inset_-5px_-5px_10px_#202735] rounded-full"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <RiMenu3Fill size={20} title='Open Menu' />
            </button>
          </div>
        </nav>
        {menuOpen && (
          <ul className="flex flex-col items-center space-y-3 md:hidden">
            {Navlinks.map((link, index) => (
            <li>
            <a href={link.endpoint} className="hover:underline">{link.label}</a>
            </li>
            ))}
          </ul>
        )}
      </div>
    </>
  )
}

export default Nav