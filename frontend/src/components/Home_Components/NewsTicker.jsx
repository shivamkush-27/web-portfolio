import React from 'react'
import Marquee from "react-fast-marquee";

const NewsTicker = () => {
  return (
    <Marquee pauseOnHover={true} speed={40}>
    <div className='mx-4 text-white'>Latest Blog & Posts</div>
    </Marquee>
  )
}

export default NewsTicker