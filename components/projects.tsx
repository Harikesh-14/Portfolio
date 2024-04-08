"use client";

import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '@/context/activeSectionContext'

import SectionHeading from './section-heading'
import ProjectCard from './project-card'

import { projectsData } from '../lib/data'

function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.5
  })
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext()

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection('Projects')
    }
  }, [inView, timeOfLastClick])

  return (
    <section ref={ref} className='mt-20 scroll-mt-28' id='projects'>
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

export default Projects