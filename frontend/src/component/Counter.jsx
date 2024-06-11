import React from 'react'

const Counter = () => {
    return (
        <section class="grid gap-12 justify-center items-center lg:grid-cols-4 md:grid-cols-2 lg:gap-36 px-4">
            <article className='mx-auto'>
                <div class="w-14 border-[#8750F7] border-2 h-14 flex justify-center rounded-full items-center mb-6 bg-transparent ">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8750F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-briefcase-business"><path d="M12 12h.01"/><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M22 13a18.15 18.15 0 0 1-20 0"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>
                </div>
                <h2>
                    <span class="flex text-white text-6xl font-bold mb-2">
                        3+
                    </span>
                    <span class="inline-flex font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#8750F7] to-indigo-500 mb-2">Years Experience</span>
                </h2>
            </article>
            <article className='mx-auto'>
                <div class="w-14 border-[#8750F7] border-2 h-14 justify-center rounded-full flex items-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8750F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard-list"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>
                </div>
                <h2>
                    <span class="flex text-white text-6xl font-bold mb-2">
                        70+
                    </span>
                    <span class="inline-flex font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#8750F7] to-indigo-500 mb-2">Projects Completed</span>
                </h2>
            </article>
            <article className='mx-auto'>
                <div class="w-14 border-[#8750F7] border-2 h-14 justify-center rounded-full flex items-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8750F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users-round"><path d="M18 21a8 8 0 0 0-16 0"/><circle cx="10" cy="8" r="5"/><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"/></svg>
                </div>
                <h2>
                    <span class="flex text-white text-6xl font-bold mb-2">
                        100+
                    </span>
                    <span class="inline-flex font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#8750F7] to-indigo-500 mb-2">Clients Served</span>
                </h2>
            </article>
            <article className='mx-auto'>
                <div class="w-14 border-[#8750F7] border-2 h-14 justify-center rounded-full flex items-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8750F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-award"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/></svg>
                </div>
                <h2>
                    <span class="flex text-white text-6xl font-bold mb-2">
                        90%
                    </span>
                    <span class="inline-flex font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#8750F7] to-indigo-500 mb-2">Target Achieved</span>
                </h2>
            </article>
        </section>
    )
}

export default Counter