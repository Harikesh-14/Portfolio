"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'

import { useSectionInView } from '@/lib/hook'

function Skills() {
  const { ref } = useSectionInView('Skills')

  return (
    <section
      className='mt-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'
      id='skills'
      ref={ref}
    >
      <SectionHeading text='Skills' />

      <ul className='flex flex-wrap justify-center gap-2 text-gray-800'>
        {
          skillsData.map((skill, index) => (
            <li
              className='bg-white border border-black/[0.1] rounded-xl px-4 py-2'
              key={index}
            >
              {skill}
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default Skills