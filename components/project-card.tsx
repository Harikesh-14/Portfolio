"use client"

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

import { projectsData } from '../lib/data'

type ProjectCardProps = (typeof projectsData)[number]

function ProjectCard({ title, description, tags, imageUrl }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  })

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className='group mb-4 sm:mb-8 last:mb-0'
    >
      <section
        className='relative bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden rounded-lg sm:pr-8 sm:h-[17rem] hover:bg-gray-200 transition cursor-pointer'
      >
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
    </motion.div>
  )
}

export default ProjectCard