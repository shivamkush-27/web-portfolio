import React from 'react'
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { FaBlogger, FaDev, FaTwitterSquare } from "react-icons/fa";

const SocialLinks = [
    { name: "GitHub", label: <IoLogoGithub size={20} className='group-hover/color:text-[#6e5494]' />, href:"https://github.com/shivamkush-27" },
    { name: "LinkedIn", label: <IoLogoLinkedin size={20} className='group-hover/color:text-[#0a66c2]' />, href:"https://www.linkedin.com/in/shivamkush-27" },
    { name: "Blog", label: <FaBlogger size={20} className='group-hover/color:text-[#FF5722]' />, href:"https://bhogul.com/?utm_source=github&utm_medium=social" },
    { name: "Twitter", label: <FaTwitterSquare size={20} className='group-hover/color:text-[#1DA1F2]' />, href:"https://x.com/hrt_bet_shivam" },
    { name: "DevTo", label: <FaDev size={20} className='group-hover/color:text-[#F58F8E]' />, href:"https://app.daily.dev/shivamkush27" },
  ];
const Profile = () => {
    return (
        <div className="w-full">
            <div className='flex flex-wrap justify-center gap-x-8 gap-y-4 sm:p-8 px-4 py-8 shadow-[inset_5px_5px_10px_#0e0e0e,inset_-5px_-5px_10px_#202735] rounded-[2rem]'>
                {SocialLinks.map((link, index) => (
                <a href={link.href} target='blank' className="group/color p-4 shadow-[inset_5px_5px_10px_#0e0e0e,inset_-5px_-5px_10px_#282828] rounded-full" key={index} title={link.name}>
                    {link.label}
                </a>))}
            </div>
            <h6 className="text-base md:text-xs font-normal mt-8 text-[#bcbcbc] uppercase tracking-wider">
                Stay Connected</h6>
            <div className='flex flex-wrap justify-between items-center w-full'>
                <h3 className="text-white text-2xl mt-2">Profile</h3>
                <div className='flex justify-end xl:w-auto'>
                    <svg className='stroke-gray-500 group-hover:stroke-white duration-300 ease-in-out' width="46" height="42" viewBox="0 0 46 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30.9224 21.2014C25.1291 21.2014 24.618 24.7796 24.618 27.3354C24.618 21.5421 21.5509 21.2014 17.9727 21.2014C24.618 21.2014 24.618 17.2824 24.618 14.8969C24.618 20.3494 27.8554 21.2014 30.9224 21.2014Z" fill="var(#000,#F4F4F4)" stroke="var(#000,#F4F4F4)"></path><rect y="21.6981" width="0.999999" height="18" transform="rotate(-90 0 21.6981)" fill="var(#000,#F4F4F4)"></rect><path d="M9.93715 16.8555C10.9514 13.0701 13.2829 9.77074 16.5123 7.55063C19.7417 5.33052 23.6571 4.33531 27.5547 4.74394C31.4522 5.15258 35.0762 6.93825 37.7749 9.77989C40.4736 12.6215 42.07 16.3327 42.2771 20.2461C42.4842 24.1596 41.2884 28.0185 38.9047 31.1291C36.5211 34.2398 33.1059 36.398 29.2732 37.2157C25.4406 38.0335 21.4419 37.4571 17.9962 35.5903C14.5505 33.7234 11.8839 30.6886 10.4757 27.0314" stroke="var(#000,#F4F4F4)" stroke-width="1.5" stroke-linecap="round"></path>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Profile