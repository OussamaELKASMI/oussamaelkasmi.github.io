import React, { forwardRef } from 'react'

const Projects = forwardRef(({id}, ref) => {
  return (
    <div className="w-full shadow-sm bg-gry">
      <div ref={ref} id={id} className="CONTAINER max-w-5xl w-full h-fit px-5 t:px-10 d:px-12 py-20 mx-auto">
        <p className="text-xl font-extrabold pb-8 text-blue">PROJECTS</p>
        <div className="w-full h-full flex gap-8 flex-col d:flex-row">
          <div className="w-full d:w-[50%] h-fit d:h-[14rem] border rounded shadow-shdw-lg overflow-hidden">
            <a href="https://lilprinties.com" target='blank'>
              <img src="./projects/project1.png" alt="project1" className='animate-image' />      
            </a>
          </div>
          <div className="w-full d:w-[50%] h-fit d:h-[14rem] border rounded shadow-shdw-lg overflow-hidden">
            <img src="./projects/project2.png" alt="project2" className='w-full' />
          </div>
        </div>
      </div>
    </div>
  )
})

export default Projects