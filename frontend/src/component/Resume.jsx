import React from 'react'
import { Education, Experience } from '../constant/res-history';

const Resume = () => {
    return (
        <>
            <div className="section-header">
                <h2 className='bg-clip-text text-5xl font-bold text-transparent bg-gradient-to-r from-[#8750F7] to-white pb-2 mb-2'>Education & Work Experience</h2>
            </div>
            <section className="grid gap-12 md:justify-between md:grid-cols-3 xl:gap-36 bg-[#140C1C] md:gap-4 md:p-4 px-10 border border-[#2a1454] rounded-2xl my-8">
                <div className="w-full">
                    <div className="md:px-7 pt-8 rounded-[20px] mb-8">
                        <h4 className='bg-clip-text text-xl font-bold text-[#8750f7] pb-4 mb-2 uppercase'>Education</h4>
                        <div className="max-w-xl mx-auto py-4">
                            <div className="flow-root">
                                <ul className="-mb-8">
                                    {Education.map((label, index) => (
                                        <li key={index}>
                                            <div className="relative pb-8">
                                                <span className="absolute top-[0.75rem] left-[0.65rem] -ml-px h-full w-[1px] bg-[#747779]" aria-hidden="true"></span>
                                                <div className="relative flex items-start space-x-3">
                                                    <div>
                                                        <div className="relative px-1">
                                                            <div className="h-3 w-3 bg-[#8750F7] rounded-full flex items-center justify-center">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="min-w-0 flex-1 py-0">
                                                        <div className="space-y-2 pl-2">
                                                            <h4 className="font-semibold text-xl text-white mr-2 uppercase">{label.institute}</h4>
                                                            <h5 className="font-medium text-lg">{label.level} || {label.stream}</h5>
                                                            <h6 className="font-medium text-base text-[#747779]">{label.time}</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <div className="md:px-7 pt-8 rounded-[20px] mb-8">
                        <h4 className='bg-clip-text text-xl font-bold text-[#8750f7] pb-4 mb-2 uppercase'>Experience</h4>
                        <div className="max-w-xl mx-auto py-4">
                            <div className="flow-root">
                                <ul className="-mb-8">
                                    {Experience.map((label, index) => (
                                        <li key={index}>
                                            <div className="relative pb-8">
                                                <span className="absolute top-[0.75rem] left-[0.65rem] -ml-px h-full w-[1px] bg-[#747779]" aria-hidden="true"></span>
                                                <div className="relative flex items-start space-x-3">
                                                    <div>
                                                        <div className="relative px-1">
                                                            <div className="h-3 w-3 bg-[#8750F7] rounded-full flex items-center justify-center">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="min-w-0 flex-1 py-0">
                                                        <div className="space-y-2 pl-2">
                                                            <h4 className="font-semibold text-xl text-white mr-2 uppercase">{label.company}</h4>
                                                            <h5 className="font-medium text-lg">{label.position}</h5>
                                                            <h6 className="font-medium text-base text-[#747779]">{label.time}</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <div className="md:px-7 pt-8 rounded-[20px] mb-8">
                        <h4 className='bg-clip-text text-xl font-bold text-[#8750f7] pb-4 mb-2 uppercase'>Past Roles</h4>
                        <div className="max-w-xl mx-auto py-4">
                            <div className="flow-root">
                                <ul className="-mb-8">
                                    {Experience.map((label, index) => (
                                        <li key={index}>
                                            <div className="relative pb-8">
                                                <span className="absolute top-[0.75rem] left-[0.65rem] -ml-px h-full w-[1px] bg-[#747779]" aria-hidden="true"></span>
                                                <div className="relative flex items-start space-x-3">
                                                    <div>
                                                        <div className="relative px-1">
                                                            <div className="h-3 w-3 bg-[#8750F7] rounded-full flex items-center justify-center">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="min-w-0 flex-1 py-0">
                                                        <div className="space-y-2 pl-2">
                                                            <h4 className="font-semibold text-xl text-white mr-2 uppercase">{label.company}</h4>
                                                            <h5 className="font-medium text-lg">{label.position}</h5>
                                                            <h6 className="font-medium text-base text-[#747779]">{label.time}</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Resume