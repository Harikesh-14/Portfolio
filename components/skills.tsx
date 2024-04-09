"use client"

import React from 'react'
import { delay, motion } from 'framer-motion'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'

import { useSectionInView } from '@/lib/hook'

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    }
  })
}

function Skills() {
  const { ref } = useSectionInView('Skills')

  return (
    <section
      className='mt-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-28'
      id='skills'
      ref={ref}
    >
      <SectionHeading text='Skills' />

      <ul className='flex flex-wrap justify-center gap-2 text-gray-800'>
        {
          skillsData.map((skill, index) => (
            <motion.li
              className='bg-white border border-black/[0.1] rounded-xl px-4 py-2'
              key={index}
              variants={fadeInAnimationVariants}
              initial='initial'
              whileInView='animate'
              viewport={{
                once: true
              }}
              custom={index}
            >
              {skill}
            </motion.li>
          ))
        }
      </ul>
    </section>
  )
}

export default Skills