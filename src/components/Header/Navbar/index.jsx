import React, { useState } from 'react';

const Navbar = ({ scrollToSection, sections }) => {
  const [showLinks, setShowLinks] = useState(false)

  return <div className='w-full fixed top-0 z-50 h-fit py-6 px-5 t:px-10 d:px-12 shadow-shdw font-black text-xl bg-white flex items-center justify-between overflow-hidden'>
    <p className="LOGO cursor-pointer" onClick={() => scrollToSection(sections.header)}>Oussama.dev</p>
    <div className={`NAVLINKS ${!showLinks ? 'left-0 top-0 translate-x-[-100%] d:translate-x-0' : 'left-0 top-0 translate-x-0'} transition-all duration-500 flex gap-6 text-lg font-bold d:font-extrabold flex-col items-center justify-center d:flex-row w-screen h-screen d:w-fit d:h-fit d:bg-white fixed d:static bg-gry`}>
      <span className='absolute right-6 top-6 d:hidden' onClick={() => setShowLinks(false)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-x"><path d="M18 6l-12 12"></path><path d="M6 6l12 12"></path></svg>
      </span>
      <p className='hover:text-blue cursor-pointer transition-all duration-400' onClick={() => {scrollToSection(sections.header); setShowLinks(false)}}>Home</p>
      <p className='hover:text-blue cursor-pointer transition-all duration-400' onClick={() => {scrollToSection(sections.about); setShowLinks(false)}}>About</p>
      <p className='hover:text-blue cursor-pointer transition-all duration-400' onClick={() => {scrollToSection(sections.projetcs); setShowLinks(false)}}>Projects</p>
      <p className='hover:text-blue cursor-pointer transition-all duration-400' onClick={() => {scrollToSection(sections.contact); setShowLinks(false)}}>Contact</p>
    </div>
    <div className="Burger d:hidden" onClick={() => setShowLinks(true)}>
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mobile-menu"><path d="M4 6l16 0"></path><path d="M4 12l16 0"></path><path d="M4 18l16 0"></path></svg>
    </div>
  </div>;
};

export default Navbar;
