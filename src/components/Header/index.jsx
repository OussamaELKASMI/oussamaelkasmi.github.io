import React, { forwardRef } from 'react'
import Lottie from 'lottie-react'
import animationData from '../../animations/p_a_gcompr.mp4.lottie.json'

const Header = forwardRef(({ scrollToSection, sections, id }, ref) => {
  return (
    <div ref={ref} id={id} className='w-full h-fit d:h-screen bg-gry shadow-sm py-16 flex justify-center'>
      <div className="max-w-5xl h-fit mx-auto px-5 t:px-10 d:px-12 pt-10 t:pt-12 d:py-20 flex flex-col items-center gap-16 d:gap-24">
        <div className="Header-main w-full h-fit flex flex-col-reverse d:flex-row items-center justify-center gap-8">
          <div className="Header-text max-w-[30rem] d:max-w-[50rem] flex flex-col gap-8 items-center d:pt-8 text-center d:text-start">
            <div className="w-fit h-fit relative">
              <p className="w-fit text-5xl t:text-6xl font-black mb-8 t:mb-0">Full-Stack Web Developer</p>
              <img src="./assets/waving.png" alt="." className='w-12 t:w-16 absolute left-[50%] translate-x-[-50%] t:translate-x-0 t:left-[80%] d:left-[60%] bottom-[-10%] t:bottom-0' />
            </div>
            <p className='text-xl'>Hi, I'm Oussama EL Kasmi. A passionate Full-Stack Web Developer based in Morocco, Oujda. 📍</p>
            <div className="socials w-full h-fit flex gap-4 items-center justify-center d:justify-start">  
              <a href="https://www.linkedin.com/in/el-kasmi-oussama-1437071b3">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-linkedin"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M8 11l0 5"></path><path d="M8 8l0 .01"></path><path d="M12 16l0 -5"></path><path d="M16 16v-3a2 2 0 0 0 -4 0"></path></svg>
              </a>
              <a href="https://github.com/OussamaELKASMI">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-github"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>
              </a>
            </div>
          </div>
          <div className="Image self-start w-[20rem] t:w-[25rem] d:w-[35rem] mx-auto">
            <Lottie animationData={animationData} loop={true} autoplay={true} preload='true' />
          </div>
        </div>
        <div className="Skills w-full h-fit flex flex-col d:flex-row items-center gap-10">
            <p className='w-fit d:pr-4 pb-2 d:pb-0 border-b d:border-b-0 d:border-r border-lght-blk font-normal'>
              <span className='font-extrabold'>
                Tech Stack
              </span>  
            </p>
            <div className="list flex flex-wrap justify-center t:justify-start gap-10 items-center d:pl-12">
              <li className='hover:translate-y-[-20%] transition-all ease-in-out duration-500 list-none cursor-pointer w-fit'>
                <img src="https://skillicons.dev/icons?i=html,css" alt="skill-icon"/>
              </li>
              <li className='hover:translate-y-[-20%] transition-all ease-in-out duration-500 list-none cursor-pointer w-fit'>
                <img src="https://skillicons.dev/icons?i=js,ts" alt="skill-icon"/>
              </li>
              <li className='hover:translate-y-[-20%] transition-all ease-in-out duration-500 list-none cursor-pointer w-fit'>
                <img src="https://skillicons.dev/icons?i=react,next" alt="skill-icon"/>
              </li>
              <li className='hover:translate-y-[-20%] transition-all ease-in-out duration-500 list-none cursor-pointer w-fit'>
                <img src="https://skillicons.dev/icons?i=tailwind,scss" alt="skill-icon"/>
              </li>
            </div>
        </div>
      </div>
    </div>
  )
})

export default Header