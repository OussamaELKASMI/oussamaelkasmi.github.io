import React, { forwardRef } from 'react'

const Contact = forwardRef(({id}, ref) => {
  return (
    <div className="w-full shadow-sm">
      <div ref={ref} id={id} className="CONTAINER max-w-5xl mx-auto h-fit px-5 t:px-10 d:px-12 py-20 flex flex-col gap-4 text-center t:text-start">
        <p className="text-xl font-extrabold text-blue">CONTACT</p>
        <p className="text-2xl font-extrabold">What can I do for you!?</p>
        <div className="w-full pt-10 flex flex-col t:flex-row items-center gap-16">
          <div className="w-fit flex flex-col t:flex-row items-center gap-4">
            <div className="w-fit h-fit p-3 bg-gry rounded-full shadow-shdw-lg border text-blue">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#147efb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-map-search"><path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5"></path><path d="M9 4v13"></path><path d="M15 7v5"></path><path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M20.2 20.2l1.8 1.8"></path></svg>
            </div>
            <div className="w-fit">
              <p className='text-lg font-bold'>Location</p>
              <p className='text-lg text-lght-blk'>Oujda, Morocco</p>
            </div>
          </div>
          <div className="w-fit flex flex-col t:flex-row items-center gap-4">
            <div className="w-fit h-fit p-3 bg-gry rounded-full shadow-shdw-lg border text-blue">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#147efb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-mail"><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path><path d="M3 7l9 6l9 -6"></path></svg>
            </div>
            <div className="w-fit">
              <p className='text-lg font-bold'>Mail</p>
              <p className='text-lg text-lght-blk'>m.elkasmioussama@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

export default Contact