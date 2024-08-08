import React from 'react'
import {socialIcon, contactIcon } from '../constant/contact-info'
const Contact = () => {
    function handleSubmit(e) {
        e.preventDefault();
      }
    return (
        <>
            <div className="grid sm:grid-cols-2 gap-16 rounded-md">
                <div className='mx-auto'>
                <h2 className='bg-clip-text text-5xl font-bold text-transparent bg-gradient-to-r from-[#8750F7] to-white pb-2 mb-2'>Let's talk together!</h2>
                    <p className="text-xl text-white mt-3">I design and code beautifully simple things and I love what I do. Just simple like that!</p>
                    <div className="mt-6">
                        <ul className="mt-3">
                            {contactIcon.map((icon, index) =>(
                                <li className="flex items-center mt-3" key={index}>
                                <div className="border-[#8750F7] border-2 h-10 w-10 p-2 rounded-full flex items-center justify-center shrink-0">
                                    <img src={icon.icon} className='text-white' />
                                </div>
                                <a target="blank" href={icon.link} className="text-white text-sm ml-3">
                                    <strong>{icon.label}</strong>
                                </a>
                            </li>
                            ))}
                            
                        </ul>
                    </div>
                    <div className="mt-6">
                        <h2 className="text-2xl bg-clip-text font-extrabold text-transparent bg-gradient-to-r from-[#8750F7] to-white">Drop a message</h2>
                        <ul className="flex mt-3 space-x-4">
                            {socialIcon.map((icon,index)=>(
                                <li className="border-[#8750F7] border-2 h-10 w-10 p-2 rounded-full flex items-center justify-center shrink-0" key={index}>
                                <a href={icon.link} target='blank'>
                                    <img src={icon.icon} />
                                </a>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <form action="" method="" className="ml-auo space-y-4 text-black">
                    <input type='text' name="name" placeholder='Name'
                        className="w-full rounded-md py-3 px-4 border text-sm outline-[#2a1454]" required />
                    <input type='email'
                        name='email'
                        placeholder='Email'
                        className="w-full rounded-md py-3 px-4 border text-sm outline-[#2a1454]" required />
                    <input type='tel' placeholder='Phone Number'
                        name='pnumber' className="w-full rounded-md py-3 px-4 border text-sm outline-[#2a1454]" required />
                    <textarea placeholder='Message' rows="6"
                        name='message'
                        className="w-full rounded-md px-4 border text-sm pt-2.5 outline-[#2a1454]"></textarea>
                    <button type='submit'
                        className="text-white bg-[#8750F7] hover:bg-[#2a1454] font-semibold rounded-full text-sm px-4 py-3 w-full" onClick={handleSubmit}>Send</button>
                </form>
            </div>
        </>
    )
}

export default Contact