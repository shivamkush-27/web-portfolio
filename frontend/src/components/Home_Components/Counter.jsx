import React from 'react'

const Counter = () => {
    return (
        <div class="grid w-full grid-cols-1 md:grid-cols-3 gap-8">
            <div class="flex flex-col items-center shadow-[inset_5px_5px_10px_#0e0e0e,inset_-5px_-5px_10px_#202735] px-12 py-10 rounded-[2rem]">
                <h3 class="text-3xl font-normal leading-tight text-center text-white">03</h3>
                <p class="text-base font-medium leading-6 text-center text-[#bcbcbc]">Years Experience</p>
            </div>
            <div class="flex flex-col items-center shadow-[inset_5px_5px_10px_#0e0e0e,inset_-5px_-5px_10px_#202735] px-12 py-10 rounded-[2rem]">
                <h3 class="text-3xl font-normal leading-tight text-center text-white">50+</h3>
                <p class="text-base font-medium leading-6 text-center text-[#bcbcbc]">Clients Worldwide</p>
            </div>
            <div class="flex flex-col items-center shadow-[inset_5px_5px_10px_#0e0e0e,inset_-5px_-5px_10px_#202735] px-12 py-10 rounded-[2rem]">
                <h3 class="text-3xl font-normal leading-tight text-center text-white">100+</h3>
                <p class="text-base font-medium leading-6 text-center text-[#bcbcbc]">Total Projects</p>
            </div>
        </div>
    )
}

export default Counter