import Lottie from 'lottie-react'
import React, { forwardRef } from 'react'
import animationData from '../../animations/Animation2.json'

const About = forwardRef(({id}, ref) => {
  return (
    <div className="w-full shadow-sm">
      <div ref={ref} id={id} className="CONTAINER max-w-5xl mx-auto px-5 t:px-10 d:px-12 pb-20 pt-10 d:pt-20 flex flex-col d:flex-row items-center justify-center gap-4">
        <div className="w-fit d:w-[45%] h-full mx-auto">
          <Lottie animationData={animationData} loop={true} autoplay={true} className='w-fit -translate-x-4'  />
        </div>
        <div className="max-w-[30rem] h-full flex flex-col gap-3 text-center d:text-start">
          <p className="text-xl font-extrabold text-blue">ABOUT ME</p>
          <p className='text-2xl font-extrabold'>Full-Stack Developer<br></br> based in Oujda,<br className='t:hidden'></br> Morocco 📍</p>
          <p className='text-lght-blk text-lg'>Hey, my name is Oussama, and I'm a Web Developer. passionate to create and develop clean creative applications.</p>
          <p className='text-lght-blk text-lg'>My main stack currently is React/Next.js in combination with Tailwind CSS and TypeScript.</p>
        </div>
      </div>
    </div>

  )
})

export default About