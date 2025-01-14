import React from 'react'
import Logo from '../assets/logo_default.webp';
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { FaBlogger, FaDev, FaTwitterSquare } from "react-icons/fa";

const Navlinks = [
  { endpoint: '/about-me', label: "About" },
  { endpoint: '/projects', label: "Project" },
  { endpoint: '/services', label: "Services" },
  { endpoint: '/contact', label: "Contact" },
];
const SocialLinks = [
    { name: "GitHub", label: <IoLogoGithub size={20} className='hover:text-[#6e5494]' />, href:"https://github.com/shivamkush-27" },
    { name: "LinkedIn", label: <IoLogoLinkedin size={20} className='hover:text-[#0a66c2]' />, href:"https://www.linkedin.com/in/shivamkush-27" },
    { name: "Blog", label: <FaBlogger size={20} className='hover:text-[#FF5722]' />, href:"https://bhogul.com/?utm_source=github&utm_medium=social" },
    { name: "Twitter", label: <FaTwitterSquare size={20} className='hover:text-[#1DA1F2]' />, href:"https://x.com/hrt_bet_shivam" },
  ];

const Footer = () => {
  return (
    <footer className="boxShadow rounded-xl w-full p-6 lg:p-9 text-white">
      <div className="flex justify-center gap-[30px] flex-wrap w-full sm:px-32">
        <a href='/' className="text-2xl font-bold">
          <img src={Logo} alt="" className='h-10' />
        </a>
        <ul
          className="flex justify-center gap-3 w-full flex-nowrap">
            {Navlinks.map((link, index) => (
              <li className='p-3 text-base text-text hover:text-primary cursor-pointer transition-all duration-200' key={index}>
                <a href={link.endpoint} className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">{link.label}</a>
              </li>
            ))}
        </ul>

        <div className="flex items-center flex-wrap gap-[10px] text-text">
          {SocialLinks.map((link, index) => (
          <a href={link.href} className="text-[1.3rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-primary transition-all duration-300" title='Visit ${link.name}' key={index}>
            {link.label}
          </a>))}
        </div>


        <div
          className="flex items-center w-full justify-center">
          <p className="text-base text-white">Created by <span className='text-[#3B9DF8]'>Shivam Kush</span></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer