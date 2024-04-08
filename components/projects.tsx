import React from 'react'
import SectionHeading from './section-heading'

import { projectsData } from '../lib/data'
import Image from 'next/image'

function Projects() {
  return (
    <section className='mt-20'>
      <SectionHeading text='My Projects' />

      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <ProjectCard {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}

type ProjectCardProps = (typeof projectsData)[number]

function ProjectCard({ title, description, tags, imageUrl }: ProjectCardProps) {
  return (
    <section className='group relative bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden rounded-lg sm:pr-8 sm:h-[17rem] mb-4 sm:mb-8 last:mb-0 hover:bg-gray-200 transition cursor-pointer'>
      <div className='pt-4 pb-5 px-5 sm:pl-10 sm:pr-2 sm:pt-7 sm:max-w-[55%] flex flex-col h-full group-even:ml-[18rem]'>
        <h3 className='font-semibold text-2xl'>{title}</h3>
        <p className='mt-2 text-gray-700'>{description}</p>
        <ul className='flex flex-wrap mt-2 gap-2 sm:mt-auto'>
          {tags.map((tag, index) => (
            <li
              className='bg-black/[0.7] px-3 py-1 uppercase text-[0.7rem] tracking-wider text-white rounded-full'
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <Image
        src={imageUrl}
        alt='Project Image'
        quality={95}
        className='absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-40 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.05] group-even:group-hover:-translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-3 transition-all ease-linear'
      />
    </section>
  )
}

export default Projects