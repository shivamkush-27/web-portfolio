import React from 'react'

const Nav = () => {
    return (
        <div className='header w-20 relative top-4 left-0 float-left items-center bg-black'>
            <navbar>
                <div className="absolute top-0 w-16 bg-black px-2 py-4">
                    <div className="flex mb-6">
                        <div className="group flex cursor-pointer items-center justify-center">
                            <div className="space-y-2">
                                <span className="block h-0.5 w-8 origin-center rounded-full bg-white transition-transform group-hover:w-10 group-hover:bg-[#f6b846]"></span>
                                <span className="block h-0.5 w-10 origin-center rounded-full bg-white transition-transform group-hover:bg-[#f6b846]"></span>
                                <span className="block h-0.5 w-8 origin-center rounded-full bg-white transition-transform group-hover:w-10 group-hover:bg-[#f6b846]"></span>
                            </div>
                        </div>
                    </div>
                    <ul className="flex flex-col space-y-6 mt-14 py-6">
                        <li className="transition duration-500">
                        About
                        </li>
                        <li className="">Products</li>
                        <li className="">About</li>
                        <li className="">Contact</li>
                        <li className="">Logout</li>
                    </ul>
                </div>
            </navbar>
        </div>
    )
}

export default Nav