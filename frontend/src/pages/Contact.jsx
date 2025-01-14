import React from 'react'
import { GiJusticeStar } from "react-icons/gi";
import { CiMail, CiLocationArrow1 } from "react-icons/ci";
import { SocialLinks } from './AboutMe';
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { FaBlogger, FaDev, FaTwitterSquare } from "react-icons/fa";
const Contact = () => {
  return (
    <>
      <title>Contact Us</title>
      <div className="grid grid-cols-1 lg:grid-cols-6 lg:gap-8 gap-y-8 text-white mt-8">
        <div className="group rounded-[2rem] col-span-2 p-8 lg:sticky top-20 shadow-[inset_5px_5px_10px_#0e0e0e,inset_-5px_-5px_10px_#202735]"
          style={{ height: "fit-content" }}
        >
          <div>
            <h3 className="text-3xl font-medium lg:text-left md:text-center text-left">Let's Talk</h3>
            <ul className="mt-3 space-y-4 flex lg:flex-col md:flex-row flex-col justify-between">
              <li className="flex items-center">
                <div className="rounded-lg flex items-center justify-center shrink-0 shadow-[inset_5px_5px_10px_#0e0e0e,inset_-5px_-5px_10px_#202735] p-4">
                  <CiMail size={30} />
                </div>
                <a target="blank" href="#" className="text-sm ml-3">
                  <small className="block uppercase text-md font-medium text-[#bcbcbc]">Mail us</small>
                  <small className='block font-medium text-sm xl:text-lg'>developer@bhogul.com</small>
                </a>
              </li>
              <li className="flex items-center">
                <div className="rounded-lg flex items-center justify-center shrink-0 shadow-[inset_5px_5px_10px_#0e0e0e,inset_-5px_-5px_10px_#202735] p-4">
                  <CiLocationArrow1 size={30} />
                </div>
                <a target="blank" href="#" className="text-sm ml-3">
                  <small className="block uppercase text-md font-medium text-[#bcbcbc]">Location</small>
                  <small className='block font-medium text-sm xl:text-lg'>Gurugram, Haryana</small>
                </a>
              </li>
            </ul>
            <div className="mt-8">
              <h3 className="text-3xl font-medium lg:text-left md:text-center text-left">Social Links</h3>
              <div className="flex flex-wrap xl:justify-start justify-center gap-x-8 xl:gap-x-4 gap-y-4 my-6">
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
        </div>

        <div className="col-span-4 relative space-y-8">
          <div className="w-full flex flex-nowrap justify-center items-center text-center lg:text-5xl sm:text-3xl text-2xl space-x-2  ">
            <GiJusticeStar className="text-[#bcbcbc] select-none" />
            <h2 className="uppercase">Lets Work <span className="text-[#3B9DF8]">Together</span></h2>
            <GiJusticeStar className="text-[#bcbcbc] select-none" />
          </div>
          <div className='p-8 shadow-[inset_5px_5px_10px_#0e0e0e,inset_-5px_-5px_10px_#202735] rounded-[2rem] space-y-2'>
            <form class=" space-y-8">
              <input type='text' placeholder='Name'
                class="w-full bg-transparent rounded-md p-6 text-sm shadow-[inset_5px_5px_10px_#0e0e0e,inset_-5px_-5px_10px_#202735] focus:outline-none" />
              <input type='email' placeholder='Email'
                class="w-full bg-transparent rounded-md p-6 text-sm shadow-[inset_5px_5px_10px_#0e0e0e,inset_-5px_-5px_10px_#202735] focus:outline-none" />
              <input type='text' placeholder='Subject'
                class="w-full bg-transparent rounded-md p-6 text-sm shadow-[inset_5px_5px_10px_#0e0e0e,inset_-5px_-5px_10px_#202735] focus:outline-none" />
              <textarea placeholder='Message' rows="3"
                class="w-full bg-transparent rounded-md p-6 text-sm shadow-[inset_5px_5px_10px_#0e0e0e,inset_-5px_-5px_10px_#202735] focus:outline-none"></textarea>
              <button type='button'
                class="text-white shadow-[2px_2px_10px_#0e0e0e,-2px_-2px_10px_#202735] hover:shadow-[inset_5px_5px_10px_#0e0e0e,inset_-5px_-5px_10px_#202735] py-4 px-8 rounded-full">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact