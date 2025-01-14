import React from 'react'
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { FaBlogger, FaDev, FaTwitterSquare } from "react-icons/fa";
import Mypic from '../assets/Discord.jpeg';
import { GiJusticeStar } from "react-icons/gi";
import { Experience, Education } from '../components/common/summary';
import { Link } from 'react-router-dom';
import ContactComp from '../components/common/ContactComp';

export const SocialLinks = [
  { name: "GitHub", label: <IoLogoGithub size={18} className='group-hover/color:text-[#6e5494]' />, href: "https://github.com/shivamkush-27" },
  { name: "LinkedIn", label: <IoLogoLinkedin size={18} className='group-hover/color:text-[#0a66c2]' />, href: "https://www.linkedin.com/in/shivamkush-27" },
  { name: "Blog", label: <FaBlogger size={18} className='group-hover/color:text-[#FF5722]' />, href: "https://bhogul.com/?utm_source=github&utm_medium=social" },
  { name: "Twitter", label: <FaTwitterSquare size={18} className='group-hover/color:text-[#1DA1F2]' />, href: "https://x.com/hrt_bet_shivam" },
  { name: "DevTo", label: <FaDev size={18} className='group-hover/color:text-[#F58F8E]' />, href: "https://app.daily.dev/shivamkush27" },
];

const AboutMe = () => {
  return (
    <>
    <title>About Shivam</title>
      <div className="grid grid-cols-1 lg:grid-cols-6 lg:gap-8 gap-y-8 text-white mt-8">
        <div className="group rounded-[2rem] col-span-2 p-8 lg:sticky top-20 shadow-[inset_5px_5px_10px_#0e0e0e,inset_-5px_-5px_10px_#202735]"
          style={{ height: "fit-content" }}
        >
          <div className="flex flex-col items-center gap-5 ">
            <img
              src={Mypic}
              alt="Shivam Image"
              className="rounded-tl-[2rem] rounded-br-[2rem]"
            />
            <Link
              title="Contact me"
              to="/contact"
              className="w-full text-center p-2 rounded-full shadow-[2px_2px_10px_#0e0e0e,-2px_-2px_10px_#202735] hover:shadow-[inset_5px_5px_10px_#0e0e0e,inset_-5px_-5px_10px_#202735]"
            >
              Contact Me
            </Link>
            <div className="text-center">
              <h2 className="md:text-4xl text-3xl mb-2">Shivam Kush</h2>
              <h2 className="text-lg text-[#bcbcbc]">@shivamkush-27</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-x-8 xl:gap-x-4 gap-y-4">
              {SocialLinks.map((link, index) => (
                <a
                  href={link.href}
                  target="blank"
                  className="group/color p-4 shadow-[inset_5px_5px_10px_#0e0e0e,inset_-5px_-5px_10px_#282828] rounded-full"
                  key={index}
                  title={link.name}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-4 overflow-hidden relative space-y-8">
          <div className="w-full flex flex-nowrap justify-center items-center text-center lg:text-5xl text-3xl space-x-2">
            <GiJusticeStar className="text-[#bcbcbc] select-none" />
            <h2 className="uppercase">Self <span className="text-[#3B9DF8]">Summary</span></h2>
            <GiJusticeStar className="text-[#bcbcbc] select-none" />
          </div>
          <div className='p-8 shadow-[inset_5px_5px_10px_#0e0e0e,inset_-5px_-5px_10px_#202735] rounded-[2rem] space-y-2'>
            <h2 className='text-4xl'>Shivam Kush</h2>
            <p className='text-[#bcbcbc]'>Hey, I am a Front-End Web Developer and WordPress Designer with strong skills in Search Engine Optimization and Content Writing. I have over 3.5 years of experience in this field and have designed and developed more than 60 web apps using React.js and WordPress CMS.</p>
          </div>

          <div className='p-8 shadow-[inset_5px_5px_10px_#0e0e0e,inset_-5px_-5px_10px_#202735] rounded-[2rem] space-y-6'>
            <h2 className='text-2xl'>Experience</h2>
            {Experience.map((exp, index) => (
              <div className='shadow-[inset_5px_5px_10px_#0e0e0e,inset_-5px_-5px_10px_#202735] rounded-[2rem] space-y-2 p-8' key={index}>
                <h3 className='text-xl'>{exp.position}</h3>
                <p className='text-[#bcbcbc]'>{exp.company}, {exp.type}</p>
                <p className='text-[#bcbcbc]'>{exp.date}</p>
                <p className='text-[#bcbcbc]'>{exp.detail}</p>
              </div>
            ))}
          </div>

          <div className='p-8 shadow-[inset_5px_5px_10px_#0e0e0e,inset_-5px_-5px_10px_#202735] rounded-[2rem] space-y-6'>
            <h2 className='text-2xl'>Education</h2>
            {Education.map((edu, index) => (
              <div className='shadow-[inset_5px_5px_10px_#0e0e0e,inset_-5px_-5px_10px_#202735] rounded-[2rem] space-y-2 p-8' key={index}>
                <h3 className='text-xl'>{edu.college}</h3>
                <p className='text-[#bcbcbc]'>{edu.degree}</p>
                <p className='text-[#bcbcbc]'>{edu.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ContactComp />
    </>


  )
}

export default AboutMe