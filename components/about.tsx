"use client"

import React from 'react'
import { motion } from 'framer-motion'

import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hook'

function About() {
  const { ref } = useSectionInView('About')

  return (
    <section
      ref={ref}
      className='text-center max-w-[45rem] leading-8 sm:mb-0 scroll-mt-28'
      id='about'
    >
      <SectionHeading text={"About Me"} />
      <motion.p
        className='font-medium mb-3'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        As a <span className='font-bold'>Computer Science Engineering student</span>, I am deeply passionate about <span className='underline'>coding</span>, with a specialization in <span className='font-bold'>full-stack Web development</span>. My expertise lies in utilizing the <span className='font-bold underline'>MERN stack</span>, complemented by <span className='font-bold underline'>Next.js</span>, to craft <span className='underline'>dynamic and responsive websites</span> that seamlessly integrate functionality and aesthetics.

      </motion.p>

      <motion.p
        className='font-medium mb-3'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Beyond the realm of coding, I find solace in delving into topics of <span className='font-bold'>geopolitics</span> and <span className='font-bold'>Indian history</span>, enriching my understanding of the world around me. In my leisure time, I indulge in the <span className='font-bold'>culinary arts</span>, finding joy in experimenting with different cuisines. And when seeking a thrilling escape, I immerse myself in the world of <span className='font-bold'>horror movies</span>. Through this diverse blend of interests and skills, I continually seek to expand my knowledge and contribute to innovative projects within the tech industry.
      </motion.p>
    </section>
  )
}

export default About