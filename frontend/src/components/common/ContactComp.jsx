import React from 'react'
import Profile from './Profile'
import Connect from './Connect'
import BlogComp from './BlogComp'
import { Link } from 'react-router-dom';

const ContactComp = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-8 gap-y-8 text-white mt-8">
        <a href='https://bhogul.com/?utm_source=github&utm_medium=social' target='blank' title='Visit Blog' className="group rounded-[2rem] col-span-1 flex items-center p-8 overflow-hidden relative shadow-[inset_5px_5px_10px_#0e0e0e,inset_-5px_-5px_10px_#202735] cursor-pointer">
          <p className='w-full'> <BlogComp /> </p>
        </a>
        <Link to='/contact' title='Connect with Me'
          className="group rounded-[2rem] col-span-2 flex items-center p-8 overflow-hidden relative shadow-[inset_5px_5px_10px_#0e0e0e,inset_-5px_-5px_10px_#202735] cursor-pointer">
          <p href="#" className='w-full'> <Profile /> </p>
        </Link>
        <Link to='/contact' title='Connect with Me'
          className="group rounded-[2rem] col-span-1 flex items-end p-8 overflow-hidden relative shadow-[inset_5px_5px_10px_#0e0e0e,inset_-5px_-5px_10px_#202735] cursor-pointer">
          <p href="#" className='w-full'> <Connect /> </p>
        </Link>
      </div>

    )
}

export default ContactComp