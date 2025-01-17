import React from 'react'
import { Link } from 'react-router-dom'
import Intro from '../components/Home_Components/Intro'
import About from '../components/Home_Components/About'
import ProjectComp from '../components/Home_Components/ProjectComp'
import SkillComp from '../components/Home_Components/SkillComp'
import Counter from '../components/Home_Components/Counter'
import NewsTicker from '../components/Home_Components/NewsTicker'
import ContactComp from '../components/common/ContactComp'


const Home = () => {
  return (
    <>
    <head>
    <title>Shivam ~ Web Developer</title>
    <link rel="preload" as="image" href="https://shivam-kush.vercel.app/assets/Discord-BSCtQagg.jpeg"></link>
    </head>
      {/* Section 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* Info Card */}
        <Link to='/about-me'
          className="group col-span-1 lg:col-span-2 flex justify-between items-center flex-col rounded-[2rem] row-span-1 lg:row-span-2 lg:h-full p-8 relative shadow-[inset_5px_5px_10px_#0e0e0e,inset_-5px_-5px_10px_#202735] cursor-pointer" title='About Me'>
          <Intro /> 
        </Link>

        {/* Blog Ticker */}
        <div
          className="rounded-full col-span-1 lg:col-span-2 flex justify-between items-center px-4 overflow-hidden relative min-h-[60px] shadow-[inset_5px_5px_10px_#0e0e0e,inset_-5px_-5px_10px_#202735] cursor-pointer">
          <NewsTicker />
        </div>

        {/* About Me */}
        <Link to='/about-me'
          className="group rounded-[2rem] col-span-1 flex justify-between items-center p-8 overflow-hidden relative shadow-[inset_5px_5px_10px_#0e0e0e,inset_-5px_-5px_10px_#202735] cursor-pointer" title='Credentials'>
         <About /> 
        </Link>

        {/* Project */}
        <Link to='/projects'
          className="group rounded-[2rem] col-span-1 flex items-center p-8 overflow-hidden relative shadow-[inset_5px_5px_10px_#0e0e0e,inset_-5px_-5px_10px_#202735] cursor-pointer" title='Projects'>
          <ProjectComp />
        </Link>
      </div>

      {/* Section 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full p-1 mt-8">
        <Link to='/services' title='Services' className="group col-span-1 rounded-[2rem] xl:px-12 xl:py-8 p-8 lg:col-span-6 shadow-[inset_5px_5px_10px_#0e0e0e,inset_-5px_-5px_10px_#202735] cursor-pointer">
          <span className='w-full'> <SkillComp /> </span>
        </Link>
        <div className="col-span-1 rounded-[2rem] xl:px-8 xl:py-8 p-8 lg:col-span-6 shadow-[inset_5px_5px_10px_#0e0e0e,inset_-5px_-5px_10px_#202735]">
          <Counter />
        </div>
      </div>
      {/* Section 3 */}
      <ContactComp />
      
    </>
  )
}

export default Home