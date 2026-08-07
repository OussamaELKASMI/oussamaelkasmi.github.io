import { ExternalLink, LockKeyhole } from 'lucide-react';
import React, { forwardRef, useState } from 'react';
import StackIcon from 'tech-stack-icons';

const Projects = forwardRef(({ id }, ref) => {
  const [projectFourImage, setProjectFourImage] = useState(0);

  return (
    <section className="w-full shadow-sm">
      <div
        ref={ref}
        id={id}
        className="CONTAINER max-w-5xl w-full h-fit px-5 t:px-10 d:px-12 py-20 mx-auto"
      >
        <h2 className="text-2xl font-extrabold pb-12 text-blue">PROJECTS</h2>

        <div className="flex flex-col gap-10 d:gap-28">
          <article className="relative grid min-h-[32rem] grid-cols-1 items-center overflow-hidden rounded-lg border shadow-shdw-lg d:min-h-0 d:grid-cols-12 d:overflow-visible d:rounded-none d:border-0 d:shadow-none">
            <div className="project-image absolute inset-0 h-full overflow-hidden d:relative d:inset-auto d:col-span-7 d:col-start-6 d:row-start-1 d:h-[20rem] d:rounded-lg d:border d:shadow-shdw-lg">
              <img
                src="/projects/projectone.png"
                alt="Prime Casuals fashion storefront"
                className="animate-image block h-full w-full object-cover object-top d:h-auto"
                loading="lazy"
              />

              <div className="pointer-events-none absolute inset-0 bg-lght-blk/80 d:hidden" />
            </div>

            <div className="relative z-10 flex min-h-[32rem] flex-col justify-center p-6 d:block d:min-h-0 d:p-0 d:col-start-1 d:col-span-7 d:row-start-1">
              <h3 className="text-3xl font-extrabold text-white d:text-lght-blk mb-5">
                Prime Casuals
              </h3>
              <p className="bg-transparent border-0 p-0 text-base text-white shadow-none d:bg-gry d:border d:rounded-lg d:p-5 d:text-lg d:text-lght-blk d:shadow-shdw-lg">
                A responsive e-commerce storefront, focused on clear product discovery and a smooth
                shopping experience.
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-5 font-bold">
                <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
                  <StackIcon name="nextjs2" className="w-8" />
                </a>
                <a href="https://redux.js.org/" target="_blank" rel="noreferrer">
                  <StackIcon name="redux" className="w-8" />
                </a>
                <a href="https://mongodb.com/" target="_blank" rel="noreferrer">
                  <StackIcon name="mongodb" className="w-8" />
                </a>
                <a href="https://mongoosejs.com/" target="_blank" rel="noreferrer">
                  <StackIcon name="mongoose" className="w-8" />
                </a>
                <a href="https://cloudinary.com/" target="_blank" rel="noreferrer">
                  <StackIcon name="cloudinary" className="w-8" />
                </a>
                <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
                  <StackIcon name="tailwindcss" className="w-8" />
                </a>
                <a href="https://stripe.com/" target="_blank" rel="noreferrer">
                  <StackIcon name="stripe" className="w-8" />
                </a>
                <a href="https://resend.com/" target="_blank" rel="noreferrer">
                  <StackIcon name="resend" className="w-8" />
                </a>
              </div>
              <div className="flex flex-wrap gap-x-2 gap-y-2 mt-5 font-bold">
                <span className="text-white d:text-lght-blk">E-commerce</span>
                <span className="text-white d:text-lght-blk">|</span>
                <span className="text-white d:text-lght-blk">Responsive UI</span>
                <span className="text-white d:text-lght-blk">|</span>
                <span className="text-white d:text-lght-blk">Payments</span>
              </div>
              <a
                href="https://primecasuals.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-2 mt-5 font-extrabold text-white d:text-lght-blk hover:text-blue transition-colors"
                aria-label="Visit Prime Casuals live site in a new tab"
              >
                <ExternalLink size={24} className="text-white d:text-lght-blk" aria-hidden="true" />
              </a>
            </div>
          </article>

          <article className="relative grid min-h-[32rem] grid-cols-1 items-center overflow-hidden rounded-lg border shadow-shdw-lg d:min-h-0 d:grid-cols-12 d:overflow-visible d:rounded-none d:border-0 d:shadow-none">
            <div className="absolute inset-0 h-fit overflow-hidden d:relative d:inset-auto d:h-[20rem] d:rounded-lg d:border d:shadow-shdw-lg d:col-start-1 d:col-span-7 d:row-start-1">
              <img
                src="./projects/projecttwo.png"
                alt="LilPrinties e-commerce administration dashboard"
                className="w-full h-full"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-lght-blk/80 d:hidden pointer-events-none" />
            </div>

            <div className="relative z-10 flex min-h-[32rem] flex-col justify-center p-6 d:block d:min-h-0 d:p-0 d:text-right d:col-start-6 d:col-span-7 d:row-start-1">
              <h3 className="text-3xl font-extrabold text-white d:text-lght-blk mb-5">
                Prime Casuals Dashboard
              </h3>
              <p className="bg-transparent border-0 p-0 text-base text-white shadow-none d:bg-gry d:border d:rounded-lg d:p-5 d:text-lg d:text-lght-blk d:shadow-shdw-lg text-left">
                An administration dashboard for managing products, orders, customers, sales, and
                newsletter activity from one place.
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-5 font-bold d:justify-end">
                <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
                  <StackIcon name="nextjs2" className="w-8" />
                </a>
                <a href="https://resend.com/" target="_blank" rel="noreferrer">
                  <StackIcon name="nestjs" className="w-8" />
                </a>
                <a href="https://resend.com/" target="_blank" rel="noreferrer">
                  <StackIcon name="graphql" className="w-8" />
                </a>
                <a href="https://redux.js.org/" target="_blank" rel="noreferrer">
                  <StackIcon name="redux" className="w-8" />
                </a>
                <a href="https://mongodb.com/" target="_blank" rel="noreferrer">
                  <StackIcon name="mongodb" className="w-8" />
                </a>
                <a href="https://mongoosejs.com/" target="_blank" rel="noreferrer">
                  <StackIcon name="mongoose" className="w-8" />
                </a>
                <a href="https://cloudinary.com/" target="_blank" rel="noreferrer">
                  <StackIcon name="cloudinary" className="w-8" />
                </a>
              </div>
              <div className="flex flex-wrap gap-x-2 gap-y-2 mt-5 font-bold d:justify-end">
                <span className="text-white d:text-lght-blk">Dashboard</span>
                <span className="text-white d:text-lght-blk">|</span>
                <span className="text-white d:text-lght-blk">Analytics</span>
                <span className="text-white d:text-lght-blk">|</span>
                <span className="text-white d:text-lght-blk">Product Management</span>
              </div>
              <span className="inline-flex w-fit items-center gap-2 mt-5 font-extrabold text-white d:ml-auto d:text-lght-blk">
                <LockKeyhole size={19} className="text-white d:text-lght-blk" aria-hidden="true" />
                Private Project
              </span>
            </div>
          </article>

          <article className="relative grid min-h-[32rem] grid-cols-1 items-center overflow-hidden rounded-lg border shadow-shdw-lg d:min-h-0 d:grid-cols-12 d:overflow-visible d:rounded-none d:border-0 d:shadow-none">
            <div className="project-image absolute inset-0 h-full overflow-hidden d:relative d:inset-auto d:col-span-7 d:col-start-6 d:row-start-1 d:h-[20rem] d:rounded-lg d:border d:shadow-shdw-lg">
              <img
                src="./projects/projecthree.png"
                alt="Prime Casuals fashion storefront"
                className="animate-image block h-full w-full object-cover object-top d:h-auto"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-lght-blk/80 d:hidden pointer-events-none" />
            </div>

            <div className="relative z-10 flex min-h-[32rem] flex-col justify-center p-6 d:block d:min-h-0 d:p-0 d:col-start-1 d:col-span-7 d:row-start-1">
              <h3 className="text-3xl font-extrabold text-white d:text-lght-blk mb-5">
                Ayman's Portfolio
              </h3>
              <p className="bg-transparent border-0 p-0 text-base text-white shadow-none d:bg-gry d:border d:rounded-lg d:p-5 d:text-lg d:text-lght-blk d:shadow-shdw-lg">
                A responsive personal portfolio website showcasing a digital marketing specialist’s
                skills, experience, services, and projects.
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-5 font-bold">
                <a href="https://vuejs.org/" target="_blank" rel="noreferrer">
                  <StackIcon name="vuejs" className="w-8" />
                </a>

                <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
                  <StackIcon name="tailwindcss" className="w-8" />
                </a>
              </div>
              <div className="flex flex-wrap gap-x-2 gap-y-2 mt-5 font-bold">
                <span className="text-white d:text-lght-blk">Portfolio</span>
                <span className="text-white d:text-lght-blk">|</span>
                <span className="text-white d:text-lght-blk">Responsive UI</span>
              </div>
              <a
                href="https://aymanouhandida.github.io/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-2 mt-5 font-extrabold text-white d:text-lght-blk hover:text-blue transition-colors"
                aria-label="Visit Prime Casuals live site in a new tab"
              >
                <ExternalLink size={24} className="text-white d:text-lght-blk" aria-hidden="true" />
              </a>
            </div>
          </article>

          <article className="relative grid min-h-[32rem] grid-cols-1 items-center overflow-hidden rounded-lg border shadow-shdw-lg d:min-h-0 d:grid-cols-12 d:overflow-visible d:rounded-none d:border-0 d:shadow-none">
            <div className="project-image absolute inset-0 h-full overflow-hidden d:relative d:inset-auto d:col-start-1 d:col-span-7 d:row-start-1 d:h-[20rem] d:rounded-lg d:border d:shadow-shdw-lg">
              <img
                src={`/projects/projectfour/${projectFourImage + 1}.png`}
                alt={`AI CodeLens dashboard screenshot ${projectFourImage + 1} of 5`}
                className="block h-full w-full"
                loading="lazy"
              />
              <div className="absolute bottom-2 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1">
                {[4, 1, 2, 3, 0].map((image) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setProjectFourImage(image)}
                    className="flex h-9 w-9 items-center justify-center"
                    aria-label={`Show AI CodeLens screenshot ${image + 1}`}
                    aria-current={projectFourImage === image ? 'true' : undefined}
                  >
                    <span
                      className={`h-2 w-2 rounded-full ${
                        projectFourImage === image ? 'bg-white' : 'bg-white/40'
                      }`}
                    />
                  </button>
                ))}
              </div>
              <div className="pointer-events-none absolute inset-0 bg-lght-blk/80 d:hidden" />
            </div>

            <div className="pointer-events-none relative z-10 flex min-h-[32rem] flex-col justify-center p-6 d:pointer-events-auto d:block d:min-h-0 d:p-0 d:text-right d:col-start-6 d:col-span-7 d:row-start-1">
              <h3 className="mb-5 text-3xl font-extrabold text-white d:text-lght-blk">
                AI CodeLens
              </h3>
              <p className="border-0 bg-transparent p-0 text-base text-white shadow-none d:rounded-lg d:border d:bg-gry d:p-5 d:text-lg d:text-lght-blk d:shadow-shdw-lg text-left">
                A three-part AI code quality platform: a Cursor extension captures coding activity,
                a Fastify API, and a React dashboard.
              </p>
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 font-bold d:justify-end">
                <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
                  <StackIcon name="typescript" className="w-8" />
                </a>
                <a href="https://sql.js.org/#/" target="_blank" rel="noreferrer">
                  <StackIcon name="sqlite" className="w-8" />
                </a>
                <a href="https://fastify.dev/" target="_blank" rel="noreferrer">
                  <img src="/assets/fastify.png" alt="Fastify" className="w-8 my-auto" />
                </a>
                <a href="https://react.dev/" target="_blank" rel="noreferrer">
                  <StackIcon name="react" className="w-8" />
                </a>
                <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
                  <StackIcon name="tailwindcss" className="w-8" />
                </a>
                <a href="https://www.radix-ui.com/" target="_blank" rel="noreferrer">
                  <StackIcon name="radixui" className="w-8" />
                </a>
              </div>

              <div className="mt-5 flex flex-wrap gap-x-2 gap-y-2 font-bold d:justify-end">
                <span className="text-white d:text-lght-blk">Cursor Extension</span>
                <span className="text-white d:text-lght-blk">|</span>
                <span className="text-white d:text-lght-blk">API</span>
                <span className="text-white d:text-lght-blk">|</span>
                <span className="text-white d:text-lght-blk">Dashboard</span>
              </div>
              <span className="mt-5 inline-flex w-fit items-center gap-2 font-extrabold text-white d:ml-auto d:text-lght-blk">
                <LockKeyhole size={19} className="text-white d:text-lght-blk" aria-hidden="true" />
                Private Project
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
});

export default Projects;
